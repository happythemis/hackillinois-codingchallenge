import React from 'react'
import { useState, useEffect } from "react";
import axios from 'axios'

// https://stackoverflow.com/questions/14436800/two-divs-next-to-each-other-that-then-stack-with-responsive-change
//https://stackoverflow.com/questions/34607841/react-router-nav-bar-example
function Mentor() {
    const [mentor, setMentor] = useState(null);
    const apiUrl = "https://api.hackillinois.org/upload/blobstore/mentors/";

    useEffect(() => {
        axios.get(apiUrl)
            .then(response => {
                setMentor(response.data)
            })
    
    }, [apiUrl]);

   
    
  if (mentor) {
    const content = mentor.data.map((post) =>
        <div className='container'>
            <div id='mentor-image-box'>
                <img className = 'mentor-photo' src = {post.profile} /> 
            </div>
            <div id = 'mentor-context-box'>
                <h3>{post.firstName} {post.lastName}</h3>
                <p>{post.description}</p> 
            </div>
        </div>
    );

   
    return (
        <div className = 'MentorMain'>
          <div className='title-mentor'>Mentors</div>
          <div className='scroll-content'>
              {content}
          </div>
        </div>
        
        
    )
  }
  return (
    <div className='App'>
      <h1> Wait ....</h1>
    </div>
  );
}
export default Mentor;