import { Button, Form, FormGroup, Label, Input, Style } from "reactstrap";
import React, { useState } from "react";
import '../components/LoginPage.css'

const LoginPage = ({onLoginSuccess}) =>{
  const [emailError, setEmailError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function reset (){
    setPassword("")
    setEmail("")
  }

  function uponSubmit(e){
    e.preventDefault()
    let flag = true
    if (!email){
      flag = false
      alert("Email Can't be empty")
    }
    if (!password){
      flag = false
      alert("Password Can't be empty")
    }
    console.log("inside uponSubmit");
     console.log(onLoginSuccess)
    if (flag){
      onLoginSuccess()   
    }
  }


  return (
    <Form onSubmit={uponSubmit}>
      <FormGroup className="form_group">
       
       {/* <div class="container"> */}
        <Label for="Email"> Email </Label>
        <div className="cross">
        <Input
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}  
        />
        <Button onClick={(e) => setEmail("")}>X</Button>
        {/* </div> */}
        </div>
        </FormGroup>
        <FormGroup className="form_group">

        <Label for="Password"> Password </Label>
        <div className="cross">
        <Input 
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={(e) => setPassword("")}>X</Button>
        </div>
        
      </FormGroup>
  
    <div>
      <Button className="button" type="submit">Submit</Button> 
      <Button className="button" onClick={ reset} type="reset"> Reset  </Button>

    </div>
    </Form>
  );
};
  export default LoginPage;