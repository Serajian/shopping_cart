import { Container, Row, Col } from "react-bootstrap";
import ProductItem from "./ProductsItem";
import productsList from "../../db";

function ProductsList() {
    return (
        <Container className="py-4">
            <Row className="gy-4">
                {productsList.map((item) => (
                    <Col sm={6} md={4} lg={3} key={item.id}>
                        <ProductItem {...item} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default ProductsList;
