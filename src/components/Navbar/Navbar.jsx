import React, { useContext, useState } from "react";
import "./Navbar.css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import image from "../images/Deepstash.svg";
import image2 from "../images/logo.svg";
import image4 from "../images/add.svg";
import image6 from "../images/man.svg";
import image8 from "../images_add/fav.svg";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  bgcolor: "rgb(34, 34, 34)",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [number, setNumber] = useState("");
  const [number2, setNumber2] = useState("");

  const [number3, setNumber3] = useState("");

  function pay() {
    setNumber("");
    setNumber2("");
    setNumber3("");
  }

  return (
    <div className="container">
      <div className="main_navbar">
        <div className="navbar">
          <div className="navbar_inner">
            <div className="navbar_block1">
              <Link to="/">
                <img className="navbar_img" src={image} alt="" />
              </Link>
              <div onClick={handleOpen} className="pro">
                <img className="pro_img" src={image2} alt="" />
                <h5 className="pro_h6">GET PRO</h5>
              </div>
              <Modal
                className="modal_pro1"
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box className="modal_pro" sx={style}>
                  <div className="modal_block1">
                    <h1 className="modal_block1_h1">Get Deepstash Pro</h1>
                    <h4 className="modal_block1_h4">It's time to</h4>
                    <h2 className="modal_block1_h2">Read Like a Pro</h2>
                    <h6 className="modal_block1_h6">
                      Jump-start your reading habits, gather your knowledge,
                      remember what you read and stay ahead of the crowd!
                    </h6>
                    <h5 className="modal_block1_h5">
                      Takes just 5 minutes a day.
                    </h5>
                  </div>
                  <div className="modal_block2">
                    <h3 className="visa">Visa Maestro Bitcoin</h3>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <p className="pay_p">Number of card</p>
                      <input
                        onChange={(e) => setNumber(e.target.value)}
                        value={number}
                        placeholder="12345..."
                        className="pay_inp1"
                        type="text"
                      />
                    </div>
                    <div style={{ display: "flex" }}>
                      <div>
                        <p className="pay_p">mm</p>
                        <input
                          onChange={(e) => setNumber2(e.target.value)}
                          value={number2}
                          placeholder="MM"
                          className="pay_inp"
                          type="text"
                        />
                      </div>
                      <div style={{ marginLeft: "10px" }}>
                        <p className="pay_p">CVV</p>
                        <input
                          onChange={(e) => setNumber3(e.target.value)}
                          value={number3}
                          placeholder="CVV"
                          className="pay_inp"
                          type="text"
                        />
                      </div>
                    </div>
                    <Button
                      onClick={() => {
                        pay();
                      }}
                      className="pay_btn"
                    >
                      Pay 100$
                    </Button>
                  </div>
                </Box>
              </Modal>

              <input
                placeholder="Search for ideas,articles"
                className="search_inp"
                type="text"
              />
            </div>
            <div></div>
            <div className="navbar_block2">
              <Link style={{ textDecoration: "none" }} to="/add">
                <div className="navbar_block2_add">
                  <img className="add_img" src={image4} alt="" />
                  <h4 className="add_h5">ADD IDEA</h4>
                </div>
              </Link>
              <img className="add_img2" src={image8} alt="" />
              <div className="main_man">
                <Link to="/admin">
                  <img className="man" src={image6}></img>
                </Link>
                <img className="man_line" src={image2} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="navbar2">
          <Link to="/" className="navbar2_a" href="#">
            recommended
          </Link>
          <a className="navbar2_a" href="#">
            following
          </a>
          <a className="navbar2_a" href="#">
            Chat
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
