/* eslint-disable jsx-a11y/alt-text */
import "./ProductItemInCart.css";
import { MdDeleteSweep } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  increaseInCart,
  decreaseInCart,
  removeFromCart,
} from "../../Redux/slice";

function ProductItemInCart(data) {
  const { id, name, image, count, totalPrice } = data;
  const dispatch = useDispatch();
  const handleIncrease = () => {
    dispatch(increaseInCart(id));
  };
  const handleDecrease = () => {
    dispatch(decreaseInCart(id));
  };
  const handleRemove = () => {
    dispatch(removeFromCart(id));
  };
  return (
    <div
      className="productItemInCart
    productItemInCart"
    >
      <div className="cardLeft">
        <img src={image} />
      </div>
      <div className="cardMiddle">
        {count > 1 ? (
          <button onClick={handleDecrease}>_</button>
        ) : (
          <button onClick={handleRemove}>
            <MdDeleteSweep />
          </button>
        )}
        <span>{count}</span>
        <button onClick={handleIncrease}>+</button>
      </div>
      <div className="carRight">
        <h5>{name}</h5>
        <p>price: {totalPrice.toLocaleString()}</p>
      </div>
    </div>
  );
}

export default ProductItemInCart;
