import React from 'react';
import './Home.css';
import {Link} from "react-router-dom";

function Home() {
    return (
        <div className="min-vh-100">
            <div className="container vh-100 d-flex justify-content-center align-items-center App-header">
                <div className="row h-75 ">
                    <div className="col-12 col-lg-9 d-flex flex-column justify-content-evenly col1Home px-5">
                        <h1 className="text-start tu text-shadowing unbounded-text">Riqualifichiamo i Nostri Giardini Pubblici</h1>
                        <h5 className="text-start unbounded-text">Insieme possiamo ridare vita e bellezza ai nostri spazi verdi condivisi!</h5>
                        <div className="d-flex justify-content-center justify-content-lg-start">
                        <Link to="/donation" className='myLinks text-start unbounded-text text-light text-shadowing'><button className="mx-1 mx-lg-4 myButton unbounded-text">Dona Ora</button></Link>
                            
                            <Link to="/about" className='myLinks text-start unbounded-text text-light text-shadowing'><button className='myButtonAlt unbounded-text'>Scopri di più</button></Link>
                        </div>
                    </div>
                    <div className="col-3 d-none d-lg-flex col2Home"></div>
                </div>
            </div>
            <div className="container p-0">
                <div className="container-fluid d-flex align-items-center justify-content-start pt-4 App-header">
                    <div className="row w-100 bg-sections b-rounded p-4 justify-content-around text-shadowing">
                        <div className="col-12 vh-40 d-flex align-items-center">
                            <h2 className="unbounded-text tu text-start">I Benefici di Giardini Pubblici Curati</h2>
                        </div>
                        <div className="col-12 col-md-3 vh-40 b-rounded bg-mini-sections p-4 mb-4">
                            <h3 className="unbounded-text fs-1 text-start">Benessere Fisico</h3>
                            <p className="text-start ">Spazi verdi inviato all'attività fisica, migliorando la salute e la forma fisica.</p> 
                        </div>
                        <div className="col-12 col-md-3 vh-40 b-rounded bg-card-alt p-4 mb-4">
                            <h3 className="unbounded-text fs-1 text-end text-lg-start">Valore Economico</h3>
                            <p className="text-end text-lg-start">Aree verdi attrattive aumentano il valore degli immobili circostanti.</p> 
                        </div>
                        <div className="col-12 col-md-3 vh-40 b-rounded bg-mini-sections p-4 mb-4">
                            <h3 className="unbounded-text fs-1 text-start">Bellezza e Armonia</h3>
                            <p className="text-start mb">Giardini curati e fioriti apportano un tocco di eleganza e tranquillità alla città.</p> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;