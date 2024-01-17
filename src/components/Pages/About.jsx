import React from 'react'
import '/Users/benjibennett/E-commerce Part 2/ecommerce2/src/components/Pages/About.css'
import ImageHero from '/Users/benjibennett/E-commerce Part 2/ecommerce2/src/components/Assets/Images/download.png'
import Image2 from '/Users/benjibennett/E-commerce Part 2/ecommerce2/src/components/Assets/Images/_ (2).jpeg'

export default function About() {
  return (
    <div>
      <>
  <main>
    <section className="section1">
      <div className="hero">
        <div className="centered-content">
          <h1>The COS 5​</h1>
          <p>Five iconic pieces. Five design principles.
            Introducing COS’ signature styles of the season.</p>
        <img src={ImageHero} alt="hero" width = " 1500" height = "1000" />
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
          Welcome to Monochrome, where classic meets contemporary in the world
          of men's fashion. At Monochrome, we are dedicated to curating a
          timeless and minimalistic aesthetic inspired by the pages of vintage
          Vogue magazines and the iconic Dior Menswear of yesteryears.
          <br />
          <br />
          At Monochrome, we understand that fashion is more than just clothing;
          it's a statement of individuality. Our curated collection of
          monochromatic masterpieces is designed for the modern man who
          appreciates the subtle art of understated elegance. From our
          handpicked turtlenecks that whisper sophistication to our long
          double-breasted coats that e xude timeless charm, Monochrome offers a
          carefully selected range of essentials for the discerning gentleman.
        </p>
      </div>
      <div className="image">
        <img
          src={Image2}
          alt="Image"
        />
      </div>
    </section>
    <section className="section3">
      <div className="parent">
        <div className="div1">
          {/* <img src="" /> */}
          <h1>AWC Menswear Collection</h1>
          <p>
            Introducing Monochrome's latest menswear collection - a testament to
            our dedication to timeless elegance. Our collection is a symphony of
            minimalist aesthetics that redefines sophistication for the modern
            man. Dive into a world of muted colors, clean lines, and enduring
            style, and discover how Monochrome continues to elevate men's
            fashion to new heights.
          </p>
        </div>
        <div className="div2">
          {/* <img src="" /> */}
          <h1>ANIME X FASHION</h1>
          <p>
            Monochrome is thrilled to announce an exciting collaboration that
            fuses the world of classic menswear with the dynamic universe of
            anime. Our latest collection features a limited-edition line
            inspired by iconic anime aesthetics, marrying the timeless charm of
            our brand with the vivid creativity of these beloved animated
            worlds.
          </p>
        </div>
        <div className="div3">
          {/* <img src="" /> */}
          <h1>Monochrome </h1>
          <p>
            Monochrome is on a mission to innovate and re imagine style for the
            fashion community, blending the timeless with the avant-garde to set
            new standards in men's fashion.
          </p>
        </div>
        <div className="div4">
          {/* <img src="" /> */}
          <h1>Art Collaborative</h1>
          <p>
            As part of our commitment to artistic exploration, Monochrome is
            currently collaborating with local New York artists to infuse our
            fashion with a touch of authentic city inspiration.
          </p>
        </div>
        <div className="div5">
          {/* <img src="" /> */}
          <h1>Monochrome Inspire</h1>
          <p>
            At Monochrome, we understand that fashion is more than just
            clothing; it's a statement of individuality. Our curated collection
            of monochromatic masterpieces is designed for the modern man who
            appreciates the subtle art of understated elegance. From our
            handpicked turtlenecks that whisper sophistication to our long
            double-breasted coats that exude timeless charm, Monochrome offers a
            carefully selected range of essentials for the discerning gentleman.
          </p>
        </div>
        <div className="div6">
          {/* <img src="" /> */}
          <h1>THANK YOU</h1>
          <p>
            We are profoundly grateful for your unwavering belief in our vision
            and your steadfast support on this incredible journey. Thanks to
            your dedication, we are thrilled to announce that Monochrome has
            been named New York's next big fashion brand by none other than Time
            Magazine. We couldn't have done it without you, and we can't wait to
            continue shaping the future of fashion together.
          </p>
        </div>
      </div>
    </section>
  </main>
</>

    </div>
  )
}
