import "./App.css";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

import MainPage from "./component/mainComponent/js/mainTab";
import DesignerPage from "./component/mainComponent/js/designerTab";
import GuestPage from "./component/mainComponent/js/guestTab";
import AboutPage from "./component/mainComponent/js/aboutTab";
import WorkPage from "./component/mainComponent/js/workTab";

import AccessoriesPage from "./component/workComponent/accessoriesTab";
import EnvironmentPage from "./component/workComponent/environmentTab";
import FurniturePage from "./component/workComponent/furnitureTab";
import PackagePage from "./component/workComponent/packageTab";
import PosterPage from "./component/workComponent/posterTab";
import ProductPage from "./component/workComponent/productTab";
import VideoPage from "./component/workComponent/videoTab";

import DesignerPersonalPage from "./component/designComponent/js/designerPage";
import WorkPersonalPage from "./component/personalComponent/common/js/commonComponent";

import KimyeonghaComponetPage from "./component/personalComponent/visual/js/kimyeonghaComponet";
import MoonBoEunComponentPage from "./component/personalComponent/visual/js/moonboeunComponent";
import SimSeongHyeonComponentPage from "./component/personalComponent/visual/js/simseonghyeonComponent";
import LeeYuRimComponentPage from "./component/personalComponent/visual/js/leeyurimComponent";
import BaeSuHyeonComponentPage from "./component/personalComponent/visual/js/baesuhyeonComponent";
import ShinYeRinComponentPage from "./component/personalComponent/visual/js/shinyerinComponent";
import KimjoEeComponentPage from "./component/personalComponent/visual/js/KimJoAeComponent";
import ParkjinHyeongComponentPage from "./component/personalComponent/visual/js/ParkJinHyeongComponent";
import LeeSeonHwaComponentPage from "./component/personalComponent/visual/js/LeeSeonHwaComponent";
import LeeYuJinComponentPage from './component/personalComponent/visual/js/LeeYuJinComponent';
import KimhyukjinComponentPage from "./component/personalComponent/visual/js/KimHyukJinComponent";
import ParkseongWookComponentPage from "./component/personalComponent/visual/js/ParkSeongWookComponent";
import ShindayoungComponentPage from "./component/personalComponent/visual/js/ShinDaYoungComponent";
import LeeJuhyeonComponentPage from "./component/personalComponent/visual/js/LeeJuHyeonComponent";
import ChoihayoungComponentPage from "./component/personalComponent/visual/js/ChoiHaYoungComponent";
import HongsunkyungComponentPage from "./component/personalComponent/visual/js/HongSunKyungComponent";

import TestPage from "./component/lab/verticalScroll";

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
                src="assets/img/main_black_logo.png"
                width="170"
                height="80"
                className="d-inline-block align-top"
              />
            </Link>
          </div>
          <div className="col-11" >
            <Navbar bg="transparent" expand="lg">
              <Container style={nav_style}>
                <Navbar.Brand></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse
                  id="basic-navbar-nav"
                  // className="justify-content-end"
                  style={{justifyContent: 'space-between'}}
                >
                  <div></div>
                  <div></div>
                  <Navbar.Text id="navbar-link">
                    <Link to="about" style={{fontFamily:'pretendard-semibold', textDecoration:'none', fontSize:'250%'}}>ABOUT</Link>
                  </Navbar.Text>
                  <Navbar.Text id="navbar-link">
                    <Link to="designer" style={{fontFamily:'pretendard-semibold', textDecoration:'none', fontSize:'250%'}}>DESIGNER</Link>
                  </Navbar.Text>
                  <Navbar.Text id="navbar-link">
                    <Link to="work" style={{fontFamily:'pretendard-semibold', textDecoration:'none', fontSize:'250%'}}>WORK</Link>
                  </Navbar.Text>
                  <div>
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
                  </div>
                  
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
          <Route path="/design_personal" element={<DesignerPersonalPage/>}/>
          <Route path="/test" element={<TestPage/>}/>
          <Route path="/work_personal" element={<WorkPersonalPage/>}/>
          <Route path="/kimyeongha" element={<KimyeonghaComponetPage  />}/>
          <Route path="/moonboeun" element={<MoonBoEunComponentPage/>}/>
          <Route path="/simseonghyeon" element={<SimSeongHyeonComponentPage/>}/>
          <Route path="/leeyurim" element={<LeeYuRimComponentPage/>}/>
          <Route path="/baesuhyeon" element={<BaeSuHyeonComponentPage />}/>
          <Route path="/shinyerin" element={<ShinYeRinComponentPage />}/>
          <Route path="/kimjoae" element={<KimjoEeComponentPage/>}/>
          <Route path="/parkjinhyeong" element={<ParkjinHyeongComponentPage/>}/>
          <Route path="/leeseonhwa" element={<LeeSeonHwaComponentPage/>}/>
          <Route path="/leeyujin" element={<LeeYuJinComponentPage/>}/>
          <Route path="/kimhyukjin" element={<KimhyukjinComponentPage/>}/>
          <Route path="/parkseongwook" element={<ParkseongWookComponentPage/>}/>
          <Route path="/shindayoung" element={<ShindayoungComponentPage/>}/>
          <Route path="/leejuhyeon" element={<LeeJuhyeonComponentPage/>}/>
          <Route path="/choihayoung" element={<ChoihayoungComponentPage/>}/>
          <Route path="/hongsunkyung" element={<HongsunkyungComponentPage/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
