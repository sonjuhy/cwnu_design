import { React, useState } from 'react';
import { Parallax } from 'react-parallax';
import { Timeline, Tween } from 'react-gsap';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Animation1 from "./Animtaion1";
import "../css/test.css";
/**
 * 
 * use Intersection Observer API
 */


function App() {
  const [pageIdx] = useState(0);

  gsap.registerPlugin(ScrollTrigger);
  gsap.utils.toArray("section").forEach((section, i) => {
    ScrollTrigger.create({
      trigger: section,
      start: "top top",
      pin: true,
      pinSpacing: false,
    });
  });
  ScrollTrigger.create({
    snap: 1 / 4
  });
  return (
    <div className='main-div'>
      <div>
        <Animation1 />
        <hr />
      </div>
      <div className='section-container'>
        <section className="section01">
          <h1>section01</h1>
        </section>
        <section className="section02">
          <h1>section02</h1>
        </section>
        <section className="section03">
          <h1>section03</h1>
        </section>
        <section className="section04">
          <h1>section04</h1>
        </section>
        <section className="section05">
          <h1>section05</h1>
        </section>
      </div>
    </div>
  );
}

export default App;
