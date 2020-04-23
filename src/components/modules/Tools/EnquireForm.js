import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

import * as emailjs from 'emailjs-com'

// const backgroundImage = 'https://cdn.dribbble.com/users/59947/screenshots/4876245/muti.jpg';

const paper = {
  marginTop: '40%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}

const form = {
  width: '100%', // Fix IE 11 issue.
  marginTop: '8%',
}

const submit = {
  margin: '10% 0% 0% 0%',
}

const root = {
  display: 'block',
  overflow: 'hidden',
  background: '#EAE7DC'
}

const container = {
  display: 'flex',
  marginTop: '8px',
  alignItems: 'center',
  marginBottom: '120px',
  flexDirection: 'column',
  width: '80%',
}

class EnquiryForm extends Component {

  state = {
    firstName: '',
    lastName: '',
    email: '',
    nationality: '',
    countryOfResidence: '',
    gender: '',
    occupation: '',
    contact: '',
    message: '',
  }

  handleSubmit(e) {
    e.preventDefault()
    const { firstName, lastName, email, nationality, countryOfResidence, gender, occupation, contact, message } = this.state
    let templateParams = {
      from_name: email,
      to_name: 'Rig Associate',
      subject: 'New Enquiry',
      message_html: `First name: ${firstName}, \n Last name: ${lastName}, \n Nationality: ${nationality}, \n Country of Residence: ${countryOfResidence}, \n Gender: ${gender}, \n Occupation: ${occupation}, \n Contact: ${contact}, \n Message: ${message}`,
    }
    emailjs.send(
    'juan_juan',
    'template_cd5X2wqI',
      templateParams,
    'user_0wx16Hkw4FfE31d6pYiNn'
    )
    this.resetForm()
  }

  resetForm() {
    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      nationality: '',
      countryOfResidence: '',
      gender: '',
      occupation: '',
      contact: '',
      message: '',
    })
    this.props.history.push('/')
  }

  handleChange = (param, e) => {
    this.setState({ [param]: e.target.value })
  }
  
  render(){
    console.log(this.state)
    return (
      <section style={root}>
        <Container style={container}>
        {/* <img style={{ minHeight: '100vh', right: '0px', position: 'absolute' }} src={backgroundImage} alt="increase priority" /> */}
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div style={paper}>
              <Typography component="h1" variant="h5">
                Get In Touch
              </Typography>
              <ValidatorForm
                onSubmit={this.handleSubmit.bind(this)}
                style={form}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextValidator
                      autoComplete="fname"
                      name="firstName"
                      variant="outlined"
                      required
                      fullWidth
                      id="firstName"
                      label="First Name"
                      autoFocus
                      errorText= 'This field needs to be filled up'
                      value={this.state.firstName}
                      onChange={this.handleChange.bind(this, 'firstName')}
                      validators={['required']}
                      errorMessages={['this field is required']}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextValidator
                      variant="outlined"
                      required
                      fullWidth
                      id="lastName"
                      label="Last Name"
                      name="lastName"
                      value={this.state.lastName}
                      onChange={this.handleChange.bind(this, 'lastName')}
                      validators={['required']}
                      errorMessages={['this field is required']}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextValidator
                      variant="outlined"
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      value={this.state.email}
                      onChange={this.handleChange.bind(this, 'email')}
                      validators={['required']}
                      errorMessages={['this field is required']}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextValidator
                      variant="outlined"
                      required
                      fullWidth
                      name="nationality"
                      label="Nationality"
                      id="nationality"
                      value={this.state.nationality}
                      onChange={this.handleChange.bind(this, 'nationality')}
                      validators={['required']}
                      errorMessages={['this field is required']}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextValidator
                      variant="outlined"
                      required
                      fullWidth
                      name="countryOfResidence"
                      label="Current Country of Residence"
                      id="countryOfResidence"
                      value={this.state.countryOfResidence}
                      onChange={this.handleChange.bind(this, 'countryOfResidence')}
                      validators={['required']}
                      errorMessages={['this field is required']}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextValidator
                      variant="outlined"
                      required
                      fullWidth
                      name="gender"
                      label="Gender"
                      id="gender"
                      value={this.state.gender}
                      onChange={this.handleChange.bind(this, 'gender')}
                      validators={['required']}
                      errorMessages={['this field is required']}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextValidator
                      variant="outlined"
                      required
                      fullWidth
                      name="occupation"
                      label="Occupation"
                      id="occupation"
                      value={this.state.occupation}
                      onChange={this.handleChange.bind(this, 'occupation')}
                      validators={['required']}
                      errorMessages={['this field is required']}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextValidator
                      variant="outlined"
                      fullWidth
                      name="contact"
                      label="Contact"
                      id="contact"
                      value={this.state.contact}
                      onChange={this.handleChange.bind(this, 'contact')}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextValidator
                      variant="outlined"
                      required
                      fullWidth
                      name="message"
                      label="Message"
                      id="message"
                      multiline={true}
                      rows={5}
                      rowsMax={5}
                      value={this.state.message}
                      onChange={this.handleChange.bind(this, 'message')}
                      validators={['required']}
                      errorMessages={['this field is required']}
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  style={submit}
                >
                  Submit
                </Button>
              </ValidatorForm>
            </div>
          </Container>
        </Container>
      </section>
    );
  }
}

export default EnquiryForm;