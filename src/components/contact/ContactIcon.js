import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import data from '../../data/contact';

const Contact = () => {
    return (
        <ul className="icons">
            {data.map((icon) => {
                <li key={icon.label}>
                    <a href={icon.link}>
                        <FontAwesomeIcon icon={icon.icon}/>
                    </a>
                </li>
            })}
        </ul>
    );
};

export default Contact;