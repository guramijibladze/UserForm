import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/TextField';
// import '../App.css';

export class FormPersonalDetails extends Component {
    continue = e =>{
        e.preventDefault();
        this.props.nextStep();
    }

    back = e =>{
        e.preventDefault();
        this.props.prevStep();
    }


    render() {
        const {values, handleChange} = this.props;

        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Enter Personal details" />
                    <TextField
                        hintText="Enter Your Occupation"
                        floatingLabelText="Occupation"
                        onChange={handleChange('Occupation')}
                        defaultValue={values.Occupation}
                    />
                    <br/>
                    <TextField
                        hintText="Enter Your City"
                        floatingLabelText="City"
                        onChange={handleChange('city')}
                        defaultValue={values.city}
                    />
                     <br/>
                    <TextField
                        hintText="Enter Your Bio"
                        floatingLabelText="Bio"
                        onChange={handleChange('bio')}
                        defaultValue={values.bio}
                    />
                    <br/>
                    <input
                        type="submit"
                        title="Continue"
                        primary={true}
                        style={mystyle}
                        onCliCk={this.continue}
                     />
                     <input
                        type="Back"
                        title="Continue"
                        primary={false}
                        style={mystyle}
                        onCliCk={this.back}
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

export default FormPersonalDetails
