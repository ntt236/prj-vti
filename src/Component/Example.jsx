import React, { useEffect, useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import FormContainer from "./FormContainer";
import TableContainer from "./TableContainer";

function Example({ args }) {
  const [modal, setModal] = useState(false);
  const [data, setData] = useState([]);
  const [edit, setEdit] = useState(null);
  const toggle = () => setModal(!modal);

  const onSubmitData = (newData) => {
    setData([...data, newData]);
    setModal(false);
  };
  const onUpdateData = (newData) => {
    const newDataArr = data.map((item) => {
      if (item.id === newData.id) {
        return newData;
      }
      return item;
    });
    setData(newDataArr);
    setModal(false);
    setEdit(null);
  };
  const handleEdit = (edit) => {
    setEdit(edit);
    setModal(true);
  };
  const handleDelete = (id) => {
    const datalocal = data.filter((data) => data.id !== id);
    setData(datalocal);
    // localStorage.setItem("data", JSON.stringify(newData));
    // localStorage.removeItem("data", JSON.stringify(datalocal));
    if (datalocal.length === 0) {
      localStorage.removeItem("data");
    } else {
      localStorage.setItem("data", JSON.stringify(datalocal));
    }
  };
  useEffect(() => {
    if (data?.length > 0) {
      localStorage.setItem("data", JSON.stringify(data));
    }
  }, [data]);
  useEffect(() => {
    const dataLocal = localStorage.getItem("data");
    if (dataLocal) {
      setData(JSON.parse(dataLocal));
    }
  }, []);

  return (
    <div>
      <Button color="danger" onClick={toggle}>
        Create New Account
      </Button>
      <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}>Create New Account</ModalHeader>
        <ModalBody>
          <FormContainer
            onSubmitData={onSubmitData}
            edit={edit}
            onUpdateData={onUpdateData}
          />
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
      <TableContainer
        data={data}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
    </div>
  );
}

export default Example;
