import React from "react";
import "../styles/home.css";
import profile from "../assets/profile.jpg";

function Home() {
  return (
    <section id="home" className="home">
      <div className="home-content">
        <img src={profile} alt="Profile" className="profile-img" />

        <h1>Hi, I'm METHUN SM👋</h1>
      </div>
    </section>
  );
}

export default Home;