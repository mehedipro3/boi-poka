import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({ book }) => {
  const { bookId, bookName, author, image, rating, category, publisher, yearOfPublishing, tags } = book;
  return (
    <Link to ={`/book/${bookId}`}>
      <div className="card bg-base-100 w-96 p-6 border space-y-4">
      <figure className='bg-[#F3F3F3] py-8 rounded-2xl '>
        <img
          src={image}
          className='h-[166px]'
          alt={bookId} />
      </figure>
      <div className="card-body">
        <div className="">
          {
            tags.map((tag,inx) => <botton key={inx} className="btn btn-xs mr-2 bg-[#23BE0A0D] text-[#23BE0A]">{tag}</botton>)
          }
        </div>
        <h2 className="card-title">
          {bookName}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>By : {author}</p>
        <div className="border border-dashed"></div>
        <div className="card-actions justify-between">
          <div className="badge badge-outline">{category}</div>

          <div className="rating">
            <input type="radio" name="rating-1" className="mask mask-star" />
            <input type="radio" name="rating-1" className="mask mask-star" defaultChecked />
            <input type="radio" name="rating-1" className="mask mask-star" />
            <input type="radio" name="rating-1" className="mask mask-star" />
            <input type="radio" name="rating-1" className="mask mask-star" />
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default Book;