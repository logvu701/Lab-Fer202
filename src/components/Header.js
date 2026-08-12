import React from "react";
import { Navbar, Container, Nav, Badge } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";

function Header({ cartCount = 0 }) {
    return (
        <Navbar bg="white" expand="lg" className="shadow-sm py-3 sticky-top">
            <Container>
                <Navbar.Brand href="#home" className="d-flex align-items-center">
                    <img 
                        src="img/logo.jpg" 
                        alt="Logo" 
                        style={{ width: "130px", height: "auto" }} 
                    />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="main-navbar" />

                <Navbar.Collapse id="main-navbar">
                    <Nav className="mx-auto fw-semibold text-uppercase" style={{ gap: "15px" }}>
                        <Nav.Link href="#home" className="text-dark px-3 hover-link">Home</Nav.Link>
                        <Nav.Link href="#products" className="text-dark px-3 hover-link">Products</Nav.Link>
                        <Nav.Link href="#men" className="text-dark px-3 hover-link">Men</Nav.Link>
                        <Nav.Link href="#women" className="text-dark px-3 hover-link">Women</Nav.Link>
                        <Nav.Link href="#contact" className="text-dark px-3 hover-link">Contact</Nav.Link>
                    </Nav>

                    <Nav>
                        <Nav.Link 
                            href="#cart" 
                            className="position-relative d-flex align-items-center p-2 rounded-circle hover-bg-light"
                            style={{ transition: "background-color 0.2s" }}
                        >
                            <FaShoppingCart size={22} className="text-dark" />
                            <Badge 
                                pill 
                                bg="danger" 
                                className="position-absolute start-100 translate-middle badge rounded-pill bg-danger border border-white"
                                style={{ 
                                    top: "8px", 
                                    padding: "0.35em 0.65em",
                                    fontSize: "0.7rem",
                                    boxShadow: "0 2px 4px rgba(0,0,0,0.15)"
                                }}
                            >
                                {cartCount}
                            </Badge>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
