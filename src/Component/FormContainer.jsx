import React, { useEffect, useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

const FormContainer = ({ onSubmitData, onUpdateData, edit }) => {
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

  useEffect(() => {
    if (edit) {
      setEmailValue(edit.email);
      setUserNameValue(edit.userName);
      setFullNameValue(edit.fullName);
      setDepartmentValue(edit.department);
      setPositionValue(edit.position);
    }
  }, [edit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (departmentValue === "") {
      alert("Please select a department");
      return;
    }
    if (positionValue === "") {
      alert("Please select a position");
      return;
    }

    const object = {
      id: Math.random(),
      email: emailValue,
      userName: userNameValue,
      fullName: fullNameValue,
      department: departmentValue,
      position: positionValue,
      createdDate: new Date(),
    };
    onSubmitData(object);
  };
  const onUpdate = (e) => {
    e.preventDefault();
    if (departmentValue === "") {
      alert("Please select a department");
      return;
    }
    if (positionValue === "") {
      alert("Please select a position");
      return;
    }

    const object = {
      id: edit?.id,
      email: emailValue,
      userName: userNameValue,
      fullName: fullNameValue,
      department: departmentValue,
      position: positionValue,
      createdDate: new Date(),
    };
    onUpdateData(object);
  };
  const onResetData = (e) => {
    setEmailValue("");
    setUserNameValue("");
    setFullNameValue("");
    setDepartmentValue("");
    setPositionValue("");
  };

  return (
    <div>
      {" "}
      <Form onSubmit={edit ? onUpdate : handleSubmit}>
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
            <option value=""> Vui lòng chọn</option>
            <option value="Bán hàng"> Bán Hàng</option>
            <option value="Giám Đốc"> Giám đốc</option>
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
            <option value="">Vui lòng chọn</option>
            <option>dev</option>
            <option>Test</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Button type="submit">{edit ? "Update" : "Create"}</Button>
          <Button onClick={onResetData}>Reset</Button>
        </FormGroup>
      </Form>
    </div>
  );
};

export default FormContainer;
