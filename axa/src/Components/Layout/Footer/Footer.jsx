import React from 'react'
import { BsFillEnvelopeFill } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
import { BsList } from 'react-icons/bs';
import { AiFillPhone } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiFillYoutube } from 'react-icons/ai';
import { AiOutlineMore } from 'react-icons/ai';
const Footer = () => {
  return (
   <footer>
    <div className="container-fluid py-3">
      <div className="row align-items-center">
      <div class="col-6 col-md-6 footer_left p-0 d-flex align-items-center justify-content-around">
                <a href="http://axa.gov.az/az" class="text-decoration-none">
                    <img src="http://axa.gov.az/uploads/images/settings/logo-w-1662659894.svg" height="50px" class=" d-md-block"/>
                </a>
                <span>© Bütün hüquqlar qorunur - 2023</span>
            </div>
      <div class="col-6 col-md-6 footer_right p-0 ">
      <ul className='list'>
                <li>info@axa.gov.az <BsFillEnvelopeFill/> </li>
                <li>088-588 <AiFillPhone/> </li>
                <li><BsFacebook/> </li>
                <li><AiOutlineInstagram/> </li>
                <li><AiFillYoutube/> </li>
              
                 
               
              </ul>
            </div>
      </div>
    </div>
   </footer>
  )
}

export default Footer