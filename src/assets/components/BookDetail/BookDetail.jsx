import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredReadList, addToStoredWishList } from "../../../Utility/addToDB";

const BookDetail = () => {
  const { bookId } = useParams();
  const data = useLoaderData();
  const id = parseInt(bookId);

  const book = data.find(book => book.bookId === id);

  const { bookName, author, image, rating, category, publisher, yearOfPublishing, tags, review, totalPages } = book;

  const handleMarkAsRead = (id) =>{
      addToStoredReadList(id);
  }

  const handleWishList = (id) =>{
    addToStoredWishList(id);
  }

  return (
    <div className="my-8">
      <div className="flex bg-base-200 p-5 rounded-lg">
        <img
          src={image}
          className="max-w-sm rounded-lg" />
        <div className="ml-4">
          <h1 className="text-5xl font-bold">{bookName}</h1>
          <p className="py-2">
            By : {author}
          </p>
          <div className="border-b-4 my-4"></div>
          <h2 className="text-xl">{category}</h2>
          <div className="border-b-4 my-4"></div>
          <p><span className="font-bold text-xl">Review</span> : {review}</p>
          <div className="">
            <span className="font-bold text-xl">Tag:</span>
            {
              tags.map((tag, inx) => <botton key={inx} className="btn btn-xs mr-2 bg-[#23BE0A0D] text-[#23BE0A]">#{tag}</botton>)
            }
          </div>
          <div className="border-b-4 my-4"></div>
          <div className="space-y-4">
            <p>Number of Page : <span className="font-bold">{totalPages}</span></p>
            <p>Publisher :  <span className="font-bold">{publisher}</span></p>
            <p>Year of Publishing : <span className="font-bold">{yearOfPublishing}</span></p>
            <p>Rating : <span className="font-bold">{rating}</span></p>
          </div>
          <div className="my-4 space-x-3">
            <button onClick={()=>handleMarkAsRead(bookId)} className="btn btn-outline ">Mark As Read</button>
            <button onClick={()=>handleWishList(bookId)} className="btn bg-[#50B1C9]">Add To Wishlist</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;