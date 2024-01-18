import React from "react";
import ImageHero from "../Assets/Images/download.png";
import Image2 from "../Assets/Images/_ (2).jpeg";

export default function About({ handlePageChange }) {
  handlePageChange("About");

  return (
    <div>
      <>
        <main>
          <section className="section1">
            <div className="hero">
              <div className="centered-content">
                <h1>The COS 5​</h1>
                <p>
                  Five iconic pieces. Five design principles. Introducing COS’
                  signature styles of the season.
                </p>
                <img src={ImageHero} alt="hero" width=" 1500" height="1000" />
              </div>
            </div>
          </section>
          <section className="section1-5">
            <p>
              Over 93% of our collection is made from more sustainably sourced
              materials. We're on our way to 100%.
            </p>
          </section>
          <section className="section2">
            <div className="content">
              <p>
                Welcome to Monochrome, where classic meets contemporary in the
                world of men's fashion. At Monochrome, we are dedicated to
                curating a timeless and minimalistic aesthetic inspired by the
                pages of vintage Vogue magazines and the iconic Dior Menswear of
                yesteryears.
                <br />
                <br />
                At Monochrome, we understand that fashion is more than just
                clothing; it's a statement of individuality. Our curated
                collection of monochromatic masterpieces is designed for the
                modern man who appreciates the subtle art of understated
                elegance. From our handpicked turtlenecks that whisper
                sophistication to our long double-breasted coats that e xude
                timeless charm, Monochrome offers a carefully selected range of
                essentials for the discerning gentleman.
              </p>
            </div>
            <div className="image">
              <img src={Image2} alt="Man tying his shoe" />
            </div>
          </section>
          <section className="section3">
            <div className="parent">
              <div className="div1">
                {/* <img src="" /> */}
                <h1>AWC Menswear Collection</h1>
                <p>
                  Introducing Monochrome's latest menswear collection - a
                  testament to our dedication to timeless elegance. Our
                  collection is a symphony of minimalist aesthetics that
                  redefines sophistication for the modern man. Dive into a world
                  of muted colors, clean lines, and enduring style, and discover
                  how Monochrome continues to elevate men's fashion to new
                  heights.
                </p>
              </div>
              <div className="div2">
                {/* <img src="" /> */}
                <h1>ANIME X FASHION</h1>
                <p>
                  Monochrome is thrilled to announce an exciting collaboration
                  that fuses the world of classic menswear with the dynamic
                  universe of anime. Our latest collection features a
                  limited-edition line inspired by iconic anime aesthetics,
                  marrying the timeless charm of our brand with the vivid
                  creativity of these beloved animated worlds.
                </p>
              </div>
              <div className="div3">
                {/* <img src="" /> */}
                <h1>Monochrome </h1>
                <p>
                  Monochrome is on a mission to innovate and re imagine style
                  for the fashion community, blending the timeless with the
                  avant-garde to set new standards in men's fashion.
                </p>
              </div>
              <div className="div4">
                {/* <img src="" /> */}
                <h1>Art Collaborative</h1>
                <p>
                  As part of our commitment to artistic exploration, Monochrome
                  is currently collaborating with local New York artists to
                  infuse our fashion with a touch of authentic city inspiration.
                </p>
              </div>
              <div className="div5">
                {/* <img src="" /> */}
                <h1>Monochrome Inspire</h1>
                <p>
                  At Monochrome, we understand that fashion is more than just
                  clothing; it's a statement of individuality. Our curated
                  collection of monochromatic masterpieces is designed for the
                  modern man who appreciates the subtle art of understated
                  elegance. From our handpicked turtlenecks that whisper
                  sophistication to our long double-breasted coats that exude
                  timeless charm, Monochrome offers a carefully selected range
                  of essentials for the discerning gentleman.
                </p>
              </div>
              <div className="div6">
                {/* <img src="" /> */}
                <h1>THANK YOU</h1>
                <p>
                  We are profoundly grateful for your unwavering belief in our
                  vision and your steadfast support on this incredible journey.
                  Thanks to your dedication, we are thrilled to announce that
                  Monochrome has been named New York's next big fashion brand by
                  none other than Time Magazine. We couldn't have done it
                  without you, and we can't wait to continue shaping the future
                  of fashion together.
                </p>
              </div>
            </div>
          </section>
        </main>
      </>
      <style jsx>{`
        html,
        body {
          width: 100%;
          height: 100%;
          margin: 0;
          padding: 0;
          background-color: #fff;
          font-family: "Courier New", Courier, monospace;
          color: black;
          box-sizing: border-box;
        }

        .pages {
          display: flex;
          align-items: center;
          flex-direction: row;
        }

        ul {
          display: flex;
          list-style-type: none;
          margin: 0;
          padding: 0;
        }

        .nav-item {
          font-size: 20px;
          margin: 0 20px;
        }

        .buttons {
          display: flex;
          align-items: center;
          margin: 0 15px;
        }

        .buttons button {
          margin: 0 10px;
          background-color: black;
          border: 2px solid #fff;
          border-radius: 5px;
          padding: 6px;
          color: #fff;
          font-size: 16px;
        }

        .nav-item a {
          text-decoration: none;
          margin: 20px;
          color: #fff;
          font-size: 20px;
          margin-top: 10px;
        }

        .section1 {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background-color: #f0f0f0;
        }

        .section1-5 {
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 36px;
          color: #333;
          font-weight: 500;
          text-align: center;
        }

        .hero {
          text-align: center;
          position: relative;
        }

        .hero img {
          max-width: 100%;
          height: auto;
        }

        .centered-content {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
          width: 1100px;
        }

        .centered-content h1 {
          font-size: 36px;
          color: black;
          margin-bottom: 16px;
        }

        .centered-content p {
          font-size: 18px;
          color: black;
          margin-bottom: 24px;
        }

        .button {
          display: inline-block;
          padding: 10px 20px;
          background-color: #0078e7;
          color: black;
          border: none;
          border-radius: 5px;
          text-decoration: none;
          font-size: 18px;
          transition: background-color 0.3s;
        }

        .button:hover {
          background-color: #0055b3;
        }

        .section2 {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background-color: #f0f0f0;
          margin-right: auto;
        }

        .section2 .content p {
          font-weight: 700;
        }

        .content,
        .image {
          width: 50%;
        }

        .content {
          text-align: center;
          margin-left: auto;
          margin-top: auto;
          margin-bottom: auto;
          margin-right: auto;
        }

        .content p {
          font-size: 18px;
          color: #333;
          margin-bottom: 16px;
          margin-left: 200px;
        }
        .image {
          margin-right: 10px;
        }
        .image img {
          max-width: 75%;
          height: auto;
        }

        .parent {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-template-rows: repeat(2, 1fr);
          grid-column-gap: 2%;
          grid-row-gap: 4%;
          max-width: 100%;
        }

        .div1 {
          grid-area: 1 / 1 / 2 / 2;
        }

        .div2 {
          grid-area: 1 / 2 / 2 / 3;
        }

        .div3 {
          grid-area: 1 / 3 / 2 / 4;
        }

        .div4 {
          grid-area: 2 / 1 / 3 / 2;
        }

        .div5 {
          grid-area: 2 / 2 / 3 / 3;
        }

        .div6 {
          grid-area: 2 / 3 / 3 / 4;
        }

        .section3 {
          color: #333;
          margin-top: 250px;
          max-width: 100%;
          overflow: scroll;
        }

        .section3 img {
          text-align: center;
          align-items: center;
          margin-left: 90px;
        }

        .section3 p {
          text-align: center;
          align-items: center;
        }

        .section3 h1 {
          text-align: center;
          align-items: center;
        }
      `}</style>
    </div>
  );
}
