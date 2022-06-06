import React, { useContext } from 'react';
import { MediaContext } from './mediaContext/MediaContext';
export default function Shortner() {

    let { alert, loader, handleForm, handleInput,input } = useContext(MediaContext);

    return (
        <>
            <section id="shortner">
                <div className="container px-0">
                    <div className="short position-relative">
                        <img />
                        <div className="layer">
                            <form onSubmit={handleForm} className="row w-100 g-3">
                                <div className="col-md-9">
                                    <div className="position-relative">
                                        <div style={!alert ? { opacity: '0' } : { opacity: '1' }} className="alert alert-danger py-0">{!alert ? '' : 'Ex. www.google.com'}</div>
                                        <input onChange={handleInput} id="shortnerInput" placeholder="Shorten a link here" type="text" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div>
                                        <button type="submit" id="shortnerBtn" className="btn my-btn w-100 text-nowrap">{loader ? <i class="fa-solid fa-spinner fa-spin"></i> : 'Shortenit!'}</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
