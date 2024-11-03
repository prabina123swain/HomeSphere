import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook , FaInstagramSquare ,FaYoutube ,FaTwitter, FaLinkedin  } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4 w-10/12 flex flex-col gap-10">
        {/* Footer Links */}
        <div className="footer-link-box grid grid-cols-1 md:grid-cols-4 gap-8">
          <ul className="footer-list">
            <li>
              <p className="footer-list-title font-bold">Company</p>
            </li>
            <li>
              <a href="#" className="footer-link text-gray-400 hover:text-white">About</a>
            </li>
            <li>
              <a href="#" className="footer-link text-gray-400 hover:text-white">Blog</a>
            </li>
            <li>
              <a href="#" className="footer-link text-gray-400 hover:text-white">All Products</a>
            </li>
            <li>
              <a href="#" className="footer-link text-gray-400 hover:text-white">Locations Map</a>
            </li>
            <li>
              <a href="#" className="footer-link text-gray-400 hover:text-white">FAQ</a>
            </li>
            <li>
              <a href="#" className="footer-link text-gray-400 hover:text-white">Contact us</a>
            </li>
          </ul>

          <ul className="footer-list">
            <li>
              <p className="footer-list-title font-bold">Services</p>
            </li>
            <li>
              <a href="#" className="footer-link text-gray-400 hover:text-white">Order tracking</a>
            </li>
            <li>
              <a href="#" className="footer-link text-gray-400 hover:text-white">Wish List</a>
            </li>
            <li>
              <a href="#" className="footer-link text-gray-400 hover:text-white">Login</a>
            </li>
            <li>
              <a href="#" className="footer-link text-gray-400 hover:text-white">My account</a>
            </li>
            <li>
              <a href="#" className="footer-link text-gray-400 hover:text-white">Terms & Conditions</a>
            </li>
            <li>
              <a href="#" className="footer-link text-gray-400 hover:text-white">Promotional Offers</a>
            </li>
          </ul>

          <ul className="footer-list">
            <li>
              <p className="footer-list-title font-bold">Customer Care</p>
            </li>
            <li>
              <a href="#" className="footer-link text-gray-400 hover:text-white">Login</a>
            </li>
            <li>
              <a href="#" className="footer-link text-gray-400 hover:text-white">My account</a>
            </li>
            <li>
              <a href="#" className="footer-link text-gray-400 hover:text-white">Wish List</a>
            </li>
            <li>
              <a href="#" className="footer-link text-gray-400 hover:text-white">Order tracking</a>
            </li>
            <li>
              <a href="#" className="footer-link text-gray-400 hover:text-white">FAQ</a>
            </li>
            <li>
              <a href="#" className="footer-link text-gray-400 hover:text-white">Contact us</a>
            </li>
          </ul>

          <ul className="footer-list">
            <li>
              <p className="footer-list-title font-bold">Resources</p>
            </li>
            <li>
              <a href="#" className="footer-link text-gray-400 hover:text-white">Privacy Policy</a>
            </li>
            <li>
              <a href="#" className="footer-link text-gray-400 hover:text-white">Terms of Service</a>
            </li>
            <li>
              <a href="#" className="footer-link text-gray-400 hover:text-white">Help Center</a>
            </li>
            <li>
              <a href="#" className="footer-link text-gray-400 hover:text-white">Community Guidelines</a>
            </li>
            <li>
              <a href="#" className="footer-link text-gray-400 hover:text-white">Cookie Policy</a>
            </li>
          </ul>
        </div>

    {/* Footer Content */}
      <div className="w-10/12 footer-brand mb-3 flex items-center justify-between">

        <div>
            <Link to='/'>
            <h2 className='font-bold text-lg sm:text-xl flex items-center'>
                <span className='text-white'>Home</span>
                <span className='text-slate-400'>Sphere</span>
            </h2>
            </Link>

            {/* <p className="text-gray-400 max-w-xs mb-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            </p> */}

           <ul className=" text-sm  space-y-1">
            <li>
              <a href="#" className="opacity-70 flex items-center">
                <ion-icon name="location-outline" className="mr-2"></ion-icon>
                <address>NITK Surathkal , Karnataka , India</address>
              </a>
            </li>
            <li>
              <a href="tel:+0123456789" className="opacity-70 flex items-center">
                <ion-icon name="call-outline" className="mr-2"></ion-icon>
                <span>+91 12345 67890</span>
              </a>
            </li>
            <li>
              <a href="mailto:contact@homesphere.com" className="opacity-70 flex items-center">
                <ion-icon name="mail-outline" className="mr-2"></ion-icon>
                <span>contact@homesphere.com</span>
              </a>
            </li>
          </ul>

        </div>

        <div>
           <h2 className="text-lg font-bold mb-2">Connect With Us</h2>
            <ul className="social-list flex items-center space-x-4 mt-4">
            <li>
              <a href="#" className="social-link">
                <FaFacebook   name="logo-facebook" style={{ width: '20px', height: '20px' }} />
              </a>
            </li>
            <li>
              <a href="#" className="social-link">
                <FaTwitter   name="logo-twitter" style={{ width: '20px', height: '20px' }} />
              </a>
            </li>
            <li>
              <a href="#" className="social-link">
                <FaLinkedin    name="logo-linkedin" style={{ width: '20px', height: '20px' }} />
              </a>
            </li>
            <li>
              <a href="#" className="social-link">
                <FaYoutube   name="logo-youtube" style={{ width: '20px', height: '20px' }} />
              </a>
            </li>
            <li>
              <a href="#" className="social-link">
                <FaInstagramSquare    name="logo-Instagram" style={{ width: '20px', height: '20px' }} />
              </a>
            </li>
          </ul>
        </div>


         
        </div>
        
        {/* Footer Bottom */}
        {/* <div className="footer-bottom py-4 ">
          <p className="text-center text-gray-400">
            &copy; 2022 <a href="#" className="text-white">codewithsadee</a>. All Rights Reserved
          </p>
        </div> */}
      </div>

      
    </footer>
  );
};

export default Footer;
