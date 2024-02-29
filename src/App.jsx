import { Col, Container, Row } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      <Container>
        <Row className='row1'>
          <Col className='d-flex justify-content-center align-items-center'>
            <div className="card shadow p-5">
              <Row>
                <Col className='d-flex justify-content-center align-items-center'>
                  <img src="https://pitchmark.net/client/images/img-12.png" width={'100%'} alt="" />
                </Col>

                <Col>
                  <h2>Welcome Back!</h2>
                  <h5 className='text-secondary'>Login to continue</h5>
                  <div className='text-center mt-4 mb-3'>
                    <input type="text" className='form-control' placeholder='Enter your email' />
                    <input type="text" className='form-control mt-3' placeholder='Enter your password' />
                  </div>
                  <a href="#!" className='text-decoration-none'>Forgot password?</a>
                  <div className='text-center'>
                    <button className='btn btn-primary mt-2 mb-3'>Login</button>
                    <p>New user? <a href="#!" className='text-decoration-none'>Sign up</a></p>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
