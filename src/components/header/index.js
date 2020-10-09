import React, { useState, useContext } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

// Context
import { UserContext } from '../providers/userProvider';

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar, faHistory } from '@fortawesome/free-solid-svg-icons';

import cls from './style.module.scss';

import brand from '../../assets/images/speed.svg';

const Header = () => {
  let { user } = useContext(UserContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className={cls['navbar-custom']} dark color="dark" expand="md">
        <NavbarBrand className={cls['navbar-custom__brand']} href="/">
          <img
            className="mr-2"
            src={brand}
            style={{ height: 50 + 'px', width: 50 + 'px' }}
            alt="Brand"
          />
          Typing Speed
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse
          className={cls['navbar-custom__collapse']}
          isOpen={isOpen}
          navbar
        >
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link to="/leaderBoard" className="nav-link">
                <FontAwesomeIcon className="mr-1" icon={faChartBar} />
                Bảng xếp hạng
              </Link>
            </NavItem>
            <NavItem>
              <Link
                to={`/history${user ? `?id=${user.id}` : ''}`}
                className={classNames('nav-link', { 'd-none': !user })}
              >
                <FontAwesomeIcon className="mr-1" icon={faHistory} />
                Lịch sử
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
