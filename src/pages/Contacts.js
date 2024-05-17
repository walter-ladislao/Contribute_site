import React from 'react';
import './Home.css';

function Contacts() {
    return (
        <div className="min-vh-100 App-header">
            <div className="container bg-sezione pt-nav d-flex justify-content-center align-items-center ">
                <div className="row h-75 w-100 p-1 justify-content-evenly  flex-column-reverse flex-lg-row">
                    <div className="col-12 col-lg-7 p-1 d-flex flex-column b-rounded col1Home justify-content-center p-5">
                        <h1 className='unbounded-text text-start'>Cecilia Van den Heuvel</h1>
                        <h2 className='text-secondary text-start'>Fondatrice del Progetto</h2>
                        <p className='cardText text-start'>Cecilia Van den Heuvel, la promotrice del progetto di ristrutturazione dei giardini pubblici, ha accumulato una vasta esperienza nel settore della progettazione del paesaggio e della conservazione ambientale. Dopo aver conseguito una laurea in Architettura del Paesaggio presso l'Università di Amsterdam, Cecilia ha trascorso oltre dieci anni lavorando come architetto del paesaggio presso uno studio rinomato, dove ha guidato numerosi progetti di design urbano e rurale.</p>
                    </div>
                    <div className="col-12 col-lg-4 b-rounded d-none d-lg-flex col23Home">
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contacts;