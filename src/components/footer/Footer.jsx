import "./Footer.css";
import { FaReact } from "react-icons/fa";

function Footer() {
    return (
        <div className="footer">
            <p>
                developed by
                <span>
          <FaReact />
        </span>
                <strong>Mohsen Serajian</strong>
            </p>
        </div>
    );
}

export default Footer;
