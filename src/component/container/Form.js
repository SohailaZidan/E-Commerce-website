import React from "react";
import { useRef ,useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function Login() {
  const defaultDate = {
    email: "",
    password: "",
    age: "",
  };
  const ageRef = useRef(null);
  const passRef = useRef(null);
  const [formData, setFormData] = useState({ ...defaultDate });
  const [error, setError] = useState({
    email: null,
    password: null,
    age: null,
  });
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const changeHandler = (e) => {
    if (e.target.name === "email" && !emailRegex.test(e.target.value)) {
      setError({
        ...error,
        email: `Enter your email like name@email.com`,
        // [e.target.name]: `${e.target.name} should have format like this 'name@email.com' `,
      });
    } else if (e.target.name === "age" && e.target.value < 18) {
      setError({
        ...error,
        [e.target.name]: `${e.target.name} must be + 18.`,
      });
    } else if (e.target.name === "password" && e.target.value.length <= 8) {
      setError({
        ...error,

        [e.target.name]: `${e.target.name} must be more than 8 characters.`,
      });
    } else {
      setError({
        ...error,
        [e.target.name]: null,
      });
    }

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const submitHandler = (e) => {
    
    e.preventDefault();
    if (
      !error.email &&
      !error.age &&
      !error.password &&
      emailRegex.test(formData.email) &&
      formData.password.length > 8 &&
      formData.age >= 18
    ) {
      setFormData({
        ...defaultDate,
      });
     
    } else {
      alert(" Please Enter data correctly , try again ");
    }
  };
  return (
    <Form
    style={{background:"#8b8b8b29"}}
      className="  d-flex flex-column justify-content-center shadow-sm align-items-center p-5 mb-2"
      onSubmit={submitHandler}
     >
      <Form.Group className="col-lg-8 mb-5 col-sm-12" controlId="formBasicEmail">
        <h1 className="mb-5
         text-white">
          Login</h1>
        <Form.Label style={{color:'white'}}>Email</Form.Label>
        <Form.Control
          type="email"
          value={formData.email}
          placeholder="Enter your email"
          name="email"
          onChange={changeHandler}
         
        />
        <Form.Text
          className={error.email ? "alert alert-danger fs-7" : "text-muted"}
          style={{position:"relative", top:"20px"}}
        >
          {error.email
            ? error.email
            : " "}
        </Form.Text>
      </Form.Group>

      <Form.Group
        ref={passRef}
        className="col-sm-12 col-lg-8 mb-5"
        controlId="formBasicPassword"
      >
        <Form.Label style={{color:'white'}}>Password</Form.Label>
        <Form.Control
          type="password"
          value={formData.password}
          onChange={changeHandler}
          placeholder="Enter your password"
          name="password"
         
        />
        <Form.Text
        style={{position:"relative", top:"20px"}}
          className={error.password ? "alert alert-danger fs-7" : "text-muted"} 
          >
          {error.password
            ? error.password
            : " "}
        </Form.Text>
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group
        className="col-sm-12 col-lg-8 mb-3"
        controlId="formBasicAge"
        ref={ageRef}
      >
        <Form.Label style={{color:'white'}}>Age</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter your age"
          value={formData.age}
          name="age"
          onChange={changeHandler}
        />
        <div
          className={error.age ? "alert alert-danger fs-7" : "text-muted"}
          style={{position:"relative", top:"20px"}}
        >
          {error.age ? error.age : "  "}
        </div>
      </Form.Group>

      <Button
        variant="white"
        className="btn-light mt-1 pe-3 ps-3"
        type="submit"
      >
        Submit
      </Button>
    </Form>
  );
}