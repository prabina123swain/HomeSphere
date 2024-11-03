import React from 'react';
import toast from 'react-hot-toast';

const ContactUs = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Message received! We will contact you soon.");
    e.target.reset();
  };

  return (
    <div className="container mx-auto p-8 text-center">
      <h1 className="text-4xl font-bold mb-8 text-blue-800">Contact Us</h1>

      <div className="max-w-md mx-auto">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              className="mt-1 p-2 w-full border-b border-dotted border-gray-400 focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className="mt-1 p-2 w-full border-b border-dotted border-gray-400 focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Subject"
              className="mt-1 p-2 w-full border-b border-dotted border-gray-400 focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-6">
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Message"
              className="mt-1 p-2 w-full border-b border-dotted border-gray-400 focus:outline-none focus:border-blue-500"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700 focus:outline-none"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
