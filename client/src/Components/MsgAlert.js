import React from "react";
import { Alert } from "react-bootstrap";
function MsgAlert({ variant, msg }) {
  return (
    <>
      <Alert variant={variant || "danger"}>
        {msg || "Message placeholder"}
      </Alert>
    </>
  );
}

export default MsgAlert;
