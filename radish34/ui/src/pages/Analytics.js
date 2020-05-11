import React, { useEffect, useContext, useState } from 'react';
import { useLazyQuery } from '@apollo/react-hooks';
import { withStyles } from '@material-ui/core/styles';
import { useParams } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import SKUTable from '../components/SKUTable';
import RateTable from '../components/RateTable';
import Signatures from '../components/Signatures';
import ApproveFooter from '../components/ApproveFooter';
import { GET_MSA_BY_ID } from '../graphql/msa';
import { GET_RFP } from '../graphql/rfp';
import { GET_PROPOSAL_BY_RFP_AND_SUPPLIER } from '../graphql/proposal';
import { GET_PARTNER_BY_IDENTITY } from '../graphql/partners';
import { ServerSettingsContext } from '../contexts/server-settings-context';
import Tracker from '../components/Tracker';
import Card from "../components/Card/Card.js";
import CardHeader from "../components/Card/CardHeader.js";
import CardIcon from "../components/Card/CardIcon.js";
import Icon from "@material-ui/core/Icon";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Accessibility from "@material-ui/icons/Accessibility";
import Update from "@material-ui/icons/Update";
import Warning from "@material-ui/icons/Warning";
import Store from "@material-ui/icons/Store";
import AddBox from "@material-ui/icons/AddBox";
import AttachMoney from "@material-ui/icons/AttachMoney";
import LocalShipping from "@material-ui/icons/LocalShipping";
import Assignment from "@material-ui/icons/Assignment";
import DateRange from "@material-ui/icons/DateRange";
import CardBody from "../components/Card/CardBody.js";
import CardFooter from "../components/Card/CardFooter.js";
import GridItem from "../components/Grid/GridItem.js";
import GridContainer from "../components/Grid/GridContainer.js";
import ChartistGraph from "react-chartist";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import NoticeLayout from '../components/NoticeLayout';
import ReactTooltip from "react-tooltip";
import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart,
  analyticsSales,
  AnalyticsDays
} from "../docs/charts.js";
import MapChart from "../components/MapChart";
import { makeStyles } from "@material-ui/core/styles";
import styles from "../docs/assets/css/material-dashboard-react.css";

import "../docs/assets/css/material-dashboard-react.css"

const useStyles = makeStyles(styles);

const Analytics = () => {
  const classes = useStyles();
  const [content, setContent] = useState("");
  return (
    <NoticeLayout selected="purchaseorder">

    <Container>
      <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            
            <CardHeader color="warning" stats icon>
            <CardIcon color="warning">
                <AddBox />
              </CardIcon>
              <p className={classes.cardCategory}>Used Space</p>
              <h3 className={classes.cardTitle}>
                49/50 <small></small>
              </h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>

                <a href="#pablo" onClick={e => e.preventDefault()}>
                  Account Balance
                </a>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="success" stats icon>
            <CardIcon color="success">
                <AttachMoney />
              </CardIcon>
              <p className={classes.cardCategory}>Revenue</p>
              <h3 className={classes.cardTitle}>$34,245</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <DateRange />
                Last 24 Hours
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="danger" stats icon>
            <CardIcon color="danger">
                <Assignment />
              </CardIcon>
              <p className={classes.cardCategory}>Fixed Issues</p>
              <h3 className={classes.cardTitle}>75</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <LocalOffer />
                Tracked Contracts
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <LocalShipping />
              </CardIcon>
              <p className={classes.cardCategory}>Followers</p>
              <h3 className={classes.cardTitle}>+245</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Update />  
                In Shipping
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="warning">
            <ChartistGraph
                className="ct-chart"
                data={AnalyticsDays.data}
                type="Line"
                options={AnalyticsDays.options}
                listener={AnalyticsDays.animation}
              />
        <ReactTooltip>{content}</ReactTooltip>
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Demand Forecast</h4>
              <p className={classes.cardCategory}>
                <span className={classes.successText}>
                  <ArrowUpward className={classes.upArrowCardCategory} /> 55%
                </span>{" "}
                increase in today sales.
              </p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> updated 4 minutes ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="success">
              <ChartistGraph
                className="ct-chart"
                data={analyticsSales.data}
                type="Pie" 
                options={analyticsSales.options}
                listener={analyticsSales.animation}               

              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Cost Reeduction per Day</h4>
              <p className={classes.cardCategory}>Last Campaign Performance</p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> campaign sent 2 days ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="danger">
              <ChartistGraph
                className="ct-chart"
                data={completedTasksChart.data}
                type="Bar"
                options={completedTasksChart.options}
                listener={completedTasksChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Invetory</h4>
              <p className={classes.cardCategory}>Last Campaign Performance</p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> campaign sent 2 days ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>

      </GridContainer>
    </Container>
    </NoticeLayout>
  );
}

export default withStyles(styles)(Analytics);
