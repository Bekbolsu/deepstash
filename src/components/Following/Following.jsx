import React, { useState } from "react";
import "./Following.css";
import image5 from "../images_add/instagram.svg";
import image4 from "../images_add/facebook.svg";
import image3 from "../images_add/footer.svg";

import image7 from "../images/prem.svg";
import image8 from "../images_add/fav.svg";

const Following = () => {
  return (
    <>
      <div className="main-following-container1">
        <div className="main-following-container2">
          <div className="main-following-container3">
            <h2 className="block-following-h2">
              Here you will see new posts from people that you follow
            </h2>
            <p className="block-following-p">
              Discover stashers to follow based on your interests.
            </p>
            <p className="block-following-p2">👇</p>
          </div>
          <div className="main-following-container4">
            {/*  */}
            <div className="main-following-container5">
              <div style={{ display: "flex" }}>
                <img
                  className="block-following-img"
                  src="https://deepstash.com/_next/image?url=https%3A%2F%2Fd1dfxfqogsjixt.cloudfront.net%2Fprofile%2F172994-1621876856.jpeg&w=3840&q=75"
                  alt="mamed"
                />
                <div className="main-following-container6">
                  <p className="block-following-p3">@mortifer</p>
                  <p className="block-following-p4">Tejash Vhavle</p>
                </div>
              </div>
              <div className="main-following-container7">
                <button className="block-following-button">Follow</button>
              </div>
            </div>

            {/*  */}
            {/*  */}
            <div className="main-following-container5">
              <div style={{ display: "flex" }}>
                <img
                  className="block-following-img"
                  src="https://deepstash.com/_next/image?url=https%3A%2F%2Fd1dfxfqogsjixt.cloudfront.net%2Fprofile%2Fcorys_clair.png&w=3840&q=75"
                  alt="mamed"
                />
                <div className="main-following-container6">
                  <p className="block-following-p3">@corys_clair</p>
                  <p className="block-following-p4">Cory Sinclair</p>
                </div>
              </div>
              <div className="main-following-container7">
                <button className="block-following-button">Follow</button>
              </div>
            </div>

            {/*  */}
            {/*  */}
            <div className="main-following-container5">
              <div style={{ display: "flex" }}>
                <img
                  className="block-following-img"
                  src="https://deepstash.com/_next/image?url=https%3A%2F%2Fd1dfxfqogsjixt.cloudfront.net%2Fprofile%2Frylee_h232.png&w=3840&q=75"
                  alt="mamed"
                />
                <div className="main-following-container6">
                  <p className="block-following-p3">@rylee_h</p>
                  <p className="block-following-p4">Rylee</p>
                </div>
              </div>
              <div className="main-following-container7">
                <button className="block-following-button">Follow</button>
              </div>
            </div>

            {/*  */}
            {/*  */}
            <div className="main-following-container5">
              <div style={{ display: "flex" }}>
                <img
                  className="block-following-img"
                  src="https://deepstash.com/_next/image?url=https%3A%2F%2Fd1dfxfqogsjixt.cloudfront.net%2Fprofile%2Fgriq512.png&w=3840&q=75"
                  alt="mamed"
                />
                <div className="main-following-container6">
                  <p className="block-following-p3">@griq</p>
                  <p className="block-following-p4">Griffin Q.</p>
                </div>
              </div>
              <div className="main-following-container7">
                <button className="block-following-button">Follow</button>
              </div>
            </div>

            {/*  */}
            {/*  */}
            <div className="main-following-container5">
              <div style={{ display: "flex" }}>
                <img
                  className="block-following-img"
                  src="https://deepstash.com/_next/image?url=https%3A%2F%2Fd1dfxfqogsjixt.cloudfront.net%2Fprofile%2F1252976-1649441169.jpeg&w=3840&q=75"
                  alt="mamed"
                />
                <div className="main-following-container6">
                  <p className="block-following-p3">@kyle_zamuel</p>
                  <p className="block-following-p4">Kyle Zamuel</p>
                </div>
              </div>
              <div className="main-following-container7">
                <button className="block-following-button">Follow</button>
              </div>
            </div>

            {/*  */}
            {/*  */}
            <div className="main-following-container5">
              <div style={{ display: "flex" }}>
                <img
                  className="block-following-img"
                  src="https://deepstash.com/_next/image?url=https%3A%2F%2Fd1dfxfqogsjixt.cloudfront.net%2Fprofile%2F1327120-1630043644.jpeg&w=3840&q=75"
                  alt="mamed"
                />
                <div className="main-following-container6">
                  <p className="block-following-p3">@subbujunior</p>
                  <p className="block-following-p4">Anand Iyer</p>
                </div>
              </div>
              <div className="main-following-container7">
                <button className="block-following-button">Follow</button>
              </div>
            </div>

            <div className="main-following-container5">
              <div style={{ display: "flex" }}>
                <img
                  className="block-following-img"
                  src="https://deepstash.com/_next/image?url=https%3A%2F%2Fd1dfxfqogsjixt.cloudfront.net%2Fprofile%2F1383601-1634914885.jpeg&w=3840&q=75"
                  alt="mamed"
                />
                <div className="main-following-container6">
                  <p className="block-following-p3">@pixe_blog</p>
                  <p className="block-following-p4">Pixe Blog</p>
                </div>
              </div>
              <div className="main-following-container7">
                <button className="block-following-button">Follow</button>
              </div>
            </div>

            <div className="main-following-container5">
              <div style={{ display: "flex" }}>
                <img
                  className="block-following-img"
                  src="https://deepstash.com/_next/image?url=https%3A%2F%2Fd1dfxfqogsjixt.cloudfront.net%2Fprofile%2Fhjoy2020.png&w=3840&q=75"
                  alt="mamed"
                />
                <div className="main-following-container6">
                  <p className="block-following-p3">@hjoy</p>
                  <p className="block-following-p4">Hamish Joy</p>
                </div>
              </div>
              <div className="main-following-container7">
                <button className="block-following-button">Follow</button>
              </div>
            </div>

            {/*  */}
          </div>
        </div>
      </div>
      <div className="container">
        <img className="img_footer" src={image3} alt="" />
        <div className="main_footer">
          <div>
            <a target="_blank" href="https://www.instagram.com/deepstash/">
              <img className="footer_nav" src={image5} alt="" />
            </a>
            <a target="_blank" href="https://www.facebook.com/deepstash/">
              <img className="footer_nav" src={image4} alt="" />
            </a>
            <a target="_blank" href="https://twitter.com/deepstash/">
              <img className="footer_nav" src={image7} alt="" />
            </a>
            <a
              target="_blank"
              href="https://www.youtube.com/channel/UCXh3Zca5WIW0C_tQJrDoa1w"
            >
              <img className="footer_nav" src={image8} alt="" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Following;
