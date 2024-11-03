import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Navigation } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css/bundle';
import ListingItem from '../components/ListingItem';
import imageHome from '../../assets/Home1.png'; 
import BuyHome from '../../assets/BuyHome.jpeg'; 
import RentHome from '../../assets/RentHome.jpg'; 
import SellHome from '../../assets/SellHome.jpeg'; 
import ServiceCard from '../components/ServiceCard';
import ImageSlider from '../components/ImageSlider';
import slides from "../utils/slides"; 
import Footer from '../components/Footer';


export default function Home() {
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);
  SwiperCore.use([Navigation]);
  console.log(offerListings);
  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        const res = await fetch('/api/listing/get?offer=true&limit=4');
        const data = await res.json();
        setOfferListings(data);
        fetchRentListings();
      } catch (error) {
        console.log(error);
      }
    };
    const fetchRentListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=rent&limit=4');
        const data = await res.json();
        setRentListings(data);
        fetchSaleListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchSaleListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=sale&limit=4');
        const data = await res.json();
        setSaleListings(data);
      } catch (error) {
        log(error);
      }
    };
    fetchOfferListings();
  }, []);
  
  return (
    <div className='w-full flex flex-col  gap-8'>
      {/* top */}
      <div className='flex p-28 mx-auto'>
        <div className='flex flex-col gap-6 px-3 max-w-6xl'>
            <h1 className='text-slate-700 font-bold text-xl lg:text-6xl'>
              Find your next <span className='text-slate-500'>perfect</span>
              <br />
              place with ease
            </h1>
            <div className='text-gray-400 text-xs sm:text-sm'>
              Sahand Estate is the best place to find your next perfect place to
              live.
              <br />
              We have a wide range of properties for you to choose from.
            </div>
            <Link
              to={'/search'}
              className='text-xs sm:text-sm text-blue-800 font-bold hover:underline'
            >
              Let's get started...
            </Link>
       </div>
            
       <div className=''>
             <img src={imageHome} alt="Home" className="w-[850px] rounded-lg h-auto" />
      </div>

      </div>

      {/* Services */}

      <section id='service' className=" bg-gray-100 px-28 py-10 pb-28">
      <div className="container mx-auto px-4">
      
        <p className="text-center text-gray-600 text-xl font-medium mb-4">Our Services</p>
        <h2 className="text-center text-3xl font-bold mb-8">Our Main Focus</h2>
       
        <div className=" grid grid-cols-3 justify-center gap-8">
          <ServiceCard
            title="Buy a Home"
            description="Over 1 million+ homes for sale available on the website. We can match you with a house you’ll want to call home."
            image={BuyHome}
            linkText="Find A Home"
          />
          <ServiceCard
            title="Rent a Home"
            description="Explore a wide variety of rental homes available on our site to find the perfect match for your needs."
            image={RentHome}
            linkText="Find A Rental"
          />
          <ServiceCard
            title="Sell a Home"
            description="Sell your home efficiently with our platform. We'll connect you with potential buyers who'll value your property."
            image={SellHome}
            linkText="List Your Home"
          />
        </div>

        </div>
      </section>


      {/* swiper */}

      <div className="w-full h-[500px]">
      <ImageSlider slides={slides} />
     </div>


      {/* listing results for offer, sale and rent */}

      <div className='w-full max-w-6xl mx-auto flex p-16 flex-col gap-8 my-10'>
        {offerListings && offerListings.length > 0 && (
          <div className=''>
            <div className='my-3'>
              <h2 className='text-2xl font-semibold text-slate-600'>Recent offers</h2>
              <Link className='text-sm text-blue-800 hover:underline' to={'/search?offer=true'}>Show more offers</Link>
            </div>
            <div className='flex flex-wrap gap-8'>
              {offerListings.map((listing) => (
                <li>
                  <ListingItem listing={listing} key={listing._id} />
                </li>
              ))}
            </div>
          </div>
        )}
        {rentListings && rentListings.length > 0 && (
          <div className=''>
            <div className='my-3'>
              <h2 className='text-2xl font-semibold text-slate-600'>Recent places for rent</h2>
              <Link className='text-sm text-blue-800 hover:underline' to={'/search?type=rent'}>Show more places for rent</Link>
            </div>
            <ul className="flex flex-wrap gap-8">
              {rentListings.map((listing) => (
                <li className="">
                  <ListingItem listing={listing} key={listing._id} />
                </li>
              ))}
            </ul>

          </div>
        )}
        {saleListings && saleListings.length > 0 && (
          <div className=''>
            <div className='my-3'>
              <h2 className='text-2xl font-semibold text-slate-600'>Recent places for sale</h2>
              <Link className='text-sm text-blue-800 hover:underline' to={'/search?type=sale'}>Show more places for sale</Link>
            </div>
            <ul className="flex flex-wrap gap-8">
              {saleListings.map((listing) => (
                <li>
                     <ListingItem listing={listing} key={listing._id} />
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <Footer/>
    </div>
  );
}
