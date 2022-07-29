import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './LogIn.css'
import SignUp from './SignUp'


const LogIn=()=> {
   const [user,setUser] = useState({
        email: "", password: "", usertype: "", agid: "", bid: ""
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

        const {email, password, usertype, agid,bid} = user;

        const res = await fetch("/register", {
            method: "POST",
            headers: {"Content-Type" : "application/json"
        },
        body:JSON.stringify({
            email, password, usertype, agid,bid 
            })
        });

        //const res = await res.json();

    }


    return (
       <form method="POST" className="LogInForm">
            <div className="FormTitle">Log In</div>
            <div className="Email">
                <label for="mail" className="form-label">Email</label>
                <input type="email" className="email" id="email" 
                    value ={user.email}
                    onChange={handleInputs}
                />
            </div>
            <div className="Password1">
                <label for="inputPassword4" className="form-label">Password</label>
                <input type="password" className="password" id="inputPassword4"
                    value ={user.password}
                    onChange={handleInputs}
                    />
            </div>
            <div className="CheckBoxLabel">
                Enter whether you are an aggregator or business owner
            </div>
            <div className="usertype">
                <input type="text" className="usertype" id="usertype" 
                  value ={user.usertype}
                  onChange={handleInputs}
                  />
            </div>
            <div className="bid">
                <label for="id" className="form-label">If you are a business owner, enter your business id:</label>
                <input type="text" className="bid" id="businessid" 
                  value ={user.bid}
                  onChange={handleInputs}
                  />
            </div>
            <div className="agid">
                <label for="id" className="form-label">If you are an aggregator, enter your authentication id:</label>
                <input type="text" className="agid" id="aggregatorid" 
                  value ={user.agid}
                    onChange={handleInputs}
                    />
            </div>
            <div className="Button">
                <button type="submit" className="btn btn-primary" onClick={PostData}>Register</button>
            </div>

            <div className="haveAccount">
                Don't have an account? <Link to='/SignUp'>Sign Up</Link>
            </div>
        </form>
    )
}

export default LogIn;