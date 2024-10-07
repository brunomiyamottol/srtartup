import React, { Component } from 'react';
import dynamic from 'next/dynamic'; 
const ModalVideo = dynamic(() => import('react-modal-video'), {
    ssr: false
});

class Partners extends Component {

    state = {
        isOpen: false,
    }
    openModal = () => {
        this.setState({isOpen: true})
    }
/* 
  style.css main-banner-area = aboutus-partner-area  

*/
    render() {
        return (
            <>
                <div className="aboutus-partner-area">
                    <div className="container-fluid">
                        <div className="banner-text ">
                            <h1 className='text-center'>Kaaria is part of Kognit Venture Capital</h1>
                                <p></p>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-sm-6">
                                <div className="banner-text">
                                    <img className="text-center" src="/images/about-us/klogo1.png" alt="Image" />
                                    <h1>We are Kognit.</h1>
                                    <p>Multinational IT services and consulting company.</p>
                                    <p>We develop unique and innovative digital solutions for the corporate market.</p>
                                    <p> We have +18 years of experience supporting global companies to use technology for positively transform their businesses, their markets and the world.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-6">
                            <div className="banner-text">

                                
                                <p><div className="display-2 font-weight-bold py-2">
                                10
                                </div>COUNTRIES</p>
                                <p><div className="display-2 font-weight-bold py-2">
                                3
                                </div>CONTINENTS</p>
                                <p> <span>+1M</span><br />MILLION HOURS OF DELIVERED PROJECTS</p>
                                
                                </div>
                            </div>
                            {/* <div className="col-lg-6 col-sm-6">
                                    <div className="row align-items-center">
                                            <div className="col-lg-6 col-sm-6">
                                                <p></p>
                                                <img className="finproc-content" src="/images/favicon.png" alt="Image" />
                                            </div>
                                            <div className=" banner-text col-lg-12 col-sm-12">
                                            <p> <span>10</span>  <br />COUNTRIES</p>
                                            <p> <span>3</span>  <br />CONTINENTS</p>
                                            <p> <span>+1M</span>  <br />million hours</p>
                                            </div>
                                    </div>
                            </div> */}

                        </div>
                    </div>
                </div>

                {/* If you want to change the video need to update below videoID */}
                <ModalVideo 
                    channel='youtube' 
                    isOpen={this.state.isOpen} 
                    videoId='_ysd-zHamjk' 
                    autoPlay
                    onClose={() => this.setState({isOpen: false})} 
                />
            </>
        );
    }
}

export default Partners;
