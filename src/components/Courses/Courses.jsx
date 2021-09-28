import React from 'react'
import image from  "../../img/image.jpg"
import "./courses.scss"

export const Courses = () => {

    return (
        <div className="courseContainer">

            <p className="pName">Online Courses and Software</p>
            <div className="courses">
                <div className="course">
                    <img src={image} ></img>
                    <h4>Ethical Hacking - Practical Training</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, dolore.</p>
                </div>
                <div className="course">
                    <img src={image} ></img>
                    <h4>Ethical Hacking - Practical Training</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, dolore.</p>
                </div>
                <div className="course">
                    <img src={image} ></img>
                    <h4>Ethical Hacking - Practical Training</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, dolore.</p>
                </div>
                <div className="course">
                    <img src={image} ></img>
                    <h4>Ethical Hacking - Practical Training</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, dolore.</p>
                </div>
            </div>


        </div>
    )
}