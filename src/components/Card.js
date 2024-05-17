import React from 'react';
// import * as Icon from 'react-bootstrap-icons';

function Card(props) {
    return (
        
            <div className="col-12 col-md-5 bg-card b-rounded p-4 mb-4">
                <div key={props.id} className='productCard d-flex flex-column'>
                    <div className='mb-2'>
                        <h2 className='productName text-light unbounded-text '>
                            {props.name}
                        </h2>
                    </div>
                    
                        <div className='myCardImg mb-2'>
                        <img src={props.image} alt='product-img' className='productImage rounded'></img>
                        </div>               
                        <h3>{props.title}</h3>
                        
                        <p className='cardText'>{props.text}</p>
                        
                        
                        
                    
                </div> 
            </div>            
        
    );
}

export default Card;