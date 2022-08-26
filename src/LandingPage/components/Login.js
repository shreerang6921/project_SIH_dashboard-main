import { useState } from 'react';
import FormAction from "./formComps/FormAction";
import FormExtra from "./formComps/FormExtra";
import Input from "./formComps/Input";
import { useNavigate } from 'react-router-dom';

// const fields=loginFields;
// let fieldsState = {};
// fields.forEach(field=>fieldsState[field.id]='');

export default function Login(){
    // const [loginState,setLoginState]=useState(fieldsState);

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password})
        });
        const json = await response.json()
        console.log(json);
        if (json.success){
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken); 
            navigate("/Dashboard");

        }
        else{
            alert("Invalid credentials");
        }
    }


    return(
        <form className="mt-8 space-y-6 z-[-1]" onSubmit={handleSubmit}>
        <div className="-space-y-px">
            
              
                        <Input
                       
                            handleChange={(e)=>{setEmail(e.target.value)}}
                            value={email}
                            labelText="email"
                            labelFor="email"
                            id="email"
                            name="email"
                            type="email"
                            isRequired={true}
                            placeholder="email"
                    />
                    <Input
                       
                       handleChange={(e)=>{setPassword(e.target.value)}}
                       value={password}
                       labelText="password"
                       labelFor="password"
                       id="password"
                       name="password"
                       type="password"
                       isRequired={true}
                       placeholder="password"
               />
                
                
            
        </div>

        <FormExtra/>
        <FormAction handleSubmit={handleSubmit} text="Login"/>

      </form>
    )
}