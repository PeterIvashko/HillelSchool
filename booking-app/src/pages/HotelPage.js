import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HotelList from '../components/HotelList';
import Navbar from '../components/Navbar';
import { fetchHotels } from '../actions/hotelActions';

const HotelPage = () => {
  const dispatch = useDispatch();
  const hotels = useSelector((state) => state.hotels);

  useEffect(() => {
    dispatch(fetchHotels());
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      <h2>Hotels</h2>
      <HotelList hotels={hotels} />
    </div>
  );
};

export default HotelPage;
