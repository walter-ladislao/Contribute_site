import React from 'react';
import './Home.css';

function Home() {
    return (
        <div className="min-vh-100">
            <div className="container vh-100 d-flex justify-content-center align-items-center App-header">
                <div className="row h-75 ">
                    <div className="col-12 col-lg-9 d-flex flex-column justify-content-evenly col1Home">
                        <h1 className="text-start tu text-shadowing unbounded-text">Riqualifichiamo i Nostri Giardini Pubblici</h1>
                        <h5 className="text-start unbounded-text">Insieme possiamo ridare vita e bellezza ai nostri spazi verdi condivisi!</h5>
                        <div className="d-flex justify-content-center justify-content-lg-start">
                            <button className="mx-1 mx-lg-4 myButton unbounded-text">Dona Ora</button>
                            <button className='myButtonAlt unbounded-text'>Scopri di più</button>
                        </div>
                    </div>
                    <div className="col-3 d-none d-lg-flex col2Home"></div>
                </div>
            </div>
            
        </div>
    );
}

export default Home;