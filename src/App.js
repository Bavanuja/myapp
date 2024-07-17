import React from 'react';
import './App.css';

const ImageComponent = () => {
  return (
    <div>
      <img src="B2.jpg" alt="Bavanuja Kamalakkannan" width="300" height="400" />
    </div>
  );
};

function Heading(props) {
  return <h1>{props.title}</h1>;
}

function Heading2() {
  return <h2>Undergraduate Student</h2>;
}

function Heading3() {
  return <h3>About</h3>;
}

function Para() {
  return (
    <p>
      I am a motivated and adaptable frontend developer with a strong foundation in HTML, CSS, and JavaScript. Currently, I am enhancing my skills through a comprehensive frontend development course. I am passionate about creating intuitive and engaging user experiences and am eager to contribute my expertise to a dynamic team. With a keen eye for detail and a commitment to continuous learning, I am confident in my ability to deliver high-quality, innovative solutions.
    </p>
  );
}

function Heading4() {
  return <h3>Skills</h3>;
}

function List1() {
  return (
    <ul>
      <li>Java</li>
      <li>C</li>
      <li>JS</li>
      <li>HTML</li>
      <li>CSS</li>
    </ul>
  );
}

function Heading5() {
  return <h3>Experiences</h3>;
}

function Heading6() {
  return <h4>Former Intern at Yarl IT Hub</h4>;
}

function Para1() {
  return (
    <p>
      I have done a volunteer-based internship here. It inspired me to improve
      my communicative and leadership skills, and I was heavily involved in
      entrepreneurship.
    </p>
  );
}

function Heading7() {
  return <h3>Education</h3>;
}

function Heading8() {
  return <h4>UGC-2009-2022</h4>;
}

function Para2() {
  return (
    <p>
      I have completed my Advanced Level in the math stream with a <b>very good pass</b> for mathematics and a credit pass for <b>physics & IT</b>.
    </p>
  );
}

function Heading9() {
  return <h4>University of Uva Wellessa - Computer Science & Technology</h4>;
}

function Para3() {
  return (
    <p>
      I am currently pursuing my Bachelor’s Degree programme here.
    </p>
  );
}

function Heading10() {
  return <h3>Language</h3>;
}

function List2() {
  return (
    <ul>
      <li>English</li>
      <li>Tamil</li>
      <li>Sinhala</li>
    </ul>
  );
}

function Heading11() {
  return <h3>Contacts</h3>;
}

function List3() {
  return (
    <ol>
      <li>bbavanuja@gmail.com</li>
      <li>0772040616</li>
      <li>Sanguveli North Manipay</li>
    </ol>
  );
}

function App(props) {
  return (
    <div className="container">
      <Heading title={props.title} />
      <ImageComponent />
      <Heading2 />
      <Heading3 />
      <Para />
      <Heading4 />
      <List1 />
      <Heading5 />
      <Heading6 />
      <Para1 />
      <Heading7 />
      <Heading8 />
      <Para2 />
      <Heading9 />
      <Para3 />
      <Heading10 />
      <List2 />
      <Heading11 />
      <List3 />
    </div>
  );
}

export default App;
