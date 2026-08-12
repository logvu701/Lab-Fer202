import React from "react";
import { Carousel } from "react-bootstrap";

function HeroBanner() {
    return (
        <Carousel interval={4000} fade className="mb-5">
            {/* Slide 1 */}
            <Carousel.Item style={{ height: "480px" }}>
                <div 
                    style={{
                        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)), url('img/banner1.jpg')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        width: "100%",
                        height: "100%"
                    }}
                />
                <Carousel.Caption className="text-start pb-5 mb-5" style={{ left: "8%" }}>
                    <h1 
                        className="display-3 fw-bold text-white mb-2" 
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
                </Carousel.Caption>
            </Carousel.Item>

            {/* Slide 2 */}
            <Carousel.Item style={{ height: "480px" }}>
                <div 
                    style={{
                        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)), url('img/banner2.jpg')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        width: "100%",
                        height: "100%"
                    }}
                />
                <Carousel.Caption className="text-start pb-5 mb-5" style={{ left: "8%" }}>
                    <h1 
                        className="display-3 fw-bold text-white mb-2" 
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
                        Thiết kế đẳng cấp, chất liệu cao cấp và thoáng mát phù hợp mùa hè.
                    </p>
                    <button className="btn btn-primary btn-lg px-4 py-2 fw-semibold rounded-pill shadow">
                        Xem Sản Phẩm
                    </button>
                </Carousel.Caption>
            </Carousel.Item>

            {/* Slide 3 */}
            <Carousel.Item style={{ height: "480px" }}>
                <div 
                    style={{
                        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)), url('img/banner3.jpg')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        width: "100%",
                        height: "100%"
                    }}
                />
                <Carousel.Caption className="text-start pb-5 mb-5" style={{ left: "8%" }}>
                    <h1 
                        className="display-3 fw-bold text-white mb-2" 
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
                        Thời trang nam nữ đa dạng phong cách, xu hướng thịnh hành nhất.
                    </p>
                    <button className="btn btn-primary btn-lg px-4 py-2 fw-semibold rounded-pill shadow">
                        Nhận Voucher
                    </button>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default HeroBanner;
