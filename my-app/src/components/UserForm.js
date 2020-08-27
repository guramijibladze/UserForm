import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails'

export class UserForm extends Component {
    state={
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        occupation: '',
        city: '',
        bio: ''
    }

    nexstStep =()=>{
        const{step} = this.state;
        this.setState({
            step: step + 1
        }); 
    }

    prevStep = ()=>{
        const{step} = this.state;
        this.setState({
            step: step - 1
        }); 
    }

    handleChange = input => e =>{
        this.setState({[input]: e.target.value})
    }

    render() {
        const{step} = this.state;
        const{firstName,lastName,email,occupation,city,bio} = this.state;
        const values = {firstName,lastName,email,occupation,city,bio};

        switch(step){
            case 1:
                return(
                    <FormUserDetails
                        nexstStep={this.nexstStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );
            case 2:
                return(
                    <FormPersonalDetails
                        nexstStep={this.nexstStep}
                        prevtStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );
            case 3:
                return <h>Confirm</h>
            case 4:
                return <h1>Success</h1>
        }
    }
}

export default UserForm
