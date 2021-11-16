import React, { Suspense, lazy, useState } from "react";
import { Link } from 'react-router-dom';

import routes from '../data/routes';

const Menu = lazy(() => import('react-burger-menu/lib/menus/slide'));

const Hamburger = () => {
    const [open, setOpen] = useState();

    return(
        <div className="hamburger-container">
            <nav className="main" id="hambuger-nav">
                <ul>
                    {open ? (
                        <li className="menu close-menu">
                            <div onClick={() => setOpen(!open)} className="menu-hover">&#10005;</div>
                        </li>
                    ) : (
                        <li className="menu open-menu">
                            <div onClick={() => setOpen(!open)} className="menu-hover">&#9776;</div>
                        </li>
                    )}
                </ul>
            </nav>
            <Suspense fallback={<></>}>
                <Menu right isOpen={open}>
                    <ul className="hamburger-ul">
                        { routes.map( (name) => (
                            <li key={name.label}>
                                <Link to={name.path} onClick={() => setOpen(!open)}>
                                    <h3 className={name.index && 'index-li'}>{name.label}</h3>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </Menu>
            </Suspense>
        </div>
    )
}

export default Hamburger;