import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import "materialize-css/dist/css/materialize.min.css";
import { TbHome } from "react-icons/tb";
import { GiSkills } from 'react-icons/gi'

const mystyle = {
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center"
  };

const Navbarr = () => {
  return (
    <>
      <nav>
        <div class="nav-wrapper teal darken-1">
                <Link to='/' class="brand-logo">
                    <i style={{paddingLeft: '15px'}}> Madarasi Dániel</i>
              </Link>
          
          <a href="#" data-target="mobile-demo" class="sidenav-trigger">
            <i class="material-icons">menu</i>
          </a>
          <ul class="right hide-on-med-and-down">
            <li>
              <Link to='/'>
                    <i style={mystyle}> <TbHome size="medium"  style={{paddingRight: '5px'}}/> Home</i>
              </Link>
            </li>
            <li>
            <Link to='/skills'>
                    <i style={mystyle}> <GiSkills  /> Skills</i>
              </Link>
            </li>
            <li>
              <a href="/experiences">Experiences</a>
            </li>
            <li>
              <a href="/educations">Educations</a>
            </li>
            <li>
              <a href="/portfolios">Portfolios</a>
            </li>
          </ul>
        </div>
      </nav>

      <ul class="sidenav" id="mobile-demo">
        <li>
          <a href="sass.html">Sass</a>
        </li>
        <li>
          <a href="badges.html">Components</a>
        </li>
        <li>
          <a href="collapsible.html">Javascript</a>
        </li>
        <li>
          <a href="mobile.html">Mobile</a>
        </li>
      </ul>
    </>
  );
};

export default Navbarr;
