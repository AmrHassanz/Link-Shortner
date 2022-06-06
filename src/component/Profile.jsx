import React, { useContext, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { MediaContext } from './mediaContext/MediaContext';
import OLink from './OLink';

export default function Profile() {

    let { userData, links } = useContext(MediaContext);
    const [list, setList] = useState(false);

    return (
        <>
            {userData ? <section id='profile'>
                <div className='container'>
                    <div className='d-flex align-items-center justify-content-center'>
                        <div className='text-center w-100'>
                            <div className='img'></div>
                            <h3 className='fw-bold mt-2 mb-5'>{userData.first_name} {userData.last_name}</h3>
                            <button onClick={() => setList(!list)} className='btn my-btn w-100'>My-Links</button>
                            <div className=' overflow-hidden pt-3'>
                                <div className='my-accordion px-3' style={list ? { maxHeight: '800px' } : { maxHeight: '0' }}>
                                    <div className={list ? 'opened' : 'closed'}>
                                        {links.map((link, index) => (<OLink key={index} link={link} index={index} />))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> : <Navigate to='/' />
            }
        </>
    )
}
