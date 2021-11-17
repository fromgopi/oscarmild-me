import React from "react";
import { Link } from 'react-router-dom';
import Main from "../../container/layout/Main";

const Index = () => {
    return(
        <Main description={"Oscarmilds's personal website. New" + 
        "Founder and CEO of ATG Labs Pvt Ltd"}>
            <article className="post" id="index">
                <header>
                    <div className="title">
                        <h2 data-testid="heading"><Link to="/about">About this site</Link></h2>
                        <p>
                            A beautiful, responsive, statically-generated,
                            react application written with modern Javascript.
                        </p>
                    </div>
                </header>
            </article>
        </Main>
    );
}

export default Index;