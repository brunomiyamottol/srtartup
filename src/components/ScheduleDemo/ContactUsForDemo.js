import React, { Component } from 'react';

class ContactUsForDemo extends Component {
    render() {
        return (
        <>
        <section>
        <div id='NewsLetterSingUp'  className="scheduleddemo-area">
            <div className='container'>   
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="container">
                        <div className="coming-soon-content">
                          <div className="col-lg-12">
                              
                            <h1 className='mt-30'>Scehdule a Demo</h1>
                            <p> Get access to Kaaria <br></br> by scheduling a demo and try it out for yourself.</p>
                                {/* <iframe className="" height={490} width={370} src="https://cdn.forms-content.sg-form.com/b82fdb50-747d-11ec-b993-ee74909a89f3"/> */}
                                <div className="slider-btn">
                                    <br />
                                <a className="default-btn active" href="https://calendly.com/kaaria/office-hours?back=1" target="_blank">
                                    SCHEDULE NOW! 
                                </a>

                                {/* <Link href="/sign-up/">
                                    <a className="default-btn white">
                                        BUY NOW
                                    </a>
                                </Link> */}
                            </div>      
                          </div>
                          <div className="col-lg-12">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        </>
        );
    }
}

export default ContactUsForDemo;