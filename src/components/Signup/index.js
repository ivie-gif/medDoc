import React from 'react';
import {NavLink, } from 'react-router-dom'

import Input from '../TextInput/index';
import Button from '../Button/index'


const Index = () => {

    return (
        <div>

            <form >
                <div className="signup">
                    <NavLink to ="/" className="signup-title">TutChit</NavLink>
                    {/* {errorMessage ? <p className="errormsg">{errorMessage}</p> : ''} */}
                    <Input
                     placeholder="Enter FullName"
                     type="text" 
                     label = "Fullname"
                    //  name="fullname"
                    //  value={fullname}
                    //  handleChange={handleChange}
                    //  handleKeyUp={handleKeyUp}
                    />
                    <Input
                     placeholder="Enter Email Address"
                     type="email" 
                     label = "Email"
                    //  name="email"
                    //  value={email}
                    //  handleChange={handleChange}
                    //  handleKeyUp={handleKeyUp}
                    //  error={errorEmail}
                   />
                    <Input
                     placeholder="Enter Password"
                     type="password" 
                     label = "Password"
                    //  name="password"
                    //  value={password}
                    //  handleChange={handleChange}
                    //  handleKeyUp={handleKeyUp}
                    //  error={errorPassword}
                    />
                    <Button title="Signup" className=" " />
                
                    <p className="center-align">Already have an account? <a href = "/login"> Log in</a></p>
                    
                </div>
            </form>

        </div>
    )
}

export default Index;