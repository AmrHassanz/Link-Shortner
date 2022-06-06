import React, { useContext } from 'react';
import { MediaContext } from './mediaContext/MediaContext';
import OLink from './OLink';
export default function Links() {

    let { links } = useContext(MediaContext);

    return (
        <>
            <section id="links">
                <div className="container py-2">
                    <div className="my-3">
                        {links.map((link, index) => (<OLink key={index} link={link} index={index} />))}
                    </div>
                </div>
            </section>
        </>
    )
}
