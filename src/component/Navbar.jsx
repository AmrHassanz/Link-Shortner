import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { MediaContext } from './mediaContext/MediaContext';

export default function Navbar() {
    let { userData, logOut } = useContext(MediaContext);

    const [navbar, setNavbar] = useState(false);
    const [active, setActive] = useState(false);
    let links = document.querySelectorAll('.navbar .nav-item .link');
    let sections = document.querySelectorAll('.scro');

    const changeNavbar = () => {
        let nav = document.querySelector('nav');
        if (window.scrollY > 0) {
            nav.classList.replace('navbar-1', 'navbar-2')
            setNavbar(true);
        } else {
            nav.classList.replace('navbar-2', 'navbar-1')
            setNavbar(false);
        }
        //
        // sections.forEach((section, index) => {
        //     if (window.scrollY > section.getBoundingClientRect().top) {
        //         links.forEach((link) => {
        //             link.classList.remove('active');
        //         })
        //         links[index].classList.add('active');
        //     }
        // })
    }
    window.addEventListener('scroll', changeNavbar);
    //__________________________________
    links.forEach((link, index) => {
        link.addEventListener('click', function () {
            links.forEach((one) => {
                one.classList.remove('active');
            })
            link.classList.add('active');
            window.scrollTo({ top: sections[index].offsetTop - 50, behavior: 'smooth' });
        })
    })


    return (
        <>
            <nav className="navbar navbar-expand-md navbar-1 fixed-top">
                <div className="container">
                    <Link to='/' className="navbar-brand">Shortly</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fa-solid fa-bars fa-1x"></i>
                    </button>
                    <div className="collapse navbar-collapse text-center rounded-1" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 px-0">
                            <li className="nav-item">
                                <Link to='' className="link nav-link active" aria-current="page">Features</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='' className="link nav-link">Pricing</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='' className="link nav-link">Resources</Link>
                            </li>
                        </ul>
                        <hr className="w-75 text-muted mx-auto" />
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            {userData ? <li className='parent'>
                                <div className='d-flex align-items-center justify-content-center'>
                                    {userData.first_name + ' ' + userData.last_name}
                                    <div className='profile-pic ms-2'></div>
                                </div>
                                <ul className='child'>
                                    <li className="nav-item mb-1">
                                        <Link to='/profile' className="btn btn-transparent rounded-pill btn-sm px-2 fw-bold">Profile</Link>
                                    </li>
                                    <li className="nav-item">
                                        <button onClick={logOut} className="btn my-btn rounded-pill btn-sm px-2 fw-bold">Logout</button>
                                    </li>
                                </ul>
                            </li> : <>
                                <li className="nav-item">
                                    <Link to='login' className="login btn btn-transparent rounded-pill btn-sm px-2 fw-bold">Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='register' className="btn my-btn rounded-pill btn-sm px-2 fw-bold">Sign Up</Link>
                                </li>
                            </>}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
