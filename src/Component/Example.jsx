import React, { useEffect, useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import FormContainer from "./FormContainer";
import TableContainer from "./TableContainer";

function Example({ args }) {
  const [modal, setModal] = useState(false);
  const [data, setData] = useState([]);

  const toggle = () => setModal(!modal);

  const onSubmitData = (newData) => {
    setData([...data, newData]);
    setModal(false);
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
          <FormContainer onSubmitData={onSubmitData} />
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
      <TableContainer data={data} />
    </div>
  );
}

export default Example;
