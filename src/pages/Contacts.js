import React from 'react';
import './Home.css';

function Contacts() {
    return (
        <div className="min-vh-100 App-header">
            <div className="container bg-danger vh-100 d-flex justify-content-center align-items-center ">
                <div className="row h-75 w-100 p-1 justify-content-evenly bg-warning flex-column-reverse flex-lg-row">
                    <div className="col-12 col-lg-7 p-1 d-flex flex-column b-rounded col1Home justify-content-center">
                        <h2 className='unbounded-text  tu'>Fondatore</h2>
                        <p>Tizo Sempronio</p>
                    </div>
                    <div className="col-12 col-lg-4 b-rounded col2Home">
                        ciao
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contacts;