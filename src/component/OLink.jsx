import React, { useContext } from 'react';
import { MediaContext } from './mediaContext/MediaContext';

export default function OLink({ link, index }) {

    let { deleteLink, copyUrl } = useContext(MediaContext);

    return (
        <>
            <div className="row gy-2 pt-4 pb-2 my-2 align-items-center bg-white position-relative">
                <div className="col-md-6">
                    <div className="d-flex align-items-center">
                        <p className="main mb-0">{link.original}</p>
                    </div>
                </div>
                <div className="col-md-6">
                    <div>
                        <div className="row gy-2">
                            <div className="col-md-9 d-flex align-items-center justify-content-md-end justify-content-start">
                                <div>
                                    <a className="short mb-0" href={link.original} target='_black'>{link.short}</a>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div>
                                    <button onClick={() => { copyUrl(index) }} className="btn m-0 my-btn w-100">Copy</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button onClick={() => deleteLink(index)} className="close btn"><i className="fa-solid fa-xmark text-dark"></i></button>
                <p className='my-tooltip'>Copied to Clipboard</p>
            </div>
        </>
    )
}
