// import React from 'react';
// import './Hero.css'

// function Hero() {
//     return (
//         <div className="hero">
//             <div className="title">
//                 Invest in the future.
//                 {/* Invest in the <span className="underline"> future.</span> */}
//                 <h3 className="subtitle">Fundley is an online community where you can either donate to a world-changing startup or start a fund of your own. </h3>
//             </div>
//             <div className="hero-image">
//                 <img className="img" src="https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1438&q=80" alt="Fundley Mission"></img>
//             </div>
//         </div>

//     );
// }

// export default Hero; 

import React from 'react';
import './Hero.css';
// import Banner from 'src/polygonal19.jpg';

function Hero() {
    return (
        <div>
            <div className="hero-banner">
                <div className="hero-banner-text"></div>
                <h1 className='title'>Invest in the future</h1>
                <p className='sub-title'> Fundley is an online community where you can either donate to a world-changing startup or start a fund of your own. Sign up to start today.</p>
                <a className='singUp-button' href="/signup">Sign up</a>
            </div>
        </div>
    );
}
export default Hero;
