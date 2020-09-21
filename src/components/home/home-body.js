import React from 'react';



function HomeBody() {
  return (
    <>
        <div className="body-text">
          <h1>Osha Groetz</h1>
          <h2>Software Engineer</h2>
          {/* <p>Fall 2020</p> */}
        </div>
        <div className="osha-pic">
        <img src={'https://res.cloudinary.com/djsz02nwd/image/upload/v1600472255/Asset_2_qwg54d.png'} alt="oshag" className="img-responsive"/>
        </div>
    </>
  );
}

export default HomeBody;
