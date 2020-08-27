import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/TextField';
// import '../App.css';

export class FormUserDetails extends Component {
    continue = e =>{
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        
        const {values, handleChange} = this.props;

        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Enter user details" />
                    <TextField
                        hintText="Enter Your First Name"
                        floatingLabelText="First Name"
                        onChange={handleChange('firstName')}
                        defaultValue={values.firstName}
                    />
                    <br/>
                    <TextField
                        hintText="Enter Your Last Name"
                        floatingLabelText="Last Name"
                        onChange={handleChange('lasttName')}
                        defaultValue={values.lastName}
                    />
                     <br/>
                    <TextField
                        hintText="Enter Your Email"
                        floatingLabelText="Email"
                        onChange={handleChange('email')}
                        defaultValue={values.email}
                    />
                    <br/>
                    <input
                        type="submit"
                        title="Continue"
                        primary={true}
                        style={mystyle}
                        onClick={this.continue}
                     />
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}


const mystyle = {
    backgroundColor: "DodgerBlue",
    padding: "5px 50px",
    margin: "15px 40px 75px 50px",
    cursor: "pointer"
};

export default FormUserDetails
