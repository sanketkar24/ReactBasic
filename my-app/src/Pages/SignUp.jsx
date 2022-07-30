import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './SignUp.css'
import LogIn from './LogIn'
const SignUp= ()=> {
    const [user,setUser] = useState({
        email: "", password: "", confirmPassword: "", usertype: "", agid: "", bid: ""
    });

    let name,value;

    const handleInputs = (event) => {
        console.log(event);
        name = event.target.name;
        value = event.target.value;

        setUser({...user,[name]:value})
    }

    const PostData=async(event)=>{
        event.preventDefault();

        const {email, password, confirmPassword, usertype, agid, bid} = user;

        const res = await fetch("/register", {
            method: "POST",
            headers: {"Content-Type" : "application/json"
        },
        body:JSON.stringify({
            email, password, confirmPassword, usertype, agid,bid 
            })
        });

        //const res = await res.json();

    }

    return (
        <form className="SignUpForm">
            <div className="FormTitle">Registration Form</div>
            <div className="Email">
                <label for="mail" className="form-label">Email</label>
                <input type="email" className="email" id="email" name="email"
                    value ={user.email}
                    onChange={handleInputs}/>
            </div>
            <div className="Password1">
                <label for="inputPassword4" className="form-label">Password</label>
                <input type="password" className="password" id="inputPassword4" name="password"
                    value ={user.password}
                    onChange={handleInputs}/>
            </div>
            <div className="Password1">
                <label for="inputPassword4" className="form-label">Confirm Password</label>
                <input type="pwd" className="pwd" id="inputPassword4" name="pwd"
                    value ={user.pwd}
                    onChange={handleInputs}/>
            </div>

            <div className="CheckBoxLabel">
                Enter whether you are an aggregator or business owner
            </div>
            <div className="usertype">
                <input type="text" className="usertype" id="usertype" name="usertype"
                  value ={user.usertype}
                  onChange={handleInputs}
                  />
            </div>

            <div className="bid">
                <label for="id" className="form-label">If you are a business owner, enter your business id:</label>
                <input type="text" className="busid" id="businessid" name="busid"
                    value ={user.busid}
                    onChange={handleInputs}/>
            </div>
            <div className="agid">
                <label for="id" className="form-label">If you are an aggregator, enter your authentication id:</label>
                <input type="text" className="agid" id="aggregatorid" name="agid"
                    value ={user.agid}
                    onChange={handleInputs} />
            </div>
            <div className="Button">
                <button type="submit" className="btn btn-primary" onClick={PostData}>Register</button>
            </div>

            <div className="haveAccount">
                Already have an account? <Link to='/LogIn'>Log In</Link>
            </div>
        </form>
    )

}
export default SignUp;
