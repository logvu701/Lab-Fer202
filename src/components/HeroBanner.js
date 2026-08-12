import React from "react";

function HeroBanner() {
    return (
        <div className="mb-5 position-relative" style={{ height: "480px" }}>
            <div 
                style={{
                    backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)), url('img/banner1.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: "100%",
                    height: "100%"
                }}
            />
            <div 
                className="position-absolute text-start pb-5 mb-5" 
                style={{ 
                    left: "8%", 
                    bottom: "10%",
                    color: "white"
                }}
            >
                <h1 
                    className="display-3 fw-bold mb-2" 
                    style={{ 
                        textShadow: "2px 2px 4px rgba(0,0,0,0.6)",
                        letterSpacing: "1px"
                    }}
                >
                    SUMMER SALE UP TO 50%
                </h1>
                <p 
                    className="fs-4 text-white-50 text-light fw-light mb-4"
                    style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.6)" }}
                >
                    Khám phá bộ sưu tập hè năng động và nhận ưu đãi cực khủng ngay hôm nay.
                </p>
                <button className="btn btn-primary btn-lg px-4 py-2 fw-semibold rounded-pill shadow">
                    Mua Ngay
                </button>
            </div>
            <div 
                className="position-absolute start-50 translate-middle-x" 
                style={{ bottom: "20px", display: "flex", gap: "8px" }}
            >
                <span style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "white", display: "inline-block" }}></span>
            </div>
        </div>
    );
}

export default HeroBanner;
