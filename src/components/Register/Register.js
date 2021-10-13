import React, { useContext, useState } from "react";
import { Form, InputGroup, Row } from "react-bootstrap";
import {
  getAuth,
  updateProfile,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import "../Login/Login.css";
import initializeFirebase from "../../Firebase/firebase.init";
import googleImg from "../../images/google.png";
import githubImg from "../../images/github.png";
import facebookImg from "../../images/facebook.png";
import tweeterImg from "../../images/tweeter.png";
import { UserContext } from "../../App";
import { makeUser } from "../../Utilities/utilities";

const auth = getAuth();

const Register = (props) => {
  const { isLogin, setIsLogin } = props;
  const [showState, setShowState] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [user, setUser] = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [success, setSuccess] = useState("");

  const handleEmil = (e) => {
    const emailRegex = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
    if (!emailRegex.test(e.target.value)) {
      setError("Invalid Email Address");
    } else {
      setError(" ");
      setEmail(e.target.value);
    }
  };

  const handleName = (e) => {
    setName(e.target.value);
  };

  const updataUserName = () => {
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then(() => {})
      .catch((err) => setError(err.message));
  };

  const createNewUser = () => {
    if (password.length < 6) {
      setError("password Shoud be at least 6 charecter");
      return;
    }
    if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
      setError("Ensure Password has two uppercase letters");
      return;
    }
    if (!/(?=.*[0-9].*[0-9])/.test(password)) {
      setError("Ensure Password has two digits");
      return;
    }
    if (!/(?=.*[a-z].*[a-z].*[a-z])/.test(password)) {
      setError("Ensure Password has three lowercase letters");
      return;
    } else {
      setError("");
      createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
          const { displayName, email, photoURL } = result.user;
          const loginUser = makeUser(displayName, email, photoURL);
          setUser(loginUser);
          verifyEmail();
          updataUserName();
          setSuccess("Registation Successful");
          setError("");
        })
        .catch((err) => {
          console.log(err.message);
          if (err.message.includes("email-already-in-use")) {
            setError("This Email already Registered");
            setSuccess("");
          }
        });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createNewUser();
  };

  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser).then(() => {});
  };
  return (
    <div className="login-container p-5 my-5 rounded-1 ">
      <h2 className="font-monospace fw-bold text-center">Register</h2>
      <Form onSubmit={handleSubmit}>
        <p className="text-center text-success">
          <span className="text-white">he</span>
          {success} {success.length > 1 && <i class="far fa-check-circle"></i>}
        </p>
        <Form.Group controlId="validationCustomUsername">
          <Form.Label>User Name</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">
              <i className="far text-primary  fa-user"></i>
            </InputGroup.Text>
            <Form.Control
              onBlur={handleName}
              className="input-field"
              type="text"
              placeholder="Enter name"
              aria-describedby="inputGroupPrepend"
              required
            />
          </InputGroup>
        </Form.Group>
        <br />
        <Form.Group controlId="validationCustomUsername">
          <Form.Label>Email</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">
              <i className="far text-primary  fa-user"></i>
            </InputGroup.Text>
            <Form.Control
              onBlur={handleEmil}
              className="input-field"
              type="email"
              placeholder="Enter Email"
              aria-describedby="inputGroupPrepend"
              required
            />
          </InputGroup>
        </Form.Group>
        <br />
        <Form.Group controlId="validationCustomUsername">
          <Form.Label>Password</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">
              <i className="fas fa-unlock-alt text-primary"></i>
            </InputGroup.Text>
            <Form.Control
              className="input-field"
              onBlur={(e) => setPassword(e.target.value)}
              type={showState ? "text" : "password"}
              placeholder="Enter password"
              aria-describedby="inputGroupPrepend"
              required
            />
            <InputGroup.Text
              onClick={() => setShowState(!showState)}
              className="toggleIcon"
              id="inputGroupPrepend"
            >
              <i className={showState ? "far fa-eye-slash" : "far fa-eye"}></i>
            </InputGroup.Text>
          </InputGroup>
        </Form.Group>
        <p className="text-danger d-block">
          <span className="text-white">h</span>
          <small>{error}</small>
        </p>
        <button className="login-btn">{isLogin ? "LOGIN" : "Register"}</button>
        <p className="text-center mt-5">or Sign UP Using</p>
        <div className="icon-parent">
          <img className="img-icon" src={googleImg} alt="" />
          <img className="img-icon" src={githubImg} alt="" />
          <img className="img-icon" src={facebookImg} alt="" />
          <img className="img-icon" src={tweeterImg} alt="" />
        </div>

        <div className="text-center my-5">
          <p>Or Sign UP Using</p>

          <p className="signUP-btn" onClick={() => setIsLogin(true)}>
            Sign in
          </p>
        </div>
      </Form>
    </div>
  );
};

export default Register;
