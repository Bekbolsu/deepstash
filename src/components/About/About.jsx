import React from "react";
import "./About.css";
import image from "../About/imagesAbout/image.png";
import image1 from "../About/imagesAbout/image1.png";
import image2 from "../About/imagesAbout/image2.png";
import image3 from "../About/imagesAbout/image3.png";
import image4 from "../About/imagesAbout/image4.png";
import image5 from "../About/imagesAbout/image5.png";
import image6 from "../About/imagesAbout/image6.png";
import image7 from "../About/imagesAbout/image7.png";
import image9 from "../About/imagesAbout/image9.png";
import image10 from "../About/imagesAbout/image10.png";
import image11 from "../About/imagesAbout/image11.png";

import image12 from "../images_add/instagram.svg";
import image13 from "../images_add/facebook.svg";
import image14 from "../images_add/footer.svg";
import image15 from "../images_add/you.svg";
import image16 from "../images_add/twitter.svg";

const About = () => {
  return (
    <>
      <div className="container-about1">
        <img className="image-about" src={image} alt="" />
        <div>
          <p className="ourcore">OUR CORE BELIEF</p>
          <div>
            <p className="ideas">Ideas are fundamental</p>
          </div>
          <div>
            <p className="ifwe">
              If we evolve our biology through genes, it's what we hold in our
              brains that help shape our lives and improve the world around us.
              Ideas represent the building blocks of the modern world, informing
              our thinking and behaviour every day. New ideas breathe fresh life
              into how we view the world & we depend on new ideas to improve our
              health, productivity or our relationships.
            </p>
          </div>
        </div>
      </div>
      <div className="container-about2">
        <p className="ideasused">
          Ideas used to be reserved for the rich and powerful who had access to
          knowledge. Whether the king or the priest, it was those at the top
          that control information. With the advent of the Internet, the
          pendulum has swing the other side. We have so much access to
          information that it becomes overwhelming. There is too much to absorb
          and not enough time. Not to mention the socially enabled magical
          devices we carry in our pockets can keep our minds constantly
          distracted with divisive news & silly entertainment.
        </p>
      </div>
      <div className="container-about2">
        <p className="deepstash">
          Deepstash is platform for finding and organising the ideas that matter
          to you. We are a passionate community obsessed with finding the Aha
          moments in all the content we are consuming. We are condensing all our
          insights into ideas that we share with all the other stashes who are
          sharing our passion. It's what we call stashing!
        </p>
      </div>
      <div className="container-about3">
        <p className="ourcore">A CLOSER LOOK</p>
        <p className="ideas">How does it work?</p>
        <p className="deepstash">
          In Deepstash you find ideas on topics that interest you. These ideas
          are represented as little cards you can read at a glance. All ideas
          have a source: a book, an article, a podcast etc. And they are curated
          by a people like you.
        </p>
        <p className="now">Now with that in mind, here are the basics:</p>
        <div className="about-blocks">
          <div className="about-block">
            <img className="image1-about" src={image1} alt="" />
            <div className="textinblocks">
              <p className="deepstash">
                Opening the app you'll see the feed: a list of ideas that match
                your interests or come from stashers you follow.
              </p>
            </div>
            <div className="textinblocks">
              <p className="deepstash">
                Tapping on any idea will show you all the related ideas curated
                by the same author from that article or book.
              </p>
            </div>
          </div>
          <img className="about-image9" src={image9} alt="" />
          <div className="about-block">
            <img className="image1-aboutt" src={image2} alt="" />
            <div className="textinblocks">
              <p className="deepstash">
                Building the good habit of reading every day and constantly
                nurturing your mind is easy with Deepstash.
              </p>
            </div>
            <div className="textinblocks">
              <p className="deepstash">
                You can set a daily reading goal and maintain a reading streak.
              </p>
            </div>
          </div>
        </div>
        <img className="about-image10" src={image10} alt="" />
        <img className="about-image11" src={image11} alt="" />
        <div className="about-blockss">
          <div className="about-blockk">
            <img className="image1-about1" src={image3} alt="" />
            <div className="textinblocks">
              <p className="deepstash">
                Publish your own ideas once you are ready.
              </p>
            </div>
            <div className="textinblocks">
              <p className="deepstash">
                Don't let ideas you stumble upon go to waste.
              </p>
            </div>
          </div>
          <div className="about-blockk">
            <img className="image1-about1" src={image4} alt="" />
            <div className="textinblocks">
              <p className="deepstash">
                When you find an idea you like, stash it. This will add it to a
                collection we call a stash. You can find your collections on
                your profile.
              </p>
            </div>
            <div className="textinblocks">
              <p className="deepstash">And speaking of...</p>
            </div>
          </div>
        </div>
        <img className="about-image10" src={image10} alt="" />
        <img className="about-image11" src={image11} alt="" />
        <div className="last-block">
          <img className="last-block-img" src={image5} alt="" />
          <div className="p2">
            <p className="noww">
              Your Deepstash profile tells your story into the world of
              knowledge.
            </p>
            <p>
              The ideas you stashed, your passions or preferences live on your
              profile.
            </p>
          </div>
        </div>
      </div>
      <div className="container-about4">
        <div className="container-about4-left">
          <p className="ourcore">A BRAVE NEW FORMAT</p>
          <p className="ideas">What are ideas?</p>
          <p className="ideasused">
            Deepstash operates with ideas, short notes that are condensing
            profound thoughts into simple sentences. They could be inspiring
            quotes, sharable stories, practical tips for any area of life. Think
            of ideas like Lego bricks for your mind, small & fun pieces that you
            can pull out whenever you need them and stack them together to
            create amazing new things. Ideas are:
          </p>
          <ul>
            <li className="li">Atomic: one concept per idea.</li>
            <li className="li">
              Short: good ideas are as condensed as possible but not more.
            </li>
            <li className="li">
              Self-contained: good ideas should have value on their own.
            </li>
          </ul>
        </div>
        <div className="container-about4-right">
          <img className="about-image6" src={image6} alt="" />
        </div>
      </div>
      <div className="about5">
        <p className="ideasused">
          There are not a lot of strict rules to how ideas are made. But we have
          noticed some tips and tricks that successful stashers use.
        </p>
        <div className="aboutt5">
          <p className="ourcoree">HOW TO STASH AMAZING IDEAS</p>
          <p className="ourcoreee">SHARING IS CARING</p>
          <p className="ideas">Join our community of curators</p>
          <div className="left-right">
            <div className="about5-left">
              <img className="about-image7" src={image7} alt="" />
            </div>
            <div className="about5-right">
              <p className="ideasused">
                We read with a pen. We stash ideas by highlighting the ideas
                that jump to us. And then we borrow from one another. Because
                sharing is caring.
              </p>
              <p className="ideasused">
                Do you want to stand out on Deepstash?
              </p>
              <p className="ourcoree">APPLY FOR OUR CURATORS PROGRAMME</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container" style={{ marginTop: "200px" }}>
        <img className="img_footer" src={image14} alt="" />
        <div className="main_footer">
          <div>
            <a target="_blank" href="https://www.instagram.com/deepstash/">
              <img className="footer_nav" src={image12} alt="" />
            </a>
            <a target="_blank" href="https://www.facebook.com/deepstash/">
              <img className="footer_nav" src={image13} alt="" />
            </a>
            <a target="_blank" href="https://twitter.com/deepstash/">
              <img className="footer_nav" src={image15} alt="" />
            </a>
            <a
              target="_blank"
              href="https://www.youtube.com/channel/UCXh3Zca5WIW0C_tQJrDoa1w"
            >
              <img className="footer_nav" src={image16} alt="" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
