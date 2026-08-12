import React from "react";
import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";

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
    return (
        <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", paddingBottom: "100px" }}>
            <Header />
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
                <ProductList products={initialProducts} />
            </main>
            <Footer />
        </div>
    );
}

export default App;
