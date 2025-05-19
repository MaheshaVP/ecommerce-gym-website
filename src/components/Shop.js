import { useState } from "react";
import "./styles/Shop.css";
import { FaHeart, FaEye } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

const Shop = ({ shop, Filter, allcateFilter, addtocart }) => {
  const [showDetail, setShowDetail] = useState(false);
  const [detail, setDetail] = useState([]);

  const detailpage = (product) => {
    setDetail(product);
    setShowDetail(true);
  };

  const closedetail = () => {
    setShowDetail(false);
  };

  return (
    <>
      {showDetail && (
        <div className="product_detail">
          <button className="close_btn" onClick={closedetail}>
            <AiOutlineClose />
          </button>
          <div className="container">
            <div className="img_box">
              <img src={detail.image} alt="" />
            </div>
            <div className="info">
              <h4>{detail.cat}</h4>
              <h2>{detail.Name}</h2>
              <p>
                Transform your home into a fitness haven: purchase this durable
                and versatile gym equipment and achieve your health goals with
                the convenience and flexibility of your own personal gym.
              </p>
              <h3>Rs.{detail.price}</h3>
              <button onClick={() => addtocart(detail)}>Add To Cart</button>
            </div>
          </div>
        </div>
      )}

      <div className="shop">
        <h2>Shop</h2>
        <p>Home . shop</p>
        <div className="container">
          <div className="left_box">
            <div className="category">
              <div className="header">
                <h3>all categories</h3>
              </div>
              <div className="box">
                <ul>
                  <li onClick={() => allcateFilter()}>All</li>
                  <li onClick={() => Filter("threadmill")}>Threadmill</li>
                  <li onClick={() => Filter("dumbell")}>Dumbell</li>
                  <li onClick={() => Filter("cardio")}>Cardio</li>
                </ul>
              </div>
            </div>
            <div className="banner">
              <div className="img_box">
                <img
                  src="../ecommerce-gym-website/images//shop_leftbanner.jpeg"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="right_box">
            <div className="banner">
              <div className="img_box">
                <img
                  src="../ecommerce-gym-website/images//shop_rtop.jpg"
                  alt=""
                  height={200}
                />
              </div>
            </div>
            <div className="product_box">
              <h2>Shop Product</h2>
              <div className="product_container">
                {shop.map((curElem) => (
                  <div className="box" key={curElem.id}>
                    <div className="img_box">
                      <img src={curElem.image} alt={curElem.Name} />
                      <div className="icon">
                        <li>
                          <FaHeart />
                        </li>
                        <li onClick={() => detailpage(curElem)}>
                          <FaEye />
                        </li>
                      </div>
                    </div>
                    <div className="detail">
                      <h3>{curElem.Name}</h3>
                      <p>Rs.{curElem.price}</p>
                      <button onClick={() => addtocart(curElem)}>
                        Add To Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
