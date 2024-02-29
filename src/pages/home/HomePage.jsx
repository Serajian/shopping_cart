import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import ProductsList from "../../components/products/ProductsList";
import "./HomePage.css";

function HomePage() {
    return (
        <div className="home">
            <Navbar />
            <ProductsList />
            <Footer />
        </div>
    );
}

export default HomePage;
