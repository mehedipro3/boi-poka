import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './assets/components/Root/Root';
import ErrorPage from './assets/components/ErrorPage/ErrorPage';
import Home from './assets/components/Home/Home';
import Deshboard from './assets/components/Deshboard/Deshboard';
import BookDetail from './assets/components/BookDetail/BookDetail';
import ListedBooks from './assets/components/ListedBooks/ListedBooks';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element : <Home></Home>
      },
      {
        path:'/book/:bookId',
        element : <BookDetail></BookDetail>,
        loader : ()=>fetch('/booksData.json')
      },
      {
        path : 'deshboard',
        element : <Deshboard></Deshboard>
      },
      {
        path : 'listedBooks',
        element : <ListedBooks></ListedBooks>,
        loader : ()=>fetch('/booksData.json')
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
