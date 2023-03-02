import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import Post from "./Post";

const TechPost_Section = (props) => {
  return (
    <>
      <br />

      {/* ///////////////////////////////////////////////// */}
      <div className="Post-section">
        <div className="row mb-2">
          <div className="col Post_Section_Title">
            {" "}
            {props.PostSectiontitle}{" "}
          </div>
          <div className="col d-flex justify-content-end">
            <button className="More_Post" >
              More Post&nbsp;<IoIosArrowForward size={16} />
            </button>
          </div>
        </div>

        <hr className="hr" />

        <div class="flex-container-Post ">
          <Post
            PostCategory="Tech"
            PostTitle="Snapchat launches new AI powered-chatbot from"
            PostDescription="According to a press release, “My AI can recommend birthdaygift"
            AuthorName="Praveen Premasinghe"
          />

          <Post
            PostCategory="Tech"
            PostTitle="Snapchat launches new AI powered-chatbot from"
            PostDescription="According to a press release, “My AI can recommend birthdaygift"
            AuthorName="Praveen Premasinghe"
          />
          <Post
            PostCategory="Tech"
            PostTitle="Snapchat launches new AI powered-chatbot from"
            PostDescription="According to a press release, “My AI can recommend birthdaygift"
            AuthorName="Praveen Premasinghe"
          />
          <Post
            PostCategory="Tech"
            PostTitle="Snapchat launches new AI powered-chatbot from"
            PostDescription="According to a press release, “My AI can recommend birthdaygift"
            AuthorName="Praveen Premasinghe"
          />
        </div>
      </div>
      {/* ///////////////////////////////////////////////// */}
    </>
  );
};

export default TechPost_Section;
