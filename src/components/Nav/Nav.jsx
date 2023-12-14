import { NavLink } from "react-router-dom"
import React, { useState, useEffect } from "react";
import './Nav.css'

function Nav() {
    
    
    const [navSize, setnavSize] = useState("4rem");
    const [navColor, setnavColor] = useState("transparent");
    const listenScrollEvent = () => {

    window.scrollY > 10 ? setnavColor("#FFF") : setnavColor("transparent");
    window.scrollY > 10 ? setnavSize("4rem") : setnavSize("8rem");
    };
    
    useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
    }, []);

    return (
    
    
    <div>
      <nav style={{
            backgroundColor: navColor,
            height: navSize,
            paddingLeft: "30px",
            paddingRight: "30px",
            paddingTop: "0px",
            paddingBottom: "0px",
            transition: "all 1s",
            opacity: "80%"
        }} >
        <ul >
          <li><NavLink to='/' className="first">About</NavLink></li>
          <li><NavLink to='/' className="second">Portfolio</NavLink></li>
          <li><NavLink to='/' className="third">Contact</NavLink></li>
        </ul>
      </nav>
    </div>

    )
}

export default Nav











//     return (
//         <>
//         <nav>
//             {/* Display the following content within the nav bar. Use NavLink to create a link to a dedicated page */}
//             <ul className = "logo">
//                 <NavLink to='/'>mb.creative</NavLink>
//             </ul>
//             <ul className = "nav">
//                 <NavLink to='/' className="first">About</NavLink>
//                 <NavLink to='/' className="second">Portfolio</NavLink>
//                 <NavLink to='/' className="third">Contact</NavLink>
//             </ul>
//             <ul className = "socials">
//                 <a href="#" className="fa-brands fa-square-facebook" alt="Facebook"></a>
//                 <a href="#" className="fa-brands fa-linkedin" alt="Linkedin"></a>
//             </ul>
//         </nav>
//         </>
//     )
// }