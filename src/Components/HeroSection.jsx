import React from "react";
import background from "./../Assets/Images/google-logo-blurred-background.jpg";




const HeroSection = () => {

    
  return (
    <>
    <div className="row ">
        <div className="col-sm-8 left-side-box">
        <article className="article">
      <img className="picture" src={background} alt="background" />
      <div className="Hero-Post">
      <div className="Hero-Post-Title">Google is bringing several new updates to Android and WearOS</div>
        <div className="Hero-Post-description">Google is bringing several new updates to Android and WearOS</div>
      </div>
    </article>
        </div>
        <div className="col-sm-4 right-side-box">
            <div className="row">
            <article className="article">
      <img className="picture" src={background} alt="background" />
      <div className="Hero-Post">
      <div className="Hero-Post-Title">Google is bringing several new updates to Android and WearOS</div>
        <div className="Hero-Post-description">Google is bringing several new updates to Android and WearOS</div>
      </div>
    </article>
            </div>
            <div className="row">
            <article className="article">
      <img className="picture" src={background} alt="background" />
      <div className="Hero-Post">
      <div className="Hero-Post-Title">Google is bringing several new updates to Android and WearOS</div>
        <div className="Hero-Post-description">Google is bringing several new updates to Android and WearOS</div>
      </div>
    </article>
            </div>
        </div>
    </div>
    </>
  );
};

export default HeroSection;
