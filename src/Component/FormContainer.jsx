import React, { useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

const FormContainer = ({ onSubmitData }) => {
  const [emailValue, setEmailValue] = useState("");
  const [userNameValue, setUserNameValue] = useState("");
  const [fullNameValue, setFullNameValue] = useState("");
  const [departmentValue, setDepartmentValue] = useState("");
  const [positionValue, setPositionValue] = useState("");
  const onEmailChange = (e) => {
    setEmailValue(e.target.value);
  };
  const onUserNameChange = (e) => {
    setUserNameValue(e.target.value);
  };
  const onFullNameChange = (e) => {
    setFullNameValue(e.target.value);
  };
  const onDepartmentChange = (e) => {
    setDepartmentValue(e.target.value);
  };
  const onPositionChange = (e) => {
    setPositionValue(e.target.value);
  };
  const handleSubmit = (e) => {
    const object = {
      id: Math.random(),
      email: emailValue,
      userName: userNameValue,
      fullName: fullNameValue,
      department: departmentValue,
      position: positionValue,
    };
    console.log("🚀 ~ handleSubmit ~ object:", object);
    onSubmitData(object);
  };
  const onResetData = (e) => {
    setEmailValue("");
    setUserNameValue("");
    setFullNameValue("");
  };
  return (
    <div>
      {" "}
      <Form>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            id="exampleEmail"
            name="email"
            placeholder="Input Email"
            type="email"
            value={emailValue}
            onChange={onEmailChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleUserName">UserName</Label>
          <Input
            id="examplePassword"
            name="userName"
            placeholder="Input UserName "
            type="userName"
            value={userNameValue}
            onChange={onUserNameChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleDatetime">Fullname</Label>
          <Input
            id="exampleFullName"
            name="FullName"
            placeholder="Input FullName"
            type="FullName"
            value={fullNameValue}
            onChange={onFullNameChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelect">Select a Department</Label>
          <Input
            id="exampleSelect"
            name="select"
            type="select"
            value={departmentValue}
            onChange={onDepartmentChange}
          >
            <option value={"Bán Hàng"}>Bán Hàng</option>
            <option value={"Giám đốc"}>Giám đốc</option>
          </Input>
        </FormGroup>

        <FormGroup>
          <Label for="exampleSelect">Select a Position</Label>
          <Input
            id="exampleSelect"
            name="select"
            type="select"
            value={positionValue}
            onChange={onPositionChange}
          >
            <option value={"dev"}>Dev</option>
            <option value={"test"}>Test</option>
            <option>5</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Button onClick={handleSubmit}>Create</Button>
          <Button onClick={onResetData}>Reset</Button>
        </FormGroup>
      </Form>
    </div>
  );
};

export default FormContainer;
