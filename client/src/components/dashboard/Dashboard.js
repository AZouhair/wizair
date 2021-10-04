import React, {Component} from 'react';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Chart from './Chart';
import Card from './Card';
import Measures from './Measures';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { getData} from "../../actions/dataActions";
import moment from "moment";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://www.centralesupelec.fr/">
        CentraleSupelec
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
});

class Dashboard extends Component {
  constructor(props){
    super(props);
    this.state ={
      auth : true,
      data: {}
    }
  };


  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  componentDidMount(){
    if (this.props.auth.isAuthenticated) {
      this.props.getData(this.props.auth.id)
    }
  }

  
  
  render(){
    let {data} = this.props.data
    // Data should be a constant but it was turned into a variable for the sake of presentation
    const { classes } = this.props;
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  // we wait until the data is populated before fetching
  if (!data.length){
    console.log("this is a standalone vernsion without the sensor so instead of a return here we will allow the dashboard to load");
    data = [ {
      "time": moment().format("DD-MM-YYYY hh:mm:ss"),
      "O3": 13,
      "NO2": 24,
      "pm25": 42,
    },
    {
      "time": moment().subtract(1, 'h').format("DD-MM-YYYY hh:mm:ss"),
      "O3": 15,
      "NO2": 27,
      "pm25": 40,
    },
    {
      "time": moment().subtract(2, 'h').format("DD-MM-YYYY hh:mm:ss"),
      "O3": 11,
      "NO2": 17,
      "pm25": 35,
    },
    {
      "time": moment().subtract(3, 'h').format("DD-MM-YYYY hh:mm:ss"),
      "O3": 13,
      "NO2": 23,
      "pm25": 46,
    },
    {
      "time": moment().subtract(4, 'h').format("DD-MM-YYYY hh:mm:ss"),
      "O3": 15,
      "NO2": 21,
      "pm25": 47,
    }
  ]
  } 
  return (
    <div className={classes.root}>
      <CssBaseline />
        <AppBar position="absolute" className={clsx(classes.appBar, this.open && classes.appBarShift)}>
          <Toolbar className={classes.toolbar}>
            <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
              Wizair
            </Typography>
            <Button variant="contained" color="primary" onClick={this.onLogoutClick}>
              Log Out
            </Button>
          </Toolbar>
        </AppBar>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {/* Card O3*/}
            <Grid item xs={12} md={4} lg={4}>
              <Paper className={fixedHeightPaper}>
                <Card element="O3" data={data[0]["O3"] } />
              </Paper>
            </Grid>
            {/* Card NO2*/}
            <Grid item xs={12} md={4} lg={4}>
              <Paper className={fixedHeightPaper}>
                <Card element="NO2" data={data[0]["NO2"]}/>
              </Paper>
            </Grid>
            {/* Card pm25*/}
            <Grid item xs={12} md={4} lg={4}>
              <Paper className={fixedHeightPaper}>
                <Card element="pm25" data={data[0]["pm25"] }/>
              </Paper>
            </Grid>
            {/* Chart O3*/}
            <Grid item xs={12} md={12} lg={12}>
              <Paper className={fixedHeightPaper}>
                <Chart element="O3" data={data} />
              </Paper>
            </Grid>
            {/* Chart NO2*/}
            <Grid item xs={12} md={12} lg={12}>
              <Paper className={fixedHeightPaper}>
                <Chart element="NO2" data={data}/>
              </Paper>
            </Grid>
            {/* Chart pm25*/}
            <Grid item xs={12} md={12} lg={12}>
              <Paper className={fixedHeightPaper}>
                <Chart element="pm25" data={data}/>
              </Paper>
            </Grid>
            {/* Recent Measures*/}
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Measures data={data}/>
              </Paper>
            </Grid>
          </Grid>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
  };
};


Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  getData: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  data: state.data,
  auth: state.auth
});


export default connect(
  mapStateToProps,
  { logoutUser,
  getData }
)(withStyles(styles)(Dashboard));