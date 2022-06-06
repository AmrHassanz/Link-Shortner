import React from 'react';
import mainImg from '../image/illustration-working.svg';


export default function Header() {

    window.addEventListener('scroll', function () {
        let arrow = document.querySelector('.scroll');
        if (window.scrollY > 50) {
            arrow.style.opacity = 1;
        } else {
            arrow.style.opacity = 0;
        }
    })
    function scrollTop() {
        window.scrollTo({ top: '0', behavior: 'smooth' })
    }

    return (
        <>
            <section id="home" className="vh-100 text-center text-md-start scro">
                <div className="container d-flex align-items-center h-100">
                    <div className="d-flex"></div>
                    <div className="mx-auto">
                        <div className="image-top mb-4">
                            <img src={mainImg} className="w-75" alt="" />
                        </div>
                        <h1>More Than Just <br />Shorter Links </h1>
                        <p className="text-muted">Build your brand's recognition and <br /> get detailed insights on how your links are
                            performing</p>
                        <button className="btn my-btn px-3 rounded-pill fw-bold">Get Started</button>
                    </div>
                    <div className="ps-5 image-right">
                        <img src={mainImg} className="w-100" alt="" />
                    </div>
                </div>
                <button onClick={scrollTop} className='scroll'><i className="fa-solid fa-circle-arrow-up fa-2x"></i></button>
            </section>
        </>
    )
}
