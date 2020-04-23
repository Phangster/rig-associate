import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import Typography from './Tools/Typography';
import Email from  '../../images/email.png'
import Whatsapp from  '../../images/whatsapp.png'
import Phonecall from  '../../images/phonecall.png'
import './AppFooterStyle.css'

const img = {
    width: '60px',
    height: '60px',
    padding: '10px'
}

const subContact = {
    display: 'flex',
    alignItems: 'center'
}

function Copyright() {
  return (
    <React.Fragment>
      {'© '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
    </React.Fragment>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    backgroundColor: '#8e8d8a',
    position: 'relative'
  },
  container: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
    display: 'flex',
  },
  iconsWrapper: {
    height: 120,
  },
  icons: {
    display: 'flex',
  },
  icon: {
    width: 48,
    height: 48,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    marginRight: theme.spacing(1),
    '&:hover': {
      backgroundColor: '#D5D8DC',
    },
  },
  list: {
    margin: 0,
    listStyle: 'none',
    paddingLeft: 0,
  },
  listItem: {
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
  },
  language: {
    marginTop: theme.spacing(1),
    width: 150,
  },
}));

export default function AppFooter() {
  const classes = useStyles();

    return (
        <Typography component="footer" className={classes.root}>
            <Container className={classes.container}>
                <div className="gridContainer">
                    <div style={{textAlign: 'center'}}>
                        <Typography style={{paddingBottom:'8%'}} variant="h4" align="center">
                            ADDRESS
                        </Typography>
                        <Typography variant="h6" align="center">
                        Blk 483 Tampines Street, 43
                        </Typography>
                        <Typography variant="h6" align="center">
                        # 02-204 Singapore 520483
                        </Typography>
                        <div style={{paddingTop:'4%'}}><Copyright /></div>
                    </div>
                    <div>
                        <div style={subContact}>
                            <img style={img} src={Email} alt="Email" />
                            <Typography variant="h6" align="center">
                                daten@rig-associates.com
                            </Typography>
                        </div>
                        <div style={subContact}>
                            <img style={img} src={Whatsapp} alt="Whatsapp" />
                            <Typography variant="h6" align="center">
                                (+65) 9051 0036
                            </Typography>
                        </div>
                        <div style={subContact}>
                            <img style={img} src={Phonecall} alt="Phonecall" />
                            <Typography variant="h6" align="center">
                                (+65) 6551 2877
                            </Typography>
                        </div>
                    </div>
                </div>
            </Container>
        </Typography>
    );
}
