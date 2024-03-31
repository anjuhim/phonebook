import { Button, Col, Container, Form, Row, Stack } from 'react-bootstrap';
import './App.css';
import ContactForm from './component/ContactForm';
import ContactList from './component/ContactList';

// 유저는 연락처를 생성할 수 있다
// 연락처에는 이름과 전화번호 정보가 필요하다
// 유저는 연락처 리스트를 볼 수 있다.
// 유저는 이름으로 연락처를 검색할 수 있다.

// 1. 왼쪽에는 연락처 등록하는 폼이, 오른쪽에는 연락처 리스트와 search창이 있다
// 2. 리스트에 유저 이름과 전화번호를 추가할 수 있다
// 3. 리스트에 아이템이 몇개있는지 보인다.
// 4. 사용자가 유저를 이름 검색을오 찾을 수 있따.
function App() {
  return (
    <div>
      <h1 className="title">연락처</h1>
      <Container>
        <Row>
          <Col>
            <ContactForm />
          </Col>
          <Col>
            <ContactList />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
