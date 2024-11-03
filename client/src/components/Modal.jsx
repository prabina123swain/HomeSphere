import React from 'react';
import { FaTimes } from 'react-icons/fa';

export default function Modal({ onClose, children }) {
  return (
    <div className=" fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="relative bg-white p-4 rounded-lg shadow-lg max-w-full max-h-full overflow-auto">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-black bg-gray-200 rounded-full p-2 hover:bg-gray-300"
        >
          <FaTimes />
        </button>
        
        {/* Modal content */}
        <div className="flex justify-center items-center m-5">
          {children}
        </div>
      </div>
    </div>
  );
}
