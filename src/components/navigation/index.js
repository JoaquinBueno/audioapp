import React from 'react'
import { FaHome, FaUser, FaUsers, FaSearch } from 'react-icons/fa'
import {Nav, Link} from './styles'


export const Navigation = () => {
    const SIZE = '32px'
    return(
        <Nav>
            <Link to='/'><FaHome size={SIZE}/></Link>
            <Link to='/explore'><FaSearch size={SIZE}/></Link>
            <Link to='/groups'><FaUsers size='35px'/></Link>
            <Link to='/user'><FaUser size={SIZE}/></Link>
        </Nav>
    )
}