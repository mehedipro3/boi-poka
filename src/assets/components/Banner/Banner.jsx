import React from 'react';
import BannerImg from '../../../assets/img/books.jpg'
const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen rounded-lg ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={BannerImg}
          className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">Books to freshen up <br /> your bookshelf</h1>
          <button className="btn my-4 bg-[#23BE0A] text-white">View The List</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;