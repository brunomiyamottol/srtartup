import React, { Component } from 'react';
import dynamic from 'next/dynamic';
// import ContactFormStyleTwo from './ContactFormStyleTwo';
// import ContactInfo from '../Home/ContactInfo';

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
                                    <h1>LET'S GET IN TOUCH!
                                    </h1>
                                    <p> If you have any questions on our services, you think we should collaborate, for media inquiries or if you’d simply like to know more about us – we’re always happy to connect</p>
                                    
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
                {/* <ContactInfo /> */}
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