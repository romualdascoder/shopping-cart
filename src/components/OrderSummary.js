import { useState, MouseEventHandler, MouseEvent } from "react";
import { useMediaQuery } from "react-responsive";
import "../styles/OrderSummary.scss";
import { CgShoppingCart } from "react-icons/cg";
import { RiArrowRightSLine } from "react-icons/ri";
import { ProductsData } from "../data/ProductsData";

function OrderSummary() {
  const [isOpened, setIsOpened] = useState(false);
  const [isMouseInside, setIsMouseInside] = useState(false);
  const [productsData, setProductsData] = useState(ProductsData);

  const mobile = useMediaQuery({ query: `(max-width: 860px)` });

  const toggle = () => {
    setIsOpened((wasOpened) => !wasOpened);
  };

  const mouseToggle = (id) => {
    setIsMouseInside(id);
  };

  const handleRemove = (id) => {
    const newData = productsData.filter((data) => data.id !== id);
    setProductsData(newData);
  };

  return (
    <div className="orderSummary">
      <div className="orderSummaryWrapper">
        {mobile && (
          <div className="mobileMenu" onClick={toggle}>
            <div className="cartContainer">
              <div>
                <CgShoppingCart size="17px" />
              </div>
              <p>order summary</p>
              <div>
                <RiArrowRightSLine
                  size="20px"
                  style={{ transform: isOpened && "rotate(-90deg)" }}
                />
              </div>
            </div>
            <div className="topMenuPrice">$49.98</div>
          </div>
        )}
        <div>
          <div className="productInfo" style={{ display: isOpened && "flex" }}>
            {productsData.map((data) => {
              return (
                <div
                  className="row"
                  onMouseEnter={() => mouseToggle(data.id)}
                  onMouseLeave={mouseToggle}
                  key={data.id}
                >
                  <div className="productContainer">
                    <div className="imageBox">
                      <img src={data.image} alt={data.alt} />
                    </div>
                    <div className="productTitleContainer">
                      <div className="productTitleWrapper">
                        <p className="productQuantity">{data.quantity}</p>
                        <p className="productTitle">{data.title}</p>
                      </div>
                      <div className="removeContainer">
                        <div
                          onClick={() => handleRemove(data.id)}
                          className="remove"
                          style={{
                            display: isMouseInside === data.id && "flex",
                          }}
                        >
                          x Remove
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="productPrice">{data.price}</p>
                </div>
              );
            })}
            <div className="totalPrice">
              <p className="totalTitle">Total</p>
              <div className="totalPriceWrapper">
                <p className="currency">USD</p>
                <p className="total">$49.98</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderSummary;
