import React from "react";
import { Link } from "react-router-dom";

export default function Wishlist() {
  // const [myWishlist,setMyWishlist] = useState([]);

  // const fetchWishllist = async (val) => {
  //   const url=`https://qualido.herokuapp.com/api/auth/wishlist?${val}`
  //   const response = await fetch(url)
  //   const data = await response.json()
  //   setMyWishlist(data.products)
  // }

  // useEffect(()=>{
  //   fetchWishllist();
  // },[])

  return (
    <>
      <div className="container wishlist-page">
        <lottie-player
          src="https://assets4.lottiefiles.com/private_files/lf30_e3pteeho.json"
          background="transparent"
          speed="1"
          style={{ width: "280px", height: "280px" }}
          loop
          autoplay
        ></lottie-player>
        <p className="wishlist-para">
          Your wishlist is empty!! <br /> Browse our products and add to your
          collections.
        </p>
        <Link to="/products" className="info-btn">
          Add Items
        </Link>
      </div>
    </>
  );
}
