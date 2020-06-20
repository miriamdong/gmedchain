import React, { Component } from 'react';
import { Grid, Button, TextField } from '@material-ui/core';
import Joi from 'joi-browser';
import { toast } from 'react-toastify';
import './style.scss';

class PostComment extends Component {
  state = {
    name: '',
    email: '',
    website: '',
    comment: '',
    error: {},
  };

  schema = {
    email: Joi.string()
      .email({ minDomainAtoms: 2 })
      .required()
      .error(errors => {
        errors.forEach(err => {
          switch (err.type) {
            case 'string.required':
              err.message = 'email no puede estar vacío';
              break;
            case 'string.email':
              err.message = 'email debe ser un email válido';
              break;
            default:
              break;
          }
        });
        return errors;
      }),
    name: Joi.string()
      .required()
      .error(errors => {
        errors.forEach(err => {
          switch (err.type) {
            case 'string.required':
              err.message = 'name no puede estar vacío';
              break;
            default:
              break;
          }
        });
        return errors;
      }),
    website: Joi.string()
      .required()
      .error(errors => {
        errors.forEach(err => {
          switch (err.type) {
            case 'string.required':
              err.message = 'website no puede estar vacío';
              break;
            default:
              break;
          }
        });
        return errors;
      }),
    comment: Joi.string()
      .required()
      .error(errors => {
        errors.forEach(err => {
          switch (err.type) {
            case 'string.required':
              err.message = 'comment no puede estar vacío';
              break;
            default:
              break;
          }
        });
        return errors;
      }),
  };

  changeHandler = event => {
    const error = { ...this.state.error };
    const errorMassage = this.validationProperty(event);
    if (errorMassage) {
      error[event.target.name] = errorMassage;
    } else {
      delete error[event.target.name];
    }
    this.setState({
      [event.target.name]: event.target.value,
      error,
    });
  };

  validationProperty = event => {
    const Obj = { [event.target.name]: event.target.value };
    const schema = { [event.target.name]: this.schema[event.target.name] };
    const { error } = Joi.validate(Obj, schema);
    return error ? error.details[0].message : null;
  };

  validate = () => {
    const options = { abortEarly: false };
    const form = {
      email: this.state.email,
      name: this.state.name,
      website: this.state.website,
      comment: this.state.comment,
    };
    const { error } = Joi.validate(form, this.schema, options);
    if (!error) return null;

    const errors = {};
    for (const item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  submitHandler = e => {
    e.preventDefault();
    const error = this.validate();
    if (error) {
      this.setState({
        error: error || {},
      });
    } else {
      toast.success('Realizado con éxito');
      this.setState({
        name: '',
        email: '',
        website: '',
        comment: '',
      });
    }
  };

  render() {
    return (
      <Grid className="postCommentFormWrap">
        <h3>Leave a Comment</h3>
        <form onSubmit={this.submitHandler}>
          <Grid container spacing={4}>
            <Grid item sm={6} xs={12}>
              <TextField
                name="name"
                value={this.state.name}
                onChange={this.changeHandler}
                variant="outlined"
                label="Tu nombre"
                error={this.state.error.name && true}
                helperText={this.state.error.name && this.state.error.name}
                fullWidth
              />
            </Grid>
            <Grid item sm={6} xs={12}>
              <TextField
                name="email"
                value={this.state.email}
                onChange={this.changeHandler}
                variant="outlined"
                label="Tu correo electrónico"
                error={this.state.error.email && true}
                helperText={this.state.error.email && this.state.error.email}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="website"
                value={this.state.website}
                onChange={this.changeHandler}
                variant="outlined"
                label="Tu página web"
                error={this.state.error.website && true}
                helperText={this.state.error.website && this.state.error.website}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="comment"
                value={this.state.comment}
                onChange={this.changeHandler}
                variant="outlined"
                multiline
                label="Tu mensaje"
                error={this.state.error.comment && true}
                helperText={this.state.error.comment && this.state.error.comment}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <Button className="btn" type="submit">
                Comentario
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    );
  }
}

export default PostComment;
