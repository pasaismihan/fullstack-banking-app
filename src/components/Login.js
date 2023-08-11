import React from "react";
import { connect } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { validateFields } from "../utils/common";
import { Link } from "react-router-dom";

class Login extends React.Component {
  state = {
    email: "",
    password: "",
    errormsg: "",
  };
}

const handleLogin = (event) => {
  event.preventDefault();
  const { email, password } = this.state;
  const fieldsToValidate = [{ email }, { password }];
  const allFieldsEntered = validateFields(fieldsToValidate);
};
