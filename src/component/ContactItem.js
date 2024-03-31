import React from 'react';
import { Col, Row } from 'react-bootstrap';

const ContactItem = ({ item }) => {
  return (
    <div>
      <Row className="row-wrap">
        <Col lg={2}>
          <div className="circle">{item?.name}</div>
        </Col>
        <Col lg={10}>
          <div>{item.name}</div>
          <div>{item.phone}</div>
        </Col>
      </Row>
    </div>
  );
};

export default ContactItem;
