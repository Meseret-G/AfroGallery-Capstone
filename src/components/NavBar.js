import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { signOutUser } from '../api/auth';

const GalNavbar = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="navbar" light expand="md">
        <NavbarBrand className="nav-logo" href="/" style={{ color: 'white' }}>
          Afro Galley
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="container-fluid" navbar>
            {user ? (
              <>
                <NavItem>
                  <NavLink href="/" style={{ color: 'white' }}>
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/add" style={{ color: 'white' }}>
                    New
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/search" style={{ color: 'white' }}>
                    Search
                  </NavLink>
                </NavItem>
                <UncontrolledDropdown className="user-menu" nav inNavbar>
                  <DropdownToggle nav caret>
                    <img
                      className="user-img"
                      src={user.profilePic}
                      alt="user"
                    />
                    {user.user}
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      <NavLink className="sign-out-user" onClick={signOutUser}>
                        Sign Out
                      </NavLink>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </>
            ) : (
              ''
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

GalNavbar.defaultProps = {
  user: null,
};

GalNavbar.propTypes = {
  user: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      fullName: PropTypes.string,
      profilePic: PropTypes.string,
      uid: PropTypes.string,
      user: PropTypes.string,
    }),
  ]),
};

export default GalNavbar;
