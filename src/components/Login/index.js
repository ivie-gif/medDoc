import React from 'react';
import {NavLink} from 'react-router-dom';

import Input from '../TextInput/index';
import Button from '../Button/index'




const Index = () => {

    return (
        <div>

        <form>
            <div className="login">
            <NavLink to="/" className="login-title">Healthy-Health</NavLink>
            {/* {errorMessage ? <p className="errormsg">{errorMessage}</p> : ''} */}
            <Input
                placeholder="Enter Email"
                type="email"
                label="Email Address"
                // name="email"
                // value={email}
                // handleChange={handleChange}
                // error={errorEmail}
                // handleKeyUp={handleKeyUp}
            />
            <Input
                     placeholder="Enter Password"
                     type="password" 
                     label = "Password"
                    //  name="password"
                    //  value={password}
                    //  handleChange={handleChange}
                    //  handleKeyUp={handleKeyUp}
                    />
            
             <Button title="Login" className="buttonlogin green" />
            <p className="center-align ">Don't have an account? <a href="/dashboard" >Signup</a></p>
        </div>
        </form>

        </div>
    )
}

export default Index;