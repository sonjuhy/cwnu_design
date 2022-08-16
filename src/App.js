import './App.css';
import { Link } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import MainPage from './component/mainTab';
import GuestPage from './component/guestTab';
import AboutPage from './component/aboutTab';

function App() {
  return (
    <div >
      <div id="parent-div">
        <marquee direction="up" className='side-div' id="side-text">
          <span>
            changwon national university industrial design the 32th gradutaion show "metaeky"
          </span>
          <span>
            changwon national university industrial design the 32th gradutaion show "metaeky"
          </span>
        </marquee>
        <div id="child-div">
          <Navbar bg="light" variant="light">
            <Container>
              <Navbar.Brand>
                <Link to="/">
                  <img
                    alt=""
                    src="assets/img/logo_black.png"
                    width="80"
                    height="80"
                    className="d-inline-block align-top"
                  />
                </Link>
              </Navbar.Brand>
              <Navbar.Collapse className="justify-content-end">
                <div id="navbar-link">
                  <Navbar.Text id="navbar-link">
                    <Link to="about">ABOUT</Link>
                  </Navbar.Text>
                  <Navbar.Text id="navbar-link">
                    <Link to="designer">DESIGNER</Link>
                  </Navbar.Text>
                  <Navbar.Text id="navbar-link">
                    <Link to="work">WORK</Link>
                  </Navbar.Text>
                  <Navbar.Text id="navbar-link">
                    <Link to="guest"><img src="assets/img/icon_person_guest.png" width='40px' alt="move to guest" /></Link>
                  </Navbar.Text>
                  <Navbar.Text id="navbar-link">
                    <a href="https://www.instagram.com/" target='_blank' rel="noopener noreferrer"><img src="assets/img/icon_insta_black.png" width='40px' alt="move to instagram" /></a>
                  </Navbar.Text>
                </div>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/guest" element={<GuestPage />} />
          </Routes>
        </div>
      </div>


    </div>

  );
}

export default App;
