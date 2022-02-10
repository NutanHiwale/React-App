import React, { useReducer } from "react";
import { Button } from "reactstrap";
//  import yup from "yup";
import * as yup from "yup";

//import validator from "validator";

// -----------------------------------------------------------------------

const initialState = {
  email: "",
  password: "",
  firstName: "",
  lastName: "",
  submit: true,
};

const loginConstants = {
  setEmail: "SET_EMAIL",
  setPassword: "SET_PASSWORD",
  setFirstName: "SET_FIRST_NAME",
  setLastName: "SET_LAST_NAME",
  setSubmit: "SET_SUBMIT",
};

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case loginConstants.setEmail: {
      return {
        ...state,
        email: payload,
      };
    }

    case loginConstants.setPassword: {
      return {
        ...state,
        password: payload,
      };
    }

    case loginConstants.setFirstName: {
      return {
        ...state,
        emailError: payload,
      };
    }

    case loginConstants.setLastName: {
      return {
        ...state,
        passwordError: payload,
      };
    }

    case loginConstants.setSubmit: {
      return {
        ...state,
        submit: payload,
      };
    }

    default: {
      return state;
    }
  }
};

// -----------------------------------------------------------------------

 const clearEmailField = () => {};
// -----------------------------------------------------------------------


const SignUp = ({ onSignUpSuccess ,setShowLoginPage }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { email, password, firstName, lastName } = state;

  const onSignUp = (e) => {
   
    console.log(e.target.email.value);
    console.log(e.target.password.value);

    let schema = yup.object().shape({
      firstName: yup.string().email(),
      lastName: yup.string().url(),
      email: yup.string().email().required(),
      password: yup.string().min(8).required(),

    });

    schema
      .validate({ email, password, firstName, lastName }).then(
        response => console.log(response)
      )
      .catch(function (err) {
        console.log(err)
        //   err.name; // => 'ValidationError'
        //   err.errors; // => ['Deve ser maior que 18']
      });
  };


    // function uponSignUp(e){
    //   e.preventDefault()
    //   let flag = true 
    //   if (!email){
    //     flag = false
    //     alert("Email Can't be empty")
    //   }
    //   if(!password){
    //     flag = false 
    //     alert("Password Can't be empty")
    //   }
    //   console.log("inside uponSubmit");
    //   console.log(onSignUpSuccess)
    //   if (flag){
    //     onSignUpSuccess()
    //   }
    // }


  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSignUp(e);
          onSignUpSuccess()
        }}
      >
        <h3>Sign Up</h3>
        <div className="form-group">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
          />
        </div>
        <div className="form-group">
          <label>Last name</label>
          <input type="text" className="form-control" placeholder="Last name" />
        </div>
        <div className="form-group">
          <label for="email">Email address</label>
          <input
            id="email"
            name="email"
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            id="password"
          />
        </div>
        <button type="submit" className="btn btn-primary btn-block">
          Sign Up
        </button>
        <p className="forgot-password text-right">
          Already registered?
          <Button onClick={ ()=>{ onSignUpSuccess() }}>Sign In</Button>
        </p>
      </form>
    </>
  );
};

export default SignUp;
