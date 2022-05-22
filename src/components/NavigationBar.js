import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";


const Styles = styled.div`

    .navbar-brand, .navbar-nav, .nav-link {
        color: #bbb;

        &:hover {
            color; white;
        }
    }
`;


export const NavigationBar = () => (
    <Styles>
        <Navbar expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/">Cool life</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="m-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                    <Nav.Link href="/contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)