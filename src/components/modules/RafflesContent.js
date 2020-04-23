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
    marginTop: '8px',
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

function RafflesContent(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <Typography variant="h4" marked="center" className={classes.title} component="h2">
          About
        </Typography>
        <div>
          <Grid container spacing={5}>
              <div className={classes.item}> 
                <Typography variant="h5" align="center" style={{lineHeight: '2'}}>
                The international health insurance offered by RIG Associates is insured by Raffles Health International (RHI) and administered by Bupa Global.
                </Typography>
                <Typography variant="h5" align="center" style={{lineHeight: '2', marginTop: '20px'}}>
                RHI leverages on the international infrastructure and expertise of Bupa Global in understanding the needs of expatriates and international business community to provide comprehensive healthcare financing solutions.
                </Typography>
              </div>
           </Grid> 
        </div>
      </Container>
    </section>
  );
}

RafflesContent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RafflesContent);