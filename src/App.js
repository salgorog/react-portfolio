import React, { useState } from 'react';
import "./assets/style.css";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
    const [navItems] = useState([
        { name: "About Me" },
        { name: "My Work" },
        { name: "Resume" },
        { name: "Contact Me" },
    ]);
    const [currentNavItem, setCurrentNavItem] = useState(navItems[0]);

    const [projects] = useState([
        { id: 1, title: 'Put a Ring on It', url: "https://github.com/salgorog/put-a-ring-on-it", deployed: "https://put-a-ring-on-it.herokuapp.com" },
        { id: 2, title: 'Recipe Finder', url: "https://github.com/salgorog/recipe-finder", deployed: "https://salgorog.github.io/recipe-finder/" },
        { id: 3, title: 'Note Taker',  url: "https://github.com/salgorog/note-taker", deployed: "https://lit-spire-87115.herokuapp.com/" },
        { id: 4, title: 'Pro Scheduler',  url: "https://github.com/salgorog/PRO-scheduler", deployed: "https://salgorog.github.io/PRO-scheduler/" },
        { id: 5, title: 'PWA Budget Tracker',  url: "https://github.com/salgorog/budget-tracker", deployed: "https://budget-tracker1432.herokuapp.com/" },
        { id: 6, title: 'Zoo Keeper',  url: "https://github.com/salgorog/zookeepr", deployed: "https://secure-savannah-64551.herokuapp.com/" },

    ])

    const loadSection = () => {
        switch (currentNavItem) {
            case "My Work":
                return <Projects projects={projects} />
            case "Resume":
                return <Resume />
            case "Contact Me":
                return <Contact />
            default:
                return <About />

        }
    };
    return (
        <>
            <div>
                <Header
                    navItems={navItems}
                    setCurrentNavItem={setCurrentNavItem}
                    currentNavItem={currentNavItem}
                />
                {loadSection(currentNavItem)}
                <Footer />
            </div>
        </>
    )
}

export default App;
