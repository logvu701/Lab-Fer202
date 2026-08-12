import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
    return (
        <footer 
            className="fixed-bottom bg-light border-top py-3 text-secondary" 
            style={{ 
                zIndex: 1030,
                boxShadow: "0 -2px 10px rgba(0, 0, 0, 0.05)"
            }}
        >
            <Container>
                <Row className="align-items-center text-center text-md-start">
                    <Col md={6}>
                        <span className="fw-semibold text-dark">Lab 1 Assignment</span> &copy; 2026. All rights reserved.
                    </Col>
                    <Col md={6} className="text-md-end mt-2 mt-md-0">
                        <ul className="list-inline mb-0" style={{ fontSize: "0.9rem" }}>
                            <li className="list-inline-item me-3">
                                <strong>Student Name:</strong> Đàm Lâm Oanh
                            </li>
                            <li className="list-inline-item me-3">
                                <strong>Student ID:</strong> HE190770
                            </li>
                            <li className="list-inline-item me-3">
                                <strong>Class Name:</strong> IA1808
                            </li>
                            <li className="list-inline-item">
                                <strong>Email Address:</strong> oanhdlhhe190770@fpt.edu.vn
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
