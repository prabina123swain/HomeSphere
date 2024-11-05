import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { useSelector } from 'react-redux';
import { Navigation } from 'swiper/modules';
import 'swiper/css/bundle';
import {
  FaBath,
  FaBed,
  FaChair,
  FaMapMarkerAlt,
  FaParking,
  FaShare,
} from 'react-icons/fa';
import ImageSlider from '../components/ImageSlider';
import Modal from '../components/Modal';
import FeatureCard from '../components/FeatureCard';
import ContactOwner from '../components/ContactOwner';

export default function Listing() {
  SwiperCore.use([Navigation]);
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [copied, setCopied] = useState(false);
  const [contact, setContact] = useState(false);
  const [message, setMessage] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const params = useParams();
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchListing = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/listing/get/${params.listingId}`);
        const data = await res.json();
        if (data.success === false) {
          setError(true);
          setLoading(false);
          return;
        }
        setListing(data);
        setLoading(false);
        setError(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchListing();
  }, [params.listingId]);

  const handleImageClick = (url) => {
    setSelectedImage(url);
    setShowModal(true);
  };

  return (
    <main>
      {loading && <p className='text-center my-7 text-2xl'>Loading...</p>}
      {error && (
        <p className='text-center my-7 text-2xl'>Something went wrong!</p>
      )}
      {listing && !loading && !error && (
        <div>
          <div className='w-full h-[400px]'>
            <ImageSlider slides={listing.imageUrls} />
          </div>
          <div className='fixed top-[13%] right-[3%] z-10 border rounded-full w-12 h-12 flex justify-center items-center bg-slate-100 cursor-pointer'>
            <FaShare
              className='text-slate-500'
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                setCopied(true);
                setTimeout(() => {
                  setCopied(false);
                }, 2000);
              }}
            />
          </div>
          {copied && (
            <p className='fixed top-[23%] right-[5%] z-10 rounded-md bg-slate-100 p-2'>
              Link copied!
            </p>
          )}
          <div className='flex flex-col max-w-4xl mx-auto p-3 my-7 gap-4'>
            <p className='text-2xl font-semibold'>
              {listing.name} - ₹{' '}
              {listing.offer
                ? listing.discountPrice.toLocaleString('en-IN')
                : listing.regularPrice.toLocaleString('en-IN')}
              {listing.type === 'rent' && ' / month'}
            </p>
            <p className='flex items-center mt-6 gap-2 text-slate-600 text-sm'>
              <FaMapMarkerAlt className='text-green-700' />
              {listing.address}
            </p>
            <p className='text-slate-800'>
              <span className='font-semibold text-black'>Owner: </span>
              {listing.ownerName} ({listing.ownerEmail})
            </p>
            <div className='flex gap-4'>
              <p className='bg-red-900 w-full max-w-[200px] text-white text-center p-1 rounded-md'>
                {listing.type === 'rent' ? 'For Rent' : 'For Sale'}
              </p>
              {listing.offer && (
                <p className='bg-green-900 w-full max-w-[200px] text-white text-center p-1 rounded-md'>
                  ₹{(+listing.regularPrice - +listing.discountPrice).toLocaleString('en-IN')} OFF
                </p>
              )}
            </div>
            <p className='text-slate-800'>
              <span className='font-semibold text-black'>Description - </span>
              {listing.description}
            </p>
            <p className='text-slate-800'>
              <span className='font-semibold text-black'>Area - </span>
              {listing.area} sq ft
            </p>

            <section className="p-8 bg-gray-100">
              <div className="container mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6">
                <FeatureCard
                  icon={FaBed}
                  text={listing.bedrooms > 1 ? `${listing.bedrooms} beds` : `${listing.bedrooms} bed`}
                />
                <FeatureCard
                  icon={FaBath}
                  text={listing.bathrooms > 1 ? `${listing.bathrooms} baths` : `${listing.bathrooms} bath`}
                />
                <FeatureCard
                  icon={FaParking}
                  text={listing.parking ? 'Parking spot' : 'No Parking'}
                />
                <FeatureCard
                  icon={FaChair}
                  text={listing.furnished ? 'Furnished' : 'Unfurnished'}
                />
              </div>
            </section>

            <button
              onClick={() => {
                if (!currentUser) {
                  navigate('/sign-in'); // Redirect to /signin if not signed in
                } else {
                  setContact(true); // Set contact to true if signed in
                }
              }}
              className='bg-slate-700 text-white rounded-lg uppercase hover:opacity-95 p-3'
            >
              {!currentUser ? "Sign in to contact landlord" : "Contact landlord"}
            </button>

            {contact && (
              <div className='mt-5'>
                <ContactOwner listing={listing} />
              </div>
            )}
          </div>
          <div className='my-8 mx-8 p-20'>
            <h2 className='text-2xl font-semibold text-center mb-4'>Gallery</h2>
            <div className='grid grid-cols-3 gap-4'>
              {listing.imageUrls.map((url) => (
                <div
                  key={url}
                  className='cursor-pointer'
                  onClick={() => handleImageClick(url)}
                >
                  <img
                    src={url}
                    alt='Listing'
                    className='w-full h-48 object-cover rounded-md shadow-md'
                  />
                </div>
              ))}
            </div>
          </div>
          {showModal && (
            <Modal onClose={() => setShowModal(false)}>
              <img src={selectedImage} alt="Full view" className="w-[800px] h-auto rounded-lg" />
            </Modal>
          )}
        </div>
      )}
    </main>
  );
}
