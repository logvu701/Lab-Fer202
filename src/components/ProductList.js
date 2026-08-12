import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "./ProductCard";

function ProductList({ products }) {
    return (
        <Container className="px-0">
            <Row className="gy-4 gx-3 justify-content-center">
                {products.map((product) => (
                    <Col key={product.id} xs={12} md={6} lg={4} className="d-flex align-items-stretch">
                        <ProductCard product={product} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default ProductList;
