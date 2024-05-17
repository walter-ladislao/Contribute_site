import * as Icon from 'react-bootstrap-icons';

function Footer() {
    return (
        <div>
            <footer className='footer d-flex justify-content-center align-items-center mt-5'>
                <div className='container h-100'>
                    <div className='row h-100  justify-content-center align-items-center'>
                        <div className='col-12 col-lg-6 w-75 white-bt-border '>
                            <div className='row'>
                                <div className='col-3 p-4'>
                                    <span className='mylink'>
                                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><Icon.Instagram size={40} color="white" className='insta'/></a>
                                    
                                    </span>
                                
                                </div>
                                <div className='col-3 p-4'>
                                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><Icon.Facebook size={40} color="white" className='insta mylink'/></a>
                                
                                </div>
                                <div className='col-3 p-4'>
                                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><Icon.Linkedin size={40} color="white" className='insta mylink'/></a>
                                
                                </div>
                                <div className='col-3 p-4'>
                                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><Icon.TwitterX size={40} color="white" className='insta mylink'/></a>
                                
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-lg-6 unbounded-text text-light text-shadowing p-2 pb-0'>
                        © 2024 Company, Inc Tel. +123456789 Via Roma
                        </div>
                    </div>        
                </div>
            </footer>
        </div>
    );
}

export default Footer;