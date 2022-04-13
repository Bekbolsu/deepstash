import React, { useContext, useEffect, useState } from "react";
import "./Add.css";
import image from "../images_add/add.svg";
import image2 from "../images_add/bomb.svg";
import image3 from "../images_add/back.svg";
import { Link } from "react-router-dom";
import { postContext } from "../../context/postContext";

const Add = () => {
  const [img, setImg] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { addPost, getPost } = useContext(postContext);
  function postAdd() {
    let newObj = {
      img,
      title,
      description,
    };
    setDescription("");
    setImg("");
    setTitle("");
    addPost(newObj);
  }

  return (
    <div className="container">
      <Link style={{ textDecoration: "none" }} to="/">
        <div style={{ display: "flex" }}>
          <img className="img_back" src={image3} alt="" />
          <h3 className="back_h3">Back</h3>
        </div>
      </Link>
      <div className="add_post">
        <div className="add_post_block">
          <div className="add_block1">
            <img className="add_img" src={image} alt="" />
            <input
              onChange={(e) => setImg(e.target.value)}
              value={img}
              className="add_inp"
              type="text"
              placeholder="Add Image"
            />
          </div>

          <div className="add_block2">
            <input
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              className="bomb_inp"
              type="text"
              placeholder="Title of the idea"
            />
            <img className="bomb" src={image2} alt="" />
          </div>
          <textarea
            maxLength={130}
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            placeholder="What inspiring idea you want to share with world today?"
            className="text_bomb"
            cols="30"
            rows="10"
          ></textarea>
          <button onClick={() => postAdd()} className="btn_add">
            + Add Idea
          </button>
        </div>
      </div>
    </div>
  );
};

export default Add;
