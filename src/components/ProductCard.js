import React from "react";
import { Card, Button, Badge } from "react-bootstrap";

function ProductCard({ product, onAddToCart }) {
    // Dynamic color helper for status badges
    const getStatusColor = (status) => {
        switch (status) {
            case "Còn hàng":
                return "success";
            case "Hàng mới":
                return "info";
            case "Giảm giá":
                return "danger";
            case "Hàng hot":
                return "warning text-dark";
            default:
                return "secondary";
        }
    };

    // Format price to VND, e.g. 199.000d
    const formatPriceVND = (price) => {
        return Math.floor(price).toLocaleString("vi-VN") + "d";
    };

    const isOutOfStock = product.stock <= 0;

    return (
        <Card 
            className="h-100 shadow-sm border-0 position-relative overflow-hidden product-card"
            style={{ 
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
        >
            {/* Status Tag Overlay */}
            <Badge 
                bg={getStatusColor(product.status)} 
                className="position-absolute fs-6 fw-semibold px-3 py-2 m-3 rounded-pill shadow"
                style={{ 
                    top: 10, 
                    left: 10, 
                    zIndex: 10 
                }}
            >
                {product.status}
            </Badge>

            {/* Product Image */}
            <div style={{ height: "260px", overflow: "hidden", backgroundColor: "#f8f9fa", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Card.Img 
                    variant="top" 
                    src={product.image} 
                    alt={product.name}
                    style={{ 
                        maxHeight: "100%", 
                        width: "auto", 
                        maxWidth: "100%",
                        objectFit: "contain",
                        transition: "transform 0.5s ease" 
                    }}
                    className="product-card-img"
                />
            </div>

            {/* Product Info */}
            <Card.Body className="d-flex flex-column p-4 justify-content-between">
                <div>
                    <h5 className="fw-bold mb-2 text-dark">{product.name}</h5>
                    <div className="d-flex align-items-center mb-3">
                        <span className="fs-5 fw-bold text-primary me-3">
                            {formatPriceVND(product.price)}
                        </span>
                        <small className={`fw-medium ${isOutOfStock ? "text-danger" : "text-secondary"}`}>
                            {isOutOfStock ? "Hết hàng" : `Kho: ${product.stock}`}
                        </small>
                    </div>
                </div>

                <div className="d-grid gap-2 mt-3">
                    <Button 
                        variant={isOutOfStock ? "secondary" : "primary"}
                        onClick={() => onAddToCart(product.id)}
                        disabled={isOutOfStock}
                        className="py-2.5 fw-bold shadow-sm rounded"
                        style={{
                            transition: "all 0.2s"
                        }}
                    >
                        {isOutOfStock ? "Out of Stock" : "Add to cart"}
                    </Button>
                </div>
            </Card.Body>
        </Card>
    );
}

export default ProductCard;
