import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const PageTitle = () => {
  const location = useLocation();

  useEffect(() => {
    const titles = {
      "/": "Home | #DVDR",
      "/Videos": "Videos | #DVDR",
      "/Screenshots": "Screenshots | #DVDR",
      "/Blogposts": "Blogposts | #DVDR",
      "/Contact": "Contact | #DVDR",
    };
    document.title = titles[location.pathname] || "#DVDR";
  }, [location.pathname]);
};

export default PageTitle;
