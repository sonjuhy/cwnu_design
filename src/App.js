import "./App.css";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

import MainPage from "./component/js/mainTab";
import DesignerPage from "./component/js/designerTab";
import GuestPage from "./component/js/guestTab";
import AboutPage from "./component/js/aboutTab";
import WorkPage from "./component/js/workTab";

import AccessoriesPage from "./component/workComponent/accessoriesTab";
import EnvironmentPage from "./component/workComponent/environmentTab";
import FurniturePage from "./component/workComponent/furnitureTab";
import PackagePage from "./component/workComponent/packageTab";
import PosterPage from "./component/workComponent/posterTab";
import ProductPage from "./component/workComponent/productTab";
import VideoPage from "./component/workComponent/videoTab";

import TestPage from "./component/lab/labWindowing";

function App() {
  const nav_style = {
    backgroundColor: "transparent",
  };
  return (
    <div>
      <div id="parent-div">
        <marquee direction="up" className="side-div" id="side-text">
          <span>
            changwon national university industrial design the 32th gradutaion
            show "metaeky"
          </span>
          <span>
            changwon national university industrial design the 32th gradutaion
            show "metaeky"
          </span>
        </marquee>
      </div>
      <div id="child-div">
        <div id="nav-div" className="row">
          <div className="col-1">
            <Link to="/">
              <img
                alt=""
                src="assets/img/logo_black.png"
                width="80"
                height="80"
                className="d-inline-block align-top"
              />
            </Link>
          </div>
          <div className="col-11">
            <Navbar bg="transparent" expand="lg">
              <Container style={nav_style}>
                <Navbar.Brand></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse
                  id="basic-navbar-nav"
                  className="justify-content-end"
                >
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
                    <Link to="guest">
                      <img
                        src="assets/img/icon_person_guest.png"
                        width="40px"
                        alt="move to guest"
                      />
                    </Link>
                  </Navbar.Text>
                  <Navbar.Text id="navbar-link">
                    <a
                      href="https://www.instagram.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="assets/img/icon_insta_black.png"
                        width="40px"
                        alt="move to instagram"
                      />
                    </a>
                  </Navbar.Text>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/guest" element={<GuestPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/designer" element={<DesignerPage />} />
          <Route path="/accessories" element={<AccessoriesPage />} />
          <Route path="/environment" element={<EnvironmentPage />} />
          <Route path="/furniture" element={<FurniturePage />} />
          <Route path="/package" element={<PackagePage />} />
          <Route path="/poster" element={<PosterPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/video" element={<VideoPage />} />
          <Route path="/test" element={<TestPage/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
