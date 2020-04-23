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

function NowContent(props) {
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
                'Now' is clear, innovative and accessible. This means clear, relevant information, easy-to-use online tools and fast service from people who respect your time. Our products are designed to be comprehensive and benefit-rich. 
                </Typography>
                <Typography variant="h5" align="center" style={{lineHeight: '2', marginTop: '20px'}}>
                Now Health International is a global business with its headquarters in Hong Kong and regional service centres in Hong Kong, Shanghai, Dubai, Jakarta, and the United Kingdom.
                </Typography>
              </div>
           </Grid> 
        </div>
      </Container>
    </section>
  );
}

NowContent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NowContent);