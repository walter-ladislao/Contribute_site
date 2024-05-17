import React, { useState, useEffect } from 'react';

function Donation() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [numero, setNumero] = useState('');
    const [fondiRaccolti, setFondiRaccolti] = useState(() => {
        const fondiRaccoltiStorage = localStorage.getItem('fondiRaccolti');
        return fondiRaccoltiStorage ? parseInt(fondiRaccoltiStorage) : 0;
    });

    
    useEffect(() => {
        localStorage.setItem('fondiRaccolti', fondiRaccolti.toString());
    }, [fondiRaccolti]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const nuovoNumero = parseInt(numero);
        setFondiRaccolti(prevFondi => prevFondi + nuovoNumero);
        setNome('');
        setEmail('');
        setNumero('');
    };

    const handleNumeroChange = (e) => {
        setNumero(e.target.value);
    };

    return (
        <div className="min-vh-100 ">
            <div className="container vh-100 d-flex justify-content-center align-items-center App-header">
                <div className="row w-100 h-75 flex-column-reverse flex-lg-row">
                    <div className="col-12 col-md-6 d-flex flex-column justify-content-evenly col1Home p-3">
                        <div>
                            <h1 className="text-center text-shadowing unbounded-text  tu">Dona ora!</h1>
                            <h5 className="text-center unbounded-text">Insieme possiamo ridare vita e bellezza ai nostri spazi verdi condivisi!</h5>
                        </div>
                        <form onSubmit={handleSubmit} className='p-3 b-rounded bg-card'>
                            <div className='d-flex flex-column'>
                                <label htmlFor="nome" className='unbounded-text text-shadowing text-start'>Nome</label>
                                <input 
                                    type="text" 
                                    id="nome" 
                                    value={nome} 
                                    onChange={(e) => setNome(e.target.value)} 
                                    className='rounded mb-2 my-input'
                                    required 
                                />
                            </div>
                            <div  className='d-flex flex-column'>
                                <label htmlFor="email" className='unbounded-text text-shadowing text-start'>Email</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    value={email} 
                                    onChange={(e) => setEmail(e.target.value)}
                                    className='rounded mb-2 my-input' 
                                    required 
                                />
                            </div>
                            <div className='d-flex flex-column'>
                                <label htmlFor="numero"  className='unbounded-text text-shadowing text-start mx-2'>Importo</label>
                                <input 
                                    type="number" 
                                    id="numero" 
                                    value={numero} 
                                    onChange={handleNumeroChange}
                                    className='rounded mb-2 my-input' 
                                    required 
                                />
                            </div>
                            <button type="submit" className='myButtonAlt p-1 px-4'>Invia</button>
                        </form>
                    </div>
                    <div className="col-12 col-md-6  col-right d-flex justify-content-center align-items-center flex-column">
                        <h2 className="text-center text-shadowing unbounded-text fs-1">Fondi Raccolti:</h2>
                        <p className='text-shadowing unbounded-text fa-1 tu'>{fondiRaccolti}€</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Donation;
