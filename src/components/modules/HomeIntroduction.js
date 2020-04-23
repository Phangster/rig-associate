import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from './Tools/Typography';


const styles = theme => ({
  root: {
    display: 'block',
    overflow: 'hidden',
    background: '#EAE7DC'
  },
  container: {
    display: 'flex',
    position: 'relative',
    marginTop: '80px',
    alignItems: 'center',
    marginBottom: '120px',
    flexDirection: 'column',
    width: '80%',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  image: {
    height: 55,
  },
  title: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
  },
  curvyLines: {
    pointerEvents: 'none',
    position: 'absolute',
    top: -180,
  },
});

function HomeIntroduction(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <Typography variant="h2" className={classes.title} component="h2">
            General Insurance in Singapore
        </Typography>
        <div>
          <Grid container spacing={5}>
              <div className={classes.item}> 
                <Typography variant="h5" align="center" style={{lineHeight: '2'}}>
                RIG Associates is a well-known medical insurance consultancy firm in Singapore, whose goal is to provide customized schemes and advice that suit both your personal and business needs. Various types of general Insurance, including Health Insurance, are offered by RIG Associates.
                </Typography>
                <Typography variant="h5" align="center" style={{lineHeight: '2'}}>
                We have a proud history of over 40 years, employing over 40 highly qualified staff and is in association with the best insurance providers, Raffles Health Insurance, Sompo and Now Health. We are constantly attempting to provide the best possible offer for our clients, ensuring that they receive the best service from query to claim.
                </Typography>
              </div>
           </Grid> 
        </div>
      </Container>
    </section>
  );
}

HomeIntroduction.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomeIntroduction);