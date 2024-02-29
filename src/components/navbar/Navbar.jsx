import { BsCart4 } from "react-icons/bs";
import { IoHomeOutline } from "react-icons/io5";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
    const addedNum = useSelector((store) => store.addedNum);
    return (
        <nav>
            <p style={{ color: "#f5f5f5" }}>
                <Link to={"/"}>
                    <IoHomeOutline color="#f5f5f5" size={"30px"} />
                </Link>
            </p>
            <p className="bag">
                <Link to={"/cart"}>
                    <BsCart4 color="#f5f5f5" size={"30px"} />
                </Link>
                {addedNum > 0 && <span>{addedNum}</span>}
            </p>
        </nav>
    );
}

export default Navbar;
