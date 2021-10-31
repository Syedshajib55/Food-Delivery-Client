import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../Hooks/useAuth/useAuth';
import './Header.css'
const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <h1 className="webName">TravelNow</h1>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand href="#home">TravelNow</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                        <Nav.Link as={HashLink} to="/aboutus">About Us</Nav.Link>
                        <Nav.Link as={HashLink} to="/contactus">Contact Us</Nav.Link>
                        {/* <Nav.Link as={HashLink} to="/PlaceOrder">Place Order</Nav.Link> */}
                        <Nav.Link as={HashLink} to="/allorders">Manage All Orders</Nav.Link>
                        <Nav.Link as={HashLink} to="/manageServices">Manage Orders</Nav.Link>
                        <Nav.Link as={HashLink} to="/addservice">Add A New Service</Nav.Link>
                        {user?.email ?
                            <Button onClick={logOut} variant="light">Logout</Button> :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        }
                        <Navbar.Text>
                            <a className="ms-2" href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;