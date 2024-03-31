import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

const ContactForm = () => {
  const [validated, setValidated] = useState(false);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState(0);

  const addContact = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      dispatch({
        type: 'ADD_CONTACT',
        payload: {
          name,
          phone,
        },
      });
    }

    setValidated(true);
  };
  return (
    <div>
      <Form noValidate validated={validated} onSubmit={addContact}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>이름</Form.Label>
          <Form.Control
            type="text"
            placeholder="이름을 입력하세요"
            onChange={(event) => {
              setName(event.target.value);
            }}
            required
          />
          <Form.Control.Feedback type="invalid">
            이름을 입력하세요
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formContact">
          <Form.Label>연락처</Form.Label>
          <Form.Control
            type="number"
            placeholder="연락처를 입력하세요"
            onChange={(event) => {
              setPhone(event.target.value);
            }}
            required
          />
          <Form.Control.Feedback type="invalid">
            연락처를 입력하세요.
          </Form.Control.Feedback>
        </Form.Group>
        <Button type="submit">추가</Button>
      </Form>
    </div>
  );
};

export default ContactForm;
