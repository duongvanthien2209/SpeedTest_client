import React, { useState, useContext } from 'react';
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
    NavbarText,
    Container
} from 'reactstrap';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import { UserContext } from '../providers/userProvider';

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar, faHistory } from '@fortawesome/free-solid-svg-icons';

import brand from '../../assets/images/speed.svg';

const Header = () => {
    let { user } = useContext(UserContext);
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar className="navbar--custom" color="dark" dark expand="md">
                <Container>
                    <NavbarBrand className="navbar-brand--custom" href="/"><img className="mr-2" src={brand} style={{ height: 50 + 'px', width: 50 + 'px' }} />Typing Speed</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Link to="/leaderBoard" className="nav-link"><FontAwesomeIcon className="mr-1" icon={faChartBar} />Leaderboard</Link>
                            </NavItem>
                            <NavItem>
                                <Link to={`/history${user ? `?id=${user.id}` : ''}`} className={ classNames('nav-link', { disabled: !user }) }><FontAwesomeIcon className="mr-1" icon={faHistory} />History</Link>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;