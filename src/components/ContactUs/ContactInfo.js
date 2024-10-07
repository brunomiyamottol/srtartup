import React, { Component } from 'react';

class ContactInfo extends Component {
    render() {
        return (
            <div className="contact-info-area pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-sm-6">
                            <div className="single-contact-info">
                                <i className="bx bx-envelope"></i>
                                <h3>Email Us:</h3>
                                <p>info@kaaria.net</p>
                                <p>support@kaaria.net</p>                                
                            </div>
                        </div>

                        {/* <div className="col-lg-3 col-sm-6" >
                            <div className="single-contact-info">
                                <i className="bx bx-phone-call"></i>
                                <h3>Call Us:</h3>
                                <p>Tel. + (55) 800-33-038</p>
                                <p>Area code: +52</p>
                            </div>
                        </div> */}

                        <div className="col-lg-6 col-sm-6">
                            <div className="single-contact-info">
                                <i className="bx bx-location-plus"></i>
                                <h3>Mexico City</h3>
                                <p>Calle Lafayette,<br/> Alvaro Obregon,CDMX, 01810</p>
                            </div>
                        </div>

                        {/* <div className="col-lg-3 col-sm-6">
                            <div className="single-contact-info">
                                <i className="bx bx-support"></i>
                                <h3>Live Chat</h3>
                                <p>live chat all the time click on "Need Help?"</p>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactInfo;