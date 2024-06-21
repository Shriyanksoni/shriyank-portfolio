import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import logo from '../assets/img/logo.svg'
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'
import Contact from './Contact'
import ss from '../assets/img/ss.png'


export default function NavBar(){

    const [activeLink, setActiveLink] = useState('home')
    const [scrolled, setScrolled] = useState(false)

    useEffect(()=>{
        const onscroll = () =>{
            if(window.scrollY > 50 ){
                setScrolled(true)
            }
            else{
                setScrolled(false)
            }
        }

        window.addEventListener('scroll', onscroll)

        return window.removeEventListener('scroll', onscroll)
    },[])

    const onUpdateActiveLink = (link) => {
        setActiveLink(link)
    }



  return (
    <>
    <Navbar expand="lg" className={scrolled ? 'scrolled' : ''}>
      <Container>
        {/* <Navbar.Brand href="#home">
            <img src={ss} alt='logo'/>
        </Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" >
            <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skils' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('projects')} >Projects</Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
                <a href='https://www.linkedin.com/in/shriyank-soni-disjskem/' target="_blank"><img src={navIcon1} alt='LinkedIn'/></a>
                <a href='https://www.facebook.com/profile.php?id=100012236352338' target='_blank'><img src={navIcon2} alt=''/></a>
                <a href='https://www.instagram.com/shriyank_soni/' target="_blank"><img src={navIcon3} alt=''/></a>
            </div>
           <button><a href='#connect' className='text-white'>Let's Connect</a></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}
