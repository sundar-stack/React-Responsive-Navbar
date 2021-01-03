import React, { useState,useEffect } from 'react';
import './navbar.css';
import {GiMoebiusStar} from 'react-icons/gi';
import {FaTimes} from 'react-icons/fa';
import {RiMenu5Fill} from 'react-icons/ri';
import { MenuItems } from './navbarData';
import { Link } from 'react-router-dom';


const Navbar = () => {
    const [clicked,setClicked] = useState(false);
    const [scroll,setScroll]=useState()

    useEffect(() =>{
       window.addEventListener('scroll',()=>{
           window.scrollY > 100 ? setScroll(true) : setScroll(false)
       })
    })

    return (
        <div className={`navbar ${scroll && "navbar_black"}`}>
           <Link className="navbar_left">
           <h1 className={`navbar_logo ${scroll && 'navbar_logo_green'}`}>Cosmos</h1>
            <GiMoebiusStar className="navbar_icon"/>
           </Link>
              
              <div className="menu_bars">
                  {
                      clicked ? ( 
                        <FaTimes  className="bar_icon" onClick={()=>setClicked(false)}/> 
                           ):(
                        <RiMenu5Fill className="bar_icon" onClick={()=>setClicked(true)}/>
                          )
                  }
              </div>

           <div className={clicked ? "menu_items menu_items_active" : "menu_items"}>
               <ul className="menu_items_ul">
              {
                   MenuItems.map((item,index)=>(
                       <Link to={item.path} key={index} className={item.className}><li className="menu_items_li"  >{item.title}</li></Link>
                       ))
               }
              </ul>

              <div className="navbar_right_active">
                  <button className="navbar_button_active">Sign In</button>
              </div>

           </div> 

             <div className="navbar_right">
                  <button className="navbar_button">Sign In</button>
              </div>

        </div>
    )
}

export default Navbar;
