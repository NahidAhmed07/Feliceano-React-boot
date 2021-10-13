
import React, { useState } from "react";
import { Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import "./Login.css";
import googleImg from "../../images/google.png";
import githubImg from "../../images/github.png";
import facebookImg from "../../images/facebook.png";
import tweeterImg from "../../images/tweeter.png";
import useAuth from "../../Hooks/useAuth";
import { useHistory, useLocation } from "react-router";


const Login = () => {

  const [showState, setShowState] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState("");
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location?.state?.from || "/";
  const { googleSignIn, user ,error,setError, setUser , githubSignIn , facebookSignIn} = useAuth();

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        history.push(redirect_uri);
      })
      .catch((err) => setError(err.message));
  }

  const handleGithubSignIn = () => {
    githubSignIn().then(() => {
      history.push(redirect_uri)
    }).catch(err => {
      setError(err.message);
    })
  }

  const handleFacebookSignIn = () => {
    facebookSignIn()
      .then((result) => {
        history.push(redirect_uri);
      })
      .catch((err) => setError(err.message));
  }
  const handleEmil = (e) => {
    const emailRegex = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
    if (!emailRegex.test(e.target.value)) {
      setError("Invalid Email Address");
    } else {
      setError(" ");
      setEmail(e.target.value);
    }
  };

  return (
    <section className="auth-home">
      <Container>
        <Row>
          <Col xs={12} md={8} lg={5} className="mx-auto">
            <div className="login-container p-5 my-5 rounded-1 ">
              <h2 className="font-monospace fw-bold text-center">Login</h2>
              <h5>{user.displayName}</h5>
              <Form>
                <Form.Group controlId="validationCustomUsername">
                  <p className="text-center text-success">
                    <span className="text-white">he</span>
                    {success}{" "}
                    {success.length > 1 && <i class="far fa-check-circle"></i>}
                  </p>
                  <Form.Label>Your Email</Form.Label>
                  <InputGroup hasValidation>
                    <InputGroup.Text id="inputGroupPrepend">
                      <i className="far text-primary  fa-user"></i>
                    </InputGroup.Text>
                    <Form.Control
                      onBlur={handleEmil}
                      className="input-field"
                      type="email"
                      placeholder="Enter your name"
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
                      placeholder="Enter your password"
                      aria-describedby="inputGroupPrepend"
                      required
                    />
                    <InputGroup.Text
                      onClick={() => setShowState(!showState)}
                      className="toggleIcon"
                      id="inputGroupPrepend"
                    >
                      <i
                        className={
                          showState ? "far fa-eye-slash" : "far fa-eye"
                        }
                      ></i>
                    </InputGroup.Text>
                  </InputGroup>
                </Form.Group>
                {<p className="text-end my-3 forgot-text">Forgot password?</p>}

                <p className="text-danger d-block">
                  <span className="text-white">h</span>
                  {error}
                </p>
                <button className="login-btn">LOGIN</button>

                <p className="text-center mt-5">or Sign UP Using</p>
                <div className="icon-parent">
                  <img
                    className="img-icon"
                    onClick={handleGoogleSignIn}
                    src={googleImg}
                    alt=""
                  />
                  <img
                    className="img-icon"
                    onClick={handleGithubSignIn}
                    src={githubImg}
                    alt=""
                  />
                  <img
                    className="img-icon"
                    onClick={handleFacebookSignIn}
                    src={facebookImg}
                    alt=""
                  />
                  <img className="img-icon" src={tweeterImg} alt="" />
                </div>

                <div className="text-center my-5">
                  <p>Or Sign UP Using</p>

                  <p className="signUP-btn">Register new Account?</p>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Login;