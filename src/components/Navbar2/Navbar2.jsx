import React, { useContext, useEffect } from "react";
import image2 from "../images/logo.svg";
import "./Navbar2.css";
import image6 from "../images/man.svg";
import image5 from "../images_add/instagram.svg";
import image4 from "../images_add/facebook.svg";
import image3 from "../images_add/footer.svg";

import image7 from "../images/prem.svg";
import image8 from "../images_add/fav.svg";
import image11 from "../images_add/you.svg";
import image9 from "../images_add/comment.svg";
import image10 from "../images_add/like.svg";
import image12 from "../images_add/twitter.svg";

import { postContext } from "../../context/postContext";
import { Link } from "react-router-dom";

const Navbar2 = () => {
  const { post, getPost } = useContext(postContext);
  useEffect(() => {
    getPost();
  }, []);

  return (
    <div className="container">
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h3>COLLECTIONS</h3>
          <Link style={{ textDecoration: "none" }} to="/collections">
            <div style={{ display: "flex", alignItems: "center" }}>
              <h3>See All</h3>
              <img className="col_all" src={image2} alt="" />
            </div>
          </Link>
        </div>
        <div className="col">
          <div className="col_block">
            <img
              className="col_img"
              src="https://deepstash.com/_next/image?url=https%3A%2F%2Fd1dfxfqogsjixt.cloudfront.net%2Fcollection%2Fhandling_difficult_people.png&w=1920&q=75"
              alt=""
            />
            <h3 className="col_h3">
              Handling Difficult <br /> People
            </h3>
            <h4 className="col_h4">
              {" "}
              <img className="prem" src={image7} alt="" />
              pro
            </h4>
          </div>
          <div className="col_block">
            <img
              className="col_img"
              src="https://deepstash.com/_next/image?url=https%3A%2F%2Fd1dfxfqogsjixt.cloudfront.net%2Fcollection%2Fask_for_a_raise.png&w=1920&q=75"
              alt=""
            />
            <h3 className="col_h3">
              Ask For a Raise <br /> For Someone
            </h3>
            <h4 className="col_h4">
              {" "}
              <img className="prem" src={image7} alt="" />
              pro
            </h4>
          </div>
          <div className="col_block">
            <img
              className="col_img"
              src="https://deepstash.com/_next/image?url=https%3A%2F%2Fd1dfxfqogsjixt.cloudfront.net%2Fcollection%2Fboost_your_emotional_intelligence.png&w=1920&q=75"
              alt=""
            />
            <h3 className="col_h3">
              Boost Your <br /> Emotional...
            </h3>
            <h4 className="col_h4">
              <img className="prem" src={image7} alt="" /> pro
            </h4>
          </div>
          <div className="col_block">
            <img
              className="col_img"
              src="https://deepstash.com/_next/image?url=https%3A%2F%2Fd1dfxfqogsjixt.cloudfront.net%2Fcollection%2Fa_job_seekers_guide.png&w=1920&q=75"
              alt=""
            />
            <h3 className="col_h3">
              A Job Seeker's <br /> Guide
            </h3>
            <h4 className="col_h4">
              {" "}
              <img className="prem" src={image7} alt="" />
              pro
            </h4>
          </div>
        </div>
        <div className="phone">
          <div className="phone_block1">
            <img
              className="phone_img"
              src="https://deepstash.com/_next/image?url=https%3A%2F%2Fstatic.deepstash.com%2Fillustrations%2Fhand_phone_dark.png&w=256&q=75"
              alt=""
            />
          </div>
          <div className="phone_block2">
            <h4 className="phone_h3">Continue reading your collections</h4>
            <h4 className="phone_h3">
              Pick up where you left off your collections with the mobile app.
            </h4>
            <Link
              style={{ textDecoration: "none", cursor: "pointer" }}
              to="/phone"
            >
              <h5 className="phone_h4">Get the App</h5>
            </Link>
          </div>
        </div>
        <div className="list">
          <h3>DISCOVER NEW IDEAS</h3>
        </div>
      </div>
      <div className="main_list">
        {post.map((item) => (
          <div
            className="navbar_2block"
            style={{ display: "flex", alignItems: "center" }}
            key={item.id}
          >
            <div className="list1">
              <h4 className="beka">@Bekbolsun</h4>
              <img className="list_img" src={item.img} alt="" />
              <div className="list1_titles">
                <h1 className="list_h1">{item.title}</h1>
                <p className="list_p">{item.description}</p>
              </div>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <img className="fav_img" src={image8} alt="" />
                <img className="like1" src={image10} alt="" />
                <img className="like1" src={image9} alt="" />
              </div>
            </div>
            <div className="list2">
              <div className="list2_3">
                <img className="man_list2" src={image6}></img>
                <h2 className="list_user">@Bekbolsun</h2>
              </div>
              <div className="book">
                <img
                  className="book_img"
                  src="https://previews.123rf.com/images/kira2517/kira25171602/kira2517160200037/52237416-flach-symbol-ist-ein-stapel-b%C3%BCcher.jpg"
                  alt=""
                />
                <h4 className="book_title">SELF-IMPROVEMENT</h4>
              </div>
              <div className="comments">
                <img className="like" src={image10} alt="" />
                <img className="com" src={image9} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: "200px" }}>
        <img className="img_footer " src={image3} alt="" />
        <div className="main_footer">
          <div>
            <a target="_blank" href="https://www.instagram.com/deepstash/">
              <img className="footer_nav" src={image5} alt="" />
            </a>
            <a target="_blank" href="https://www.facebook.com/deepstash/">
              <img className="footer_nav" src={image4} alt="" />
            </a>
            <a target="_blank" href="https://twitter.com/deepstash/">
              <img className="footer_nav" src={image11} alt="" />
            </a>
            <a
              target="_blank"
              href="https://www.youtube.com/channel/UCXh3Zca5WIW0C_tQJrDoa1w"
            >
              <img className="footer_nav" src={image12} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar2;
