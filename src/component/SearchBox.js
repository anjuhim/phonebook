import React, { useState } from 'react';
import { Button, Stack, Form, Row, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

const SearchBox = () => {
  const [searchWord, setSearchWord] = useState('');
  const dispatch = useDispatch();
  const searchContact = () => {
    dispatch({
      type: 'USER-SEARCH',
      payload: {
        searchWord,
      },
    });
  };
  return (
    <div>
      <Row>
        <Stack direction="horizontal" gap={1}>
          <Col lg={9}>
            <Form.Control
              placeholder="이름으로 검색하세요"
              onChange={(event) => {
                setSearchWord(event.target.value);
              }}
            />
          </Col>
          <Col>
            <Button onClick={searchContact}>찾기</Button>
          </Col>
        </Stack>
      </Row>
    </div>
  );
};

export default SearchBox;
