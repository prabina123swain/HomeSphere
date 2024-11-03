import React from 'react';

const ServiceCard = ({ title, description, image, linkText }) => {
  return (
    <div className="relative bg-white text-center p-10 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
      <div className="w-full mx-auto mb-5 rounded-full">
        <img src={image} alt={`${title} icon`} className="w-full" />
      </div>
      <h3 className="text-xl font-semibold mb-4">
        <a href="#" className="hover:text-orange-500 transition-colors duration-300">
          {title}
        </a>
      </h3>
      <p className="text-gray-500 text-base leading-relaxed mb-6">
        {description}
      </p>
      <a href="#" className="flex justify-center items-center text-teal-600 font-semibold text-base hover:text-orange-500 gap-1 transition-colors duration-300">
        <span>{linkText}</span>
        <ion-icon name="arrow-forward-outline"></ion-icon>
      </a>
      <div className="absolute bottom-0 left-0 w-0 h-1 bg-orange-500 transition-all duration-300 hover:w-full"></div>
    </div>
  );
};

export default ServiceCard;
