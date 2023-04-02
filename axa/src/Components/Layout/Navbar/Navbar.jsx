import React, { useState, useEffect } from "react";
import { BsFillEnvelopeFill } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
import { BsList } from 'react-icons/bs';
import { AiFillPhone } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiFillYoutube } from 'react-icons/ai';
import { AiOutlineMore } from 'react-icons/ai';
import MobileMenu from "./Mobilemenu";

const Navbar = () => {
  const [enableMobileMenu, setEnableMenu] = useState(false);
  const [navbar, setnavbar] = useState("navbars");
  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavbar("navbarscrool") : setnavbar("navbars");
   
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);
  return (
    <header>
      <nav className={navbar}>
        <div className="container-fluid py-2">
          <div className="row align-items-center">
            <div className="col-3">
              <div className="logo">
                <img id="white-img" src="	http://axa.gov.az/uploads/images/settings/logo-w-1662659894.svg" alt="" />
                <img id="black-img" src="http://axa.gov.az/uploads/images/settings/logo-b-1662660006.svg" alt="" />
              </div>
            </div>
            <div className="col-9">
              <ul className='list'>
                <li>info@axa.gov.az <BsFillEnvelopeFill/> </li>
                <li>088-588 <AiFillPhone/> </li>
                <li><BsFacebook/> </li>
                <li><AiOutlineInstagram/> </li>
                <li><AiFillYoutube/> </li>
                <li><BsList/> </li>
                <li id="mobile_list"><AiOutlineMore onClick={() => setEnableMenu(!enableMobileMenu)} />
                
                  <div className="mobile-menu-area">
                    {enableMobileMenu && <MobileMenu />}
                  </div> </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar