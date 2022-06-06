import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <>
            <footer id="footer" className="text-center text-md-start py-5 scro">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-md-3">
                            <div>
                                <h3 className="fw-bold text-white">Shortly</h3>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div>
                                <h6>Features</h6>
                                <ul className="list-unstyled text-muted">
                                    <li><Link to=''>Link Shotening</Link></li>
                                    <li><Link to=''>Branded Links</Link></li>
                                    <li><Link to=''>Analytics</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div>
                                <h6>Resources</h6>
                                <ul className="list-unstyled text-muted">
                                    <li><Link to=''>Blog</Link></li>
                                    <li><Link to=''>Developers</Link></li>
                                    <li><Link to=''>Support</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div>
                                <h6>Company</h6>
                                <ul className="list-unstyled text-muted">
                                    <li><Link to=''>About</Link></li>
                                    <li><Link to=''>Our Team</Link></li>
                                    <li><Link to=''>Careers</Link></li>
                                    <li><Link to=''>Contact</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="d-flex justify-content-center">
                                <Link to=''><i className="icon fa-brands fa-facebook-square fa-2x"></i></Link>
                                <Link to=''><i className="icon fa-brands fa-twitter-square fa-2x"></i></Link>
                                <Link to=''><i className="icon fa-brands fa-pinterest-square fa-2x"></i></Link>
                                <Link to=''><i className="icon fa-brands fa-instagram-square fa-2x"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
