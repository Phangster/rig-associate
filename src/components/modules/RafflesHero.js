import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from './Tools/Button'
// import Typography from './Tools/Typography';
import RHI from '../../images/rhi.png';

const backgroundImage =
"https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?cs=srgb&dl=blue-and-silver-stetoscope-40568.jpg&fm=jpg";

const image = {
    width: '100%',
    height: '100vh',
    opacity: '0.3',    
}

const imageLogo = {
    paddingBottom: '100px'
}

const containerDiv = {
    width: '100%',
    display:'grid',
    justifyItems: 'center',
    position: 'absolute',
    marginTop: '33vh',
    zIndex:'1',
    gridTemplateColumns: 'repeat( 3, minmax(33%, 1fr))'
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

function RafflesHero(props) {
  const { classes } = props;

  return (
    <div backgroundClassName={classes.background}>
        <div style={containerDiv}>
            <div></div>
            <div style={{color:'black'}}>
                <img src={RHI} style={imageLogo} alt="raffleshealthinsurance"/>
                <Button
                    color="primary"
                    variant="contained"
                    size="large"
                    className={classes.button}
                    component="a"
                    // href="https://www.rafflesmedicalgroup.com/insurance/for-you/international-medical-cover/worldwide-health-options"
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

RafflesHero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RafflesHero);
