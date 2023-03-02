import React from "react";
import { Container, Row, Col, Card, CardGroup } from "react-bootstrap";
import background from "./../Assets/Images/google-logo-blurred-background.jpg";
import { IoIosArrowForward } from "react-icons/io";

const Post = (props) => {
  return (
    <>
      
       

  


          <div class="flex-items-post">
            <Card className="Post-Card">
              <a href="">
                <Card.Img className="Post-Img" variant="top" src={background} />
              </a>
              <Card.Body>
                <div className="Post-Tag">
                  <small>
                    <b>
                       
                      <a href=""> {props.PostCategory} </a>
                    </b>
                  </small> 
                  <span>&#x7C; 1 day ago</span>
                </div>
                <div className="Post-Title">
                  <a href="/#">{props.PostTitle}</a>
                </div>
                <div className="Post-Description">
                {props.PostDescription} 
                </div>

                <div className="Author">
                  <small>
                     
                    <b>By</b> 
                  </small> 
                  <span>
                     
                    <a href="/"> {props.AuthorName}</a>
                  </span>
                </div>
              </Card.Body>
            </Card>
          </div>



        

        
        
      
    </>
  );
};

export default Post;
