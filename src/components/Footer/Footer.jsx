import React from 'react';
import "./Footer.css";


//Footer part 

function Footer() {
    return (
        <div>
            <div className="footer">
                <div className="footer-col-left">
                    <h1 className="footer-logo">FUNDLEY</h1>
                    {/* <img src={'./logo-footer.png'} alt="logo" /> */}
                </div>
                <div className="footer-col-right">
                    {/* <h2 className="alt-heading">For all of us</h2> */}
                    <p>We are passionate about sustainability – a way of protecting and creating new sources of value – for business, people, society and the world as a whole. And that makes it everybody’s business.</p>
                    <p>We acknowledge the traditional owners of the lands on which we live, work and learn and pay our respects to their elders past, present and emerging.</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>Powered by Heruko  |  Website by Sarah Brodrick  |  Copyright 2022</p>
            </div>
        </div>
    );
}
export default Footer;