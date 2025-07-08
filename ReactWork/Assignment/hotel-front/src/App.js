import { useState } from "react";
import { useRoutes } from 'react-router-dom';
import './App.css';
import FullLayout from './layouts/FullLayout';
import About from './views/About';
import AboutUs from "./views/AboutUs";
import Blog from './views/Blog';
import BlogSingle from './views/BlogSingle';
import BookingAccount from './views/BookingAccount';
import Cart from './views/Cart';
import Contact from './views/Contact';
import FrequentQuestions from './views/FrequentQuestions';
import Gallery from './views/Gallery';
import Home from './views/Home';
import Home2 from './views/Home2';
import Home3 from './views/Home3';
import Restaurant from './views/Restaurant';
import Room3 from './views/Room3';
import Room5 from './views/Room5';
import RoomDetails1 from './views/RoomDetails1';
import SearchAvailability from './views/SearchAvailability';
import Services from './views/Services';
import Shop from './views/Shop';


function App() {
  const [showPopup, setShowPopup] = useState(false);

  // Pass down a way to open the popup (optional)
  let ThemeRoutes = [
    {
      path: "/",
      element: <FullLayout />,
      children: [
        { path: "/", exact: true, element: <Home /> },
        { path: "/about", exact: true, element: <About /> },
        { path: "/contact-us", exact: true, element: <Contact /> },

        /*Component added by me*/
        { path: "/home2", exact: true, element: <Home2 /> },
        { path: "/home3", exact: true, element: <Home3 /> },
        { path: "/roomList3", exact: true, element: <Room3 /> },
        // { path: "/room4", exact: true, element: <Room4 /> },
        { path: "/roomList5", exact: true, element: <Room5 /> },
        { path: "/about-us", exact: true, element: <AboutUs /> },
        { path: "/booking-account", exact: true, element: <BookingAccount /> },
        { path: "/blog-single", exact: true, element: <BlogSingle /> },
        {
          path: "/frequent-question",
          exact: true,
          element: <FrequentQuestions />,
        },
        { path: "/gallery", exact: true, element: <Gallery /> },
        { path: "/services", exact: true, element: <Services /> },
        { path: "/room-details1", exact: true, element: <RoomDetails1 /> },
        { path: "/blog", exact: true, element: <Blog /> },
        { path: "/shop", exact: true, element: <Shop /> },
        { path: "/cart", exact: true, element: <Cart /> },
        // { path: "/book-now", exact: true, element: <BookNow /> },

        {
          path: "/searchavailability",
          exact: true,
          element: <SearchAvailability />,
        },

        { path: "/restaurant", exact: true, element: <Restaurant /> },
      ],
    },
  ];
  const routing = useRoutes(ThemeRoutes);

  return (
    <>
      {/* <BookNow/> */}
      {/* Main routing */}
      {routing}

      {/* Global BookNow popup
      {showPopup && <BookNow onClose={() => setShowPopup(false)} />} */}
    </>
  );
}

export default App;
