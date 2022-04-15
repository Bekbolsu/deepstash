import React, { useContext, useEffect, useState } from "react";
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
import { Link, useSearchParams } from "react-router-dom";
import { favContext } from "../../context/favContext";
import Pizda from "./Pizda";

const Navbar2 = ({ item }) => {
  const { addProductToCart2, checkItemInCard2 } = useContext(favContext);
  const [checkItem2, setCheckItem2] = useState(checkItemInCard2(item.id));
  const { post, getPost } = useContext(postContext);
  // useEffect(() => {
  //   getPost();
  // }, []);

  return (
    <div className="container">
      <div className="main_list">
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
              <img className="like1" src={image10} alt="" />

              <img className="like1" src={image9} alt="" />
              <img
                onClick={() => {
                  addProductToCart2(item);
                  setCheckItem2(checkItemInCard2(item.id));
                }}
                style={{
                  fontSize: "25px",
                  borderBottom: checkItem2 ? "2px solid white" : "none",
                }}
                className="like1"
                src={image8}
                alt=""
              />
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
                <img className="like1" src={image10} alt="" />
                <img className="like1" src={image9} alt="" />
                <img className="like1" src={image8} alt="" />
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
                <img className="fav_img" src={image8} alt="" />

                <img className="like" src={image10} alt="" />
                <img className="com" src={image9} alt="" />
              </div>
            </div>
            <div className="comments">
              <img
                onClick={() => {
                  addProductToCart2(item);
                  setCheckItem2(checkItemInCard2(item.id));
                }}
                style={{
                  fontSize: "25px",
                  borderBottom: checkItem2 ? "2px solid white" : "none",
                }}
                className="fav_img"
                src={image8}
                alt=""
              />

              <img className="like" src={image10} alt="" />
              <img className="com" src={image9} alt="" />
            </div>
            <p>{item.date}</p>
          </div>
        ))}

      
      </div>
      


      </div>
    </div>
  );
};

export default Navbar2;
