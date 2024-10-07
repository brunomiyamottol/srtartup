import React, { Component } from 'react';
import Link from 'next/link';
import Image from 'next/image';

class CustomError extends Component {
    render() {
        return (
            <div className="error-area">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="error-content-wrap">
                            <div className=" pr-0">
                            {/* <div className="banner-four-main-img">
                                    
                                </div> */}
                            <h1>4 
                            <Image width='200' height='200' className="animate__animated animate__fadeInRight animate__fast"  src="/images/brands/kaaria-logo-color-400x380.png" alt="Image" />
                             4</h1>
                            <p>Ops… It seems that page you are looking for no longer exists.</p>
                            <Link href="/">
                                <a className="default-btn btn-two">
                                    Return To Home Page
                                </a>
                            </Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CustomError;