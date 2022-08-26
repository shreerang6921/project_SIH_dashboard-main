import { useState } from 'react';
import FormAction from "./formComps/FormAction";
import Input from "./formComps/Input";

// const fields=signupFields;
// let fieldsState={};

// fields.forEach(field => fieldsState[field.id]='');

export default function Signup(){
  // const [signupState,setSignupState]=useState(fieldsState);
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [confPass,setConfPass] = useState('');
  
  const handleSubmit=(e)=>{
    e.preventDefault();
    createAccount()
  }

  //handle Signup API Integration here
  const createAccount=()=>{
    fetch("http://localhost:8000/",{
      method:"POST",
      headers: {
        'Content-Type': 'application/json'
        },
      body:JSON.stringify({
        name,
        email,
        password,
        confPass
      })
    }).then(response=>response.json())
    .then(data=>{
       console.log("success")
    })
    .catch(error=>console.log(error))

  }

    return(
        <form className="mt-8 space-y-6 z-[-1]" onSubmit={handleSubmit}>
        <div className="">
        {
                <>
                
                        <Input
                            
                        handleChange={(e)=>{setName(e.target.value)}}
                        value={name}
                        labelText="name"
                        labelFor="name"
                        id="name"
                        name="name"
                        type="name"
                        isRequired={true}
                        placeholder="name"
                    />

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
                    <Input
                            
                            handleChange={(e)=>{setConfPass(e.target.value)}}
                            value={confPass}
                            labelText="confPass"
                            labelFor="confPass"
                            id="confPass"
                            name="confPass"
                            type="confPass"
                            isRequired={true}
                            placeholder="conf password"
                    />
                    </>
                
                
            }
          <FormAction handleSubmit={handleSubmit} text="Signup" />
        </div>

         

      </form>
    )
}