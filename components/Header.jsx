import React, {Component, useContext} from 'react';
import {Navbar, Nav, Container, FormControl, Form} from "react-bootstrap";
import {LoginContext} from "../context";

const Header = () => {
    const {globalLogin, setGlobalLogin} = useContext(LoginContext)
    return (
        <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="navbar-collapse">
                        <Nav.Link href="/"> Home </Nav.Link>
                        <Nav.Link href="/a"> Home </Nav.Link>
                        <Nav.Link href="/b"> Home </Nav.Link>
                        <Nav.Link href="/c"> {globalLogin} </Nav.Link>
                    </Nav>
                    <Form style={{width: '600px'}} inline>
                        <FormControl
                            type="text"
                            placeholder="Search"
                            className="mr-sm-2"
                        />
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;