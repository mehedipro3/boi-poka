import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList, getStoredWishList } from '../../../Utility/addToDB';
import Book from '../Book/Book';


const ListedBooks = () => {

  const [readList,setReadList] = useState([]);
  const [wishList,setWishList] = useState([]);

  const allBooks = useLoaderData();

  useEffect(() => {
    const storedReadList = getStoredReadList();
    const storedReadListInt = storedReadList.map(id => parseInt(id));

    const readBookList = allBooks.filter (book  => storedReadListInt.includes(book.bookId));
    setReadList(readBookList);
  }, [])

  useEffect(() => {
    const storedReadList = getStoredWishList();
    const storedReadListInt = storedReadList.map(id => parseInt(id));

    const readBookList = allBooks.filter (book  => storedReadListInt.includes(book.bookId));
    setWishList(readBookList);
  }, [])

  return (
    <div className='my-4'>
      <h3 className="text-5xl font-bold">listedBooks</h3>
      <Tabs className='my-4'>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel>
          <h2 className='text-2xl font-bold'>My Read List Book : {readList.length}</h2>
          <div className='grid md:grid-cols-3 gap-4 my-4'>
            {
              readList.map(book => <Book key={book.bookId} book={book}></Book>)
            }
          </div>
        </TabPanel>
        <TabPanel>
          <h2 className='text-2xl font-bold'>My Wish List Book :  {wishList.length}</h2>
          <div className='grid md:grid-cols-3 gap-4 my-4'>
            {
              wishList.map(book => <Book key={book.bookId} book={book}></Book>)
            }
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;