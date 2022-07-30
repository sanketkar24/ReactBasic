import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './SignUp.css'
import LogIn from './LogIn'
import { useNavigate } from 'react-router-dom';
const SignUp= ()=> {
    const navigate = useNavigate();
    const [user,setUser] = useState({
        email: "",  bid:"", password: "", cpassword: "", aggre:false
    });
 
    let name,value;

    const handleInputs = (event) => {
        console.log(event);
        name = event.target.name;
        value = event.target.value;

        setUser({...user,[name]:value})
    }

    const PostData= async (event)=>{
        event.preventDefault();
        const {email, bid, password, cpassword, aggre} = user;

        const res = await fetch("/register", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
            email, bid, password, cpassword, aggre
            })
        })

        const data = await res.json();
        console.log(`response data ${data}`)
        if(data.registetered == false || !data){
            window.alert("Invalid Registeration");
            console.log("Invalid Registeration")
        }else{
            window.alert("Registered")
            console.log("Registered")
            // navigate("/LogIn")
        }

    }
    // fetch('/register', {
    // const {email, bid, password, cpassword, aggre} = user;
    // method: 'POST',
    // headers: {
    //     'Content-Type': 'application/json',
    // },
    // body: JSON.stringify(data),
    // })
    // .then((response) => response.json())
    // //Then with the data from the response in JSON...
    // .then((data) => {
    // console.log('Success:', data);
    // })
    // //Then with the error genereted...
    // .catch((error) => {
    // console.error('Error:', error);
    // });

    return (
        <form method="POST" className="SignUpForm">
            <div className="FormTitle">Registration Form</div>
            <div className="Email">
                <label for="mail" className="form-label">Email</label>
                <input type="email" className="email" id="email" name="email"
                    value ={user.email}
                    onChange={handleInputs}/>
            </div>
            <div className="bid">
                <label for="id" className="form-label">If you are a business owner, enter your business id:</label>
                <input type="text" className="busid" id="businessid" name="bid"
                    value ={user.bid}
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
                <input type="password" className="pwd" id="inputPassword4" name="cpassword"
                    value ={user.cpassword}
                    onChange={handleInputs}/>
            </div>
            <div className="aggre1">
                 <label className="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox input</label>
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" name="aggre"
                        value ={user.aggre}
                        onChange={handleInputs}/>
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
