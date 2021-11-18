import React from 'react';
import { Link } from 'react-router-dom';
import Gk from '../static/assets/images/gk-profile.jpg';
import ContactIcons from '../components/contact/ContactIcon'

const { PUBLIC_URL } = process.env;


const SideBar = () => {
    return(
        <>
        <section id="sidebar">
            <section id="intro">
                <Link to="/" className="logo">
                    <img src={Gk} alt="Gopi Krishna M"/>
                </Link>
                <header>
                    <h2>Gopi Krishna M </h2>
                    <p><a href="mailto:muktevigk@oscarmild.me">muktevigk@oscarmild.me</a></p>
                </header>
            </section>
        </section>
        <section id="footer">
            <ContactIcons />
            <p className="copyright">&copy; Oscarmild <Link to="/">oscarmild.me</Link>.</p>
        </section>
    </>
    )
}

export default SideBar;