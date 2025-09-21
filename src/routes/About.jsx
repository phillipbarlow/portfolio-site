import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import profile from "../images/profile-image.webp";
import me from "../images/Phil.webp";

export default function About() {
  return (
    <>
      <Header bg="#f7f8f9"/>
      <div className="aboutPage">
        <section className="about-main">
          <div className="img-container">
            <img src={me} alt="me with North coders logo in the background " />
          </div>
          <div className="aboutTxt-wrapper">
            <div className="aboutme-prof">
              <h2 className="about-title">A little bit about me.</h2>
              <p>
                I’m an enthusiastic, self-taught software developer and a recent
                graduate of the 12-week Northcoders bootcamp (April 2024).
              </p>
              <p>
                My coding journey began in March 2020 during the Covid pandemic,
                while working as a bench hand joiner building bespoke furniture
                and bars for restaurants and nightclubs from technical scaled
                drawings. That experience taught me precision, problem-solving,
                and working to detailed specifications — skills I now bring into
                software development.
              </p>
              <p>
                More recently, I’ve also set up my own home server using an HP
                EliteDesk Mini, running Linux as the operating system. I’ve used
                it to explore Docker containers and simple file hosting, which
                has given me practical experience with how applications are
                deployed and managed in real environments. This project has been
                a great way to expand my knowledge outside of pure coding and
                strengthen my problem-solving skills.
              </p>
              <p>
                Highly motivated and detail-oriented, I’m eager to continue
                learning and contribute to a collaborative development team. I’m
                available immediately and actively seeking entry-level
                opportunities in software development.
              </p>
            </div>

            <div className="aboutme-pers">
              <h2 className="about-title">
                A little bit about me when I’m not at the computer.
              </h2>
              <p>
                Away from the screen, I spend most of my time with my wife, our
                two children, and our cockapoo, Nelly. We enjoy getting outdoors
                for family walks and time in the garden.
              </p>
              <p>
                At home, my daughter often helps me bake cookies, bread, and
                cakes, while my son is happiest taste-testing the results. We
                also grow our own vegetables, teaching the children where food
                comes from and enjoying the process together. I enjoy cooking
                for the family too and like to try out new recipes.
              </p>
              <p>
                We also enjoy holidays, from city breaks with my wife to relaxed
                family beach trips. Travel gives us the chance to spend time
                together and experience new places.
              </p>
            </div>
          </div>
        </section>
      <Footer bg="#f7f8f9">
        <Link className="mailme-link" to="mailto:phillipbarlow10@gmail.com">
          Lets chat, click here!
        </Link>
      </Footer>
      </div>
    </>
  );
}
