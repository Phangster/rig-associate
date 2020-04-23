import React from 'react';
import AppAppBar from './modules/AppAppBar';
import AppFooter from './modules/AppFooter';
import EnquireForm from './modules/Tools/EnquireForm';


function EnquiryForm() {
    return (
      <React.Fragment>
        <AppAppBar />
        <EnquireForm />
        <AppFooter />
      </React.Fragment>
    );
  }
  
  export default EnquiryForm;