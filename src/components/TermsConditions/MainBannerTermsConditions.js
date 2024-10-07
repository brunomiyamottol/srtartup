import React, { Component } from 'react';
// import Link from 'next/link';
import dynamic from 'next/dynamic';
const ModalVideo = dynamic(() => import('react-modal-video'), {
    ssr: false
});

class MainBanner extends Component {

    state = {
        isOpen: false,
    }
    openModal = () => {
        this.setState({isOpen: true})
    }

    render() {
        return (
            <>
                <div className="main-banner-area main-banner-area-four">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="banner-text">
                                    <h1>TERMS & CONDITIONS
                                    </h1>
                                    {/* <p>Your access to and usage of the KAARIA Services, provided by TechFin Tecnologia S.A. de C.V. 
                                        (henceforth referred to as “KAARIA”), located at Lafayette, 10, 01810, 
                                        CDMX, mexico, registered in Mexico with Fiscal Identification Number (RFC) , 
                                        is governed by the following Terms and Conditions. In order to make use of the KAARIA Services, 
                                        you need to agree to the Terms. KAARIA reserves the right to amend these Terms and Conditions at all times, 
                                        with or without a prior notice. These Terms constitute a binding legal agreement between you and KAARIA, 
                                        governed by the laws of Mexico.</p> */}
                                    
                                    <div className="banner-btn col-lg-12 text-center">
                                        {/* <Link href="/about-1">
                                            <a className="default-btn">
                                                Shchedule a demo
                                            </a>
                                        </Link> */}

                                        {/* <div className="default-btn active"> 
                                            <i className="bx bx-download"></i> <span className=' ml-30 mr-30'> DOWLOAD SAMPLE </span>  
                                        </div> */}
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 pr-0">
                                <div className="banner-four-main-img">
                                    {/* <img className="animate__animated animate__fadeInRight animate__fast" src="/images/home-four/main-img4.png" alt="Image" /> */}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Shape Images */}
                    <div className="">
                        {/* <img src="/images/home-one/shape/animate1.png" alt="Image" />
                        <img src="/images/home-one/shape/animate1.png" alt="Image" />
                        <img src="/images/home-one/shape/animate2.png" alt="Image" />
                        <img src="/images/home-one/shape/animate2.png" alt="Image" />
                        <img src="/images/home-one/shape/animate3.png" alt="Image" /> */}
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

export default MainBanner;