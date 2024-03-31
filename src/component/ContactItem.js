import React from 'react';
import { Col, Row } from 'react-bootstrap';

const ContactItem = ({ item }) => {
  const format = (number) => {
    let result = number;
    if (number.length === 11) {
      result = number.replace(/(\d{3})(\d{4})(\d{4})/, `$1-$2-$3`);
    }
    return result;
  };
  return (
    <div>
      <Row className="row-wrap">
        <Col lg={2}>
          <div className="circle">{item?.name}</div>
        </Col>
        <Col lg={10}>
          <div>{item.name}</div>
          <div>{format(item.phone)}</div>
        </Col>
      </Row>
    </div>
  );
};

export default ContactItem;
