import React from "react";
import $ from "jquery";


const NewUpdate = () => {

    
  return (
    <>
      <div>
      <div className="mt-5">
    <div className="row">
        <div className="col-md-12">
            <div className="d-flex justify-content-between align-items-center breaking-news">
                <div className="d-flex flex-row flex-grow-1 flex-fill justify-content-center  py-2  px-1 news"><span className="d-flex align-items-center">&nbsp;Updates</span></div>
                <marquee className="news-scroll" behavior="scroll" direction="left" onMouseOver="this.stop();" onMouseOut="this.start();"> <a href="#">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </a> <span className="dot"></span> <a href="#">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut </a> <span className="dot"></span> <a href="#">Duis aute irure dolor in reprehenderit in voluptate velit esse </a>
                </marquee>
            </div>
        </div>
    </div>
</div>

      
      </div>
    </>
  );
};

export default NewUpdate;
