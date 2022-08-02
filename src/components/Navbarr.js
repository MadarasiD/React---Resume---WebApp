import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import "materialize-css/dist/css/materialize.min.css";
import { TbHome } from "react-icons/tb";
import { GiSkills } from 'react-icons/gi';
import { BsPersonBadgeFill } from 'react-icons/bs';
import { FaUserGraduate } from 'react-icons/fa'
import { FaRegAddressCard } from 'react-icons/fa'


const mystyle = {
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center"
  };

const Navbarr = () => {
  return (
    <>
      <nav className="fixed">
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
                    <i style={mystyle}> <TbHome size={30}  style={{paddingRight: '5px'}}/> Home</i>
              </Link>
            </li>
            <li>
            <Link to='/skills'>
                    <i style={mystyle}> <GiSkills size={30} style={{paddingRight: '5px'}}   /> Skills</i>
              </Link>
            </li>
            <li>
            <Link to='/experiences'>
                    <i style={mystyle}> <BsPersonBadgeFill size={30} style={{paddingRight: '5px'}}   /> Experiences</i>
              </Link>
              
            </li>
            <li>
            <Link to='/educations'>
                    <i style={mystyle}> <FaUserGraduate size={30} style={{paddingRight: '5px'}}   /> Educations</i>
              </Link>
              
            </li>
            <li>
            <Link to='/portfolios'>
                    <i style={mystyle}> <FaRegAddressCard size={30} style={{paddingRight: '5px'}}   />Portfolios</i>
              </Link>
              
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
