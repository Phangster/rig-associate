import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { styles as toolbarStyles } from './Tools/Toolbar';
import Header from './Header/Header'
import HeaderLinks from './Header/HeaderLinks'
import logo from '../../images/rig-logo-4.png'
// import DownloadFile from './Tools/FileDownload'

const styles = theme => ({
  title: {
    fontSize: 24,
  },
  placeholder: toolbarStyles(theme).root,
  toolbar: {
    justifyContent: 'space-between',
  },
  left: {
    flex: 1,
  },
  leftLinkActive: {
    color: theme.palette.common.white,
  },
  right: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  rightLink: {
    fontSize: 16,
    color: theme.palette.common.white,
    marginLeft: theme.spacing(3),
  },
  linkSecondary: {
    color: theme.palette.secondary.main,
  },
});

function AppAppBar(props) {
  const { ...rest } = props;

  return (
    <div>
      <Header 
        color="transparent"
        routes=""
        brand={logo}
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      {/* <DownloadFile /> */}
    </div>
  );
}

AppAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppAppBar);