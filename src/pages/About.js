import React from 'react';
import './Home.css';
import Card from "../components/Card";
import contents from '../content';

function About() {
    return (
        <div className="min-vh-100">
            
            <div className="container p-0">
                <div className="container-fluid pt-nav d-flex align-items-center justify-content-start pt-4 App-header">
                    <div className="row w-100  b-rounded p-4 justify-content-around text-shadowing">
                        <div className="col-12  d-flex align-items-center justify-content-center mb-2">
                            <h2 className="unbounded-text tu text-center blog">Blog</h2>
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