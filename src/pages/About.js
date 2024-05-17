import React from 'react';
import './Home.css';
import Card from "../components/Card";
import contents from '../content';

function About() {
    return (
        <div className="min-vh-100">
            <div className="container p-0 ">
                <div className="container-fluid pt-nav d-flex align-items-center justify-content-start pt-4 App-header">
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
            <div className="container p-0">
                <div className="container-fluid pt-nav d-flex align-items-center justify-content-start pt-4 App-header">
                    <div className="row w-100 bg-sections b-rounded p-4 justify-content-around text-shadowing">
                        <div className="col-12  d-flex align-items-center justify-content-center mb-2">
                            <h2 className="unbounded-text tu text-center">Blog</h2>
                        </div>
                        {contents.slice(0, 8).map(contents => (
                        <Card
                            key={contents.id}
                            image={contents.image}
                            name={contents.name}        
                            title={contents.title} 
                            text={contents.text}
                        />
                    ))}
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;