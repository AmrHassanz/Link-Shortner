import React from 'react';
import image1 from '../image/icon-brand-recognition.svg';
import image2 from '../image/icon-detailed-records.svg';
import image3 from '../image/icon-fully-customizable.svg';

export default function Statistics() {
    return (
        <>
            <section id="stat" className='scro'>
                <div className="container pb-5">
                    <div className="text-center mt-5">
                        <h4 className="fw-bold mb-3">Advanced Statistics</h4>
                        <p className="text-muted mb-5">Track how your links are performing across the web with <br/> our advanced statistics
                            dashboard</p>
                    </div>
                    <div className="position-relative">
                        <div className="hz-line"></div>
                        <div className="row row-cols-1 row-cols-md-3 gy-5">
                            <div className="col">
                                <div className="card position-relative one">
                                    <div className="card-img">
                                        <img src={image1} className="w-50" alt="..."/>
                                    </div>
                                    <div className="card-body mt-4">
                                        <h5 className="card-title fw-bold">Brand Recognition</h5>
                                        <p className="my-3 text-muted pe-3">This is a longer card with supporting text below as a natural lead-in to
                                            additional
                                            content. This content is a little bit longer.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card position-relative two">
                                    <div className="card-img">
                                        <img src={image2} className="w-50" alt="..."/>
                                    </div>
                                    <div className="card-body mt-4">
                                        <h5 className="card-title fw-bold">Dttailed Records</h5>
                                        <p className="my-3 text-muted pe-3">This is a longer card with supporting text below as a natural lead-in to
                                            additional
                                            content. This content is a little bit longer.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card position-relative three">
                                    <div className="card-img">
                                        <img src={image3} className="w-50" alt="..."/>
                                    </div>
                                    <div className="card-body mt-4">
                                        <h5 className="card-title fw-bold">Fully Customizable</h5>
                                        <p className="my-3 text-muted pe-3">This is a longer card with supporting text below as a natural lead-in to
                                            additional
                                            content. This content is a little bit longer.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
