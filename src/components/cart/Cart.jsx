import "./Cart.css";
import ProductItemInCart from "./ProductItemInCart";
import { useSelector } from "react-redux";

function Cart() {
    const addedProducts = useSelector((store) => store.addedProducts);
    const totalArray = addedProducts.map((item) => item.totalPrice);
    let total = totalArray.reduce((sum, num) => sum + num, 0);
    return (
        <div className="cartContainer">
            {addedProducts.length > 0 ? (
                <>
                    {addedProducts.map((item) => (
                        <ProductItemInCart key={item.id} {...item} />
                    ))}
                    <div>
                        <p>Total Price: {total.toLocaleString()}</p>
                    </div>
                </>
            ) : (
                <p>The shopping cart is empty</p>
            )}
        </div>
    );
}

export default Cart;
