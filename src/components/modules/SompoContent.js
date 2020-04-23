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

function SompoContent(props) {
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
                Sompo is a member of SOMPO HOLDINGS, a trusted and established insurance and risk solutions provider in Japan for over a century. Today, SOMPO HOLDINGS serves its customers in more than 30 countries and regions. Since 1989, Sompo has been providing companies and individuals with premium yet affordable insurance in Singapore. 
                </Typography>
                <Typography variant="h5" align="center" style={{lineHeight: '2', marginTop: '20px'}}>
                Sompo offers fair pricing and fair treatment to policyholdersCommitment to deliver best service to customers caring for their well-being.
                </Typography>
              </div>
           </Grid> 
        </div>
      </Container>
    </section>
  );
}

SompoContent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SompoContent);
