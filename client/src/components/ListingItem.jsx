import { Link } from 'react-router-dom';
import { MdLocationOn   , MdBed, MdOutlineSquareFoot, MdOutlineBathroom, MdOutlineFavorite, MdAddCircleOutline, MdMessage  } from 'react-icons/md';
import {IoMdContact , IoMdMail } from 'react-icons/io';
import { FaRupeeSign } from 'react-icons/fa';
import { useState } from 'react';
import Modal from './Modal';
import ContactOwner from './ContactOwner';
import { compareSync } from 'bcryptjs';

export default function ListingItem({ listing }) {
   
  const [showModal , setShowModal ] = useState(false);
 // console.log("listing",listing);
  return (
    <div className='bg-white m-1 p-1 shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden rounded-lg w-full sm:w-[320px]'>
      <div className="property-card bg-white shadow-md hover:shadow-lg transition-shadow rounded-lg overflow-hidden">
        <figure className="card-banner relative h-[250px] overflow-hidden">
          <Link to={`/listing/${listing._id}`}>
            <img
              src={
                listing.imageUrls[0] ||
                'https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/Sales_Blog/real-estate-business-compressor.jpg?width=595&height=400&name=real-estate-business-compressor.jpg'
              }
              alt={listing.name}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
            <div className="absolute top-2 left-2 bg-white bg-opacity-80 rounded-md flex items-center px-2 py-1 shadow-md">
              <MdLocationOn className="text-green-700 font-semibold mr-1" />
              <span className="text-sm font-bold text-gray-700">
                {listing.city}, {listing.pincode}
              </span>
            </div>
            <div className={`card-badge absolute top-2 right-2 px-2 py-1 text-xs text-white ${listing.type === 'rent' ? 'bg-green-600' : 'bg-blue-600'}`}>
              {listing.type === 'rent' ? 'For Rent' : 'For Sale'}
            </div>
          </Link>
        </figure>

        <div className="hover:cursor-pointer pl-4 pt-2 flex flex-col justify-between">
          <div>
            <div className="card-price flex items-center gap-1 text-orange-600  text-lg font-semibold ">
            <FaRupeeSign /> 
              <strong > {listing.offer ? listing.discountPrice.toLocaleString('en-US') : listing.regularPrice.toLocaleString('en-US')}</strong>
              {listing.type === 'rent' && '/Month'}
            </div>

            <h3 className="h3 card-title mt-2 text-lg font-bold text-gray-800 truncate">
              <Link to={`/listing/${listing._id}`}>{listing.name}</Link>
            </h3>

            <p className="text-gray-500 leading-relaxed mt-1 text-sm line-clamp-2 mb-1">
              {listing.description.length > 100
                ? `${listing.description.slice(0, 100)}...`
                : listing.description}
            </p>
          </div>
          
          <ul className="card-list flex mt-4 justify-around items-center text-gray-600 text-sm">
            <li className="flex flex-col items-center">
              <span className="flex gap-2 items-center justify-start">
                <strong>{listing.bedrooms}</strong>
                <MdBed className="text-lg text-green-700 font-semibold mr-1" />
              </span>
              <span>Bedroom{listing.bedrooms > 1 ? 's' : ''}</span>
            </li>
            <div className="h-10 w-px bg-slate-600"></div>
            <li className="flex flex-col items-center">
              <span className="flex gap-2 items-center justify-center">
                <strong>{listing.bathrooms}</strong>
                <MdOutlineBathroom className="text-lg text-green-700 font-semibold mr-1" />
              </span>
              <span>Bathroom{listing.bathrooms > 1 ? 's' : ''}</span>
            </li>
            <div className="h-12 flex flex-col items-center w-px bg-slate-600"></div>
            <li className="flex flex-col items-center">
              <span className="flex gap-2">
                <strong>{listing.area}</strong>
                <MdOutlineSquareFoot className="text-lg text-green-700 font-semibold mr-1" />
              </span>
              <span>Sq Ft</span>
            </li>
          </ul>
        </div>

        <div className="card-footer flex justify-between items-center p-3 border-t">
          <div className="card-author flex items-center">

            <div className=" text-xs">
              <p className="author-name font-semibold flex items-center gap-2">
                <IoMdContact  className="text-lg text-green-700 mr-1" />
                <Link to="#">{listing.ownerName}</Link>
              </p>
              <p className="author-title text-gray-500 flex items-center gap-2">
              <IoMdMail className="text-lg text-green-700 mr-1" />
                 {listing.ownerEmail}
              </p>
            </div>
          </div>

          <div className="card-footer-actions flex items-baseline space-x-3 text-gray-500">
            <button className="card-footer-actions-btn" >
              <MdMessage  className="text-lg text-teal-500" onClick={() => setShowModal(true)} />
            </button>
            <button className="card-footer-actions-btn">
              <MdOutlineFavorite className="text-lg text-teal-500" />
            </button>
           
          </div>
        </div>
      </div>
          
      {showModal && (
            <Modal onClose={() => setShowModal(false)} >
               <ContactOwner listing = {listing} className="" />
            </Modal>
      )}

    </div>
  );
}
