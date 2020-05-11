import React, { Component } from 'react';
import { Grid, Button, TextField } from '@material-ui/core';
import Joi from 'joi-browser'
import { toast } from 'react-toastify'
import './style.scss'

class Support extends Component {
    state = {
        email: '',
        subject: '',
        message: '',
        error: {},
    }
    schema = {
        email: Joi.string().email({ minDomainAtoms: 2 }).required().error(errors => {
            errors.forEach(err => {
                switch (err.type) {
                    case "string.required":
                        err.message = 'email can not be Empty';
                        break;
                    case "string.email":
                        err.message = 'email must be a valid email';
                        break;
                    default:
                        break;
                }
            });
            return errors;
        }),
        subject: Joi.string().required().error(errors => {
            errors.forEach(err => {
                switch (err.type) {
                    case "string.required":
                        err.message = 'Subject can not be Empty';
                        break;
                    default:
                        break;
                }
            });
            return errors;
        }),
        comment: Joi.string().required().error(errors => {
            errors.forEach(err => {
                switch (err.type) {
                    case "string.required":
                        err.message = 'Message can not be Empty';
                        break;
                    default:
                        break;
                }
            });
            return errors;
        })
    }
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
            error
        })
    };

    validationProperty = event => {
        const Obj = { [event.target.name]: event.target.value };
        const schema = { [event.target.name]: this.schema[event.target.name] }
        const { error } = Joi.validate(Obj, schema);
        return error ? error.details[0].message : null
    };

    validate = () => {
        const options = { abortEarly: false }
        const form = {
            email: this.state.email,
            subject: this.state.subject,
            message: this.state.message,
        }
        const { error } = Joi.validate(form, this.schema, options)
        if (!error) return null;

        const errors = {};
        for (let item of error.details) errors[item.path[0]] = item.message
        return errors;
    };

    submitHandler = (e) => {
        e.preventDefault();
        const error = this.validate();
        if (error) {
            this.setState({
                error: error || {}
            })
        } else {
            toast.success('Successfully Done')
            this.setState({
                subject: '',
                email: '',
                message: '',
            })

        }
    }
    render() {
        return (
            <Grid className="supportWrap">
                <h3>Contact the Author</h3>
                <form onSubmit={this.submitHandler}>
                    <Grid container spacing={4}>
                        <Grid item xs={12}>
                            <TextField
                                name="email"
                                value={this.state.email}
                                onChange={this.changeHandler}
                                variant="outlined"
                                label="Your Email*"
                                error={this.state.error.email && true}
                                helperText={this.state.error.email && this.state.error.email}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                name="subject"
                                value={this.state.subject}
                                onChange={this.changeHandler}
                                variant="outlined"
                                label="Your Subject"
                                error={this.state.error.subject && true}
                                helperText={this.state.error.subject && this.state.error.subject}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                name="message"
                                value={this.state.message}
                                onChange={this.changeHandler}
                                variant="outlined"
                                multiline
                                label="Your Message"
                                error={this.state.error.message && true}
                                helperText={this.state.error.message && this.state.error.message}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button className="btn" type="submit">Submit</Button>
                        </Grid>
                    </Grid>
                </form>
            </Grid>
        )
    }

}

export default Support;
