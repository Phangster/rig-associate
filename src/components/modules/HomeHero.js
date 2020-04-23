import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from './Tools/Button'
import Typography from './Tools/Typography';

const backgroundImage =
"https://images.pexels.com/photos/208512/pexels-photo-208512.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";

const image = {
    width: '100%',
    height: '100vh',
    opacity: '0.3',
    
}

const containerDiv = {
    width: '100%',
    display:'grid',
    justifyItems: 'center',
    position: 'absolute',
    marginTop: '23vh',
    zIndex:'1',
    gridTemplateColumns: 'repeat( 3, minmax(33%, 1fr))'
}

const paragraph = {
    padding: '3px'
}

const styles = theme => ({
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: '#7fc7d9', // Average color of the background image.
    backgroundPosition: 'center',
  },
  button: {
    minWidth: 200,
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(10),
    },
  },
  more: {
    marginTop: theme.spacing(2),
  },
});

function HomeHero(props) {
  const { classes } = props;

  return (
    <div backgroundClassName={classes.background}>
      <div style={containerDiv}>
        <div></div>
        <div style={{color:'black'}}>
            <Typography color="inherit" align="center" variant="h2" marked="center">
                RIG Associates
            </Typography>
            <Typography style={paragraph} color="inherit" align="center" variant="h5" className={classes.h5}>
                At Rig Associate our goal is to provide you with customized schemes and advice that suit both your personal and business needs
            </Typography>
            <Button
                color="secondary"
                variant="contained"
                size="large"
                className={classes.button}
                component="a"
                // href="/"
                href="/enquiryform"
            >
                GET A QUOTE
            </Button>
        </div>
        <div></div>
      </div>
      <img style={image} src={backgroundImage} alt="increase priority" />
    </div>
  );
}

HomeHero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomeHero);
