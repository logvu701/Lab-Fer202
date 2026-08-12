import React, { useState } from "react";
import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";

const initialProducts = [
    {
        id: 1,
        name: "Classic Men's T-Shirt",
        price: 199000,
        image: "img/nam1.jpg",
        status: "Hàng mới",
        stock: 5,
        gender: "Men"
    },
    {
        id: 2,
        name: "Casual Men's Shirt",
        price: 299000,
        image: "img/nam2.jpg",
        status: "Còn hàng",
        stock: 8,
        gender: "Men"
    },
    {
        id: 3,
        name: "Premium Men's Jacket",
        price: 599000,
        image: "img/nam3.jpg",
        status: "Hàng hot",
        stock: 2,
        gender: "Men"
    },
    {
        id: 4,
        name: "Elegant Women's Dress",
        price: 399000,
        image: "img/Nu1.jpg",
        status: "Giảm giá",
        stock: 4,
        gender: "Women"
    },
    {
        id: 5,
        name: "Modern Women's Blouse",
        price: 249000,
        image: "img/Nu2.jpg",
        status: "Còn hàng",
        stock: 7,
        gender: "Women"
    },
    {
        id: 6,
        name: "Stylish Women's Jeans",
        price: 349000,
        image: "img/Nu3.jpg",
        status: "Hàng mới",
        stock: 0,
        gender: "Women"
    }
];

function App() {
    const [products, setProducts] = useState(initialProducts);
    const [cartCount, setCartCount] = useState(0);
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState("");

    const handleAddToCart = (productId) => {
        const product = products.find(p => p.id === productId);
        if (!product || product.stock <= 0) return;

        setProducts(prevProducts =>
            prevProducts.map(p =>
                p.id === productId ? { ...p, stock: p.stock - 1 } : p
            )
        );

        setCartCount(prevCount => prevCount + 1);

        setToastMessage(`Sản phẩm "${product.name}" đã được thêm vào giỏ hàng thành công!`);
        setShowToast(true);
    };

    return (
        <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", paddingBottom: "100px" }}>
            <Header cartCount={cartCount} />
            <HeroBanner />
            <main className="container my-5" style={{ flex: 1 }}>
                <h2 className="text-center mb-5 fw-bold text-dark position-relative py-2">
                    FEATURED PRODUCTS
                    <span
                        style={{
                            position: "absolute",
                            bottom: 0,
                            left: "50%",
                            transform: "translateX(-50%)",
                            width: "80px",
                            height: "3px",
                            backgroundColor: "#0d6efd"
                        }}
                    ></span>
                </h2>
                <ProductList products={products} onAddToCart={handleAddToCart} />
            </main>
            <Footer />

            <ToastContainer position="top-end" className="p-3" style={{ position: "fixed", zIndex: 9999, top: "80px" }}>
                <Toast
                    onClose={() => setShowToast(false)}
                    show={showToast}
                    delay={3000}
                    autohide
                    style={{
                        backgroundColor: "#198754",
                        color: "#fff",
                        borderRadius: "8px",
                        boxShadow: "0 0.5rem 1rem rgba(0, 0, 0, 0.15)"
                    }}
                >
                    <Toast.Header closeButton={true} className="bg-success text-white border-0 py-2">
                        <strong className="me-auto"> Giỏ hàng</strong>
                        <small className="text-white-50">vừa xong</small>
                    </Toast.Header>
                    <Toast.Body className="py-3 px-3 fw-medium">
                        {toastMessage}
                    </Toast.Body>
                </Toast>
            </ToastContainer>
        </div>
    );
}

export default App;
