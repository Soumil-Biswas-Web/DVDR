import Header from './Content/header/Header'
import Footer from './Content/footer/Footer'
import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import LocoMotive from './utils/LocoMotive';
import Loader from './Components/Loader';
import { Flash } from './Components/Flash';
import PageTitle from "./Components/PageTitle";

function App() {
  PageTitle();

  const location = useLocation();

  return (
    <LocoMotive>
      {/* <div className='w-full h-auto'> */}
      <div className={`w-full bg-no-repeat bg-cover bg-center min-h-screen magic-center justify-between relative overflow-x-hidden 
        ${location.pathname.includes('Central')
            ?'bg-[image:linear-gradient(rgba(51,_15,_87,_0.253),_rgba(51,_15,_87,_0.253)),_url("/images/botan2.jpg")]' 
            :`bg-[image:linear-gradient(rgba(51,_15,_87,_0.253),_rgba(51,_15,_87,_0.253)),_url("/images/home-small.png")]
              md:bg-[image:linear-gradient(rgba(51,_15,_87,_0.253),_rgba(51,_15,_87,_0.253)),_url("/images/home-main.jpg")]`
        }`}>
        <ScrollRestoration />
        <Flash />
        <Header />
        <Outlet />
        <Footer />
        <Loader />
      </div>
    </LocoMotive>
  )
}

export default App
