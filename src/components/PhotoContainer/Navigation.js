import React from 'react';
import styled from "styled-components";

  const NavbarBrand = styled.img`
  `

function Header() {
    return (
      
        <Navbar bg="light" variant="light">
               <NavbarBrand img src="img/nasa.png"></NavbarBrand>
        <Nav className="mr-auto">
            <NavItem>
          <NavLink href="#">Login</NavLink>
          </NavItem>
          <NavItem>
          <NavLink href="#">Signup</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
   
    )
  }

  export default Header; 