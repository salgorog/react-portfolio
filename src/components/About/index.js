import React from 'react'
import ProfilePic from '../../assets/img/portrait.jpg'

function About() {
    return(
        <>
        
        <img src={ProfilePic} alt="Roger Saldivar" className="profilePic"/>
        <p className="container">
        My name is Roger Saldivar and I'm an aspiring Web Development Engineer. I live in Lehi, UT and I'm studying Web Development at the University of Utah's Coding Bootcamp.
        I am skilled in the following: HTML, CSS, JavaScript, BootStrap, NodeJs, ExpressJs, MySQL, Sequelize, HandlebarsJs, MongoDB, and ReactJs
        </p>
        </>
    )

}
export default About;