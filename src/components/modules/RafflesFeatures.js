import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import './RafflesFeatures.css'

const gridCol = {
    display: 'grid',
    gridTemplateColumns: 'repeat(1, 1fr)'
}

const gridRow = {
    gridTemplateRow: 'repeat(3, 1fr)'
}

const font = {
  color: '#333',
  fontWeight: '500',
  fontSize: '40px',
  marginTop: '8%'
}

const styles = theme => ({
  root: {
    display: 'block',
    overflow: 'hidden',
    backgroundColor: 'ivory',
  },
  container: {
    position: 'relative',
    marginTop: '8px',
    alignItems: 'center',
    marginBottom: '70px',
    flexDirection: 'column',
    width: '100%',
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

function RafflesFeatures(props) {
  const { classes } = props;

    return (
        <section className={classes.root}>
            <Container className={classes.container}>
            <h3 style={font}>we’ve made insurance as simple as possible</h3>
            <div style={gridCol}>
                <div style={gridRow}>
                  <div className='infoBlock'>Freedom to choose when and where you are treated, within your area of cover</div>
                  <div className='infoBlock'>Cashless service with pre authorisation approvals</div>
                  <div className='infoBlock'>No referrals needed to see a specialist</div>
                  <div className='infoBlock'>Access to leading medical providers globally</div>
                  <div className='infoBlock'>Have the same level of cover wherever you might be, at home or away</div>
                  <div className='infoBlock'>Ability to make and view claims online</div>
                  <div className='infoBlock'>Access to an in-house team of medical experts, available on the phone 24/7</div>
              </div>
            </div>
            </Container>
        </section>
    );
}

RafflesFeatures.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RafflesFeatures);