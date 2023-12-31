import React from 'react';
import { Squash as Hamburger } from 'hamburger-react'
import { ArrowLevitate } from '../HomePage/HomePageStyle';
import { FaAngleDoubleUp } from 'react-icons/fa';
import Logo from '../../assets/NavigationBarImages/Logo.svg';
import {
    Nav,
    NavbarContainer,
    MobileIcon,
    NavNav,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,

} from './NavigationBarStyle';

const Navbar = ({ isOpen, toggle }) => {

    return (
        <>
            <Nav className='/'>
                <NavLinks to='/'>
                    <img width="250vw"
                        src={Logo}>
                    </img>
                </NavLinks>

                <NavbarContainer>

                    <MobileIcon onClick={toggle}>
                        <Hamburger color="#FFFFFF" rounded toggled={isOpen} toggle={toggle} />
                    </MobileIcon>
                    <NavNav className="stroke">
                        <NavMenu>
                            <NavItem>
                                <NavLinks to='/projects'>Our Garage</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='/competitions'>Competitions</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks className='recruit' style={{color: '#ebc634', fontSize: '1.2em'}}to='/recruitment'>Recruiting</NavLinks>
                                {/* <ArrowLevitate to='recruit'>
                                <FaAngleDoubleUp size="80px" cursor="pointer" style={{margin: 'auto', color: '#ebc634'}}></FaAngleDoubleUp>
                                </ArrowLevitate> */}
                            </NavItem>
                            
                            <NavItem>
                                <NavLinks to='/team-roles'>About</NavLinks>
                            </NavItem>
                            <NavBtn>
                                <NavLinks to='/sponsorships' style={{textDecoration: 'none'}}>Sponsor Us</NavLinks>
                            </NavBtn>
                        </NavMenu>
                    </NavNav>


                </NavbarContainer>
            </Nav>
        </>
    );
};

export default Navbar