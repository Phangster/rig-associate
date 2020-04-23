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
    background: '#d8c3a5'
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

function HomeContent(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <Typography variant="h2" className={classes.title} component="h2">
          We Have Extensive Experience
        </Typography>
        <div>
          <Grid container spacing={5}>
              <div className={classes.item}> 
                <Typography variant="h5" align="center" style={{lineHeight: '2'}}>
                Valuable assets, like your office, Health, car, home, and business, are covered by various insurance policies. In cases of accidents, you will be financially compensated because you and your valuables are protected by these policies. This makes you happy because you won’t lose your money should the worst happen. You can get the right solution at RIG Associates.
                </Typography>
              </div>
           </Grid> 
        </div>
      </Container>
    </section>
  );
}

HomeContent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomeContent);
