import React, { Component } from 'react';
import Link from 'next/link';

class TeamCard extends Component {
    render() {
        return (
            <section className="team-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <div className="single-team active">
                                <div className="team-single-img">
                                    <img src="/images/team/team2.jpeg" alt="Image" />

                                    <div className="team-img">
                                        {/* <img src="/images/team/team-shape.png" alt="Image" /> */}
                                    </div>
                                </div>

                                <div className="team-content">
                                    <h3>Humberto Cabral</h3>
                                    <span>Founder & Board Member</span>

                                    <ul>
                                        <li>
                                            <Link href="" legacyBehavior>
                                                <a href='https://www.linkedin.com/in/humbertocabralgonzalez/' target="_blank"><i className="bx bxl-linkedin"></i></a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="single-team active">
                                <div className="team-single-img">
                                    <img src="/images/team/team1.jpeg" alt="Image" />
                                </div>

                                <div className="team-content">
                                    <h3>Bruno Miyamotto</h3>
                                    <span>Founder & Managing Partner</span>

                                    <ul>
                                        <li>
                                            <Link href="" legacyBehavior>
                                                <a href='https://www.linkedin.com/in/brunomiyamottoluque/' target="_blank"><i className="bx bxl-linkedin"></i></a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="single-team active">
                                <div className="team-single-img">
                                    <img src="/images/team/team3.jpeg" alt="Image" />
                                </div>

                                <div className="team-content">
                                    <h3>Marcelo Rosa</h3>
                                    <span>Founder & Board Member </span>

                                    <ul>
                                        <li>
                                            <Link href="" legacyBehavior>
                                                <a href='https://www.linkedin.com/in/marcelo-rosa-89990681/' target="_blank"><i className="bx bxl-linkedin"></i></a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
 
                        <div className="col-lg-3 col-sm-6">
                            <div className="single-team active">
                                <div className="team-single-img">
                                    <img src="/images/team/team4.jpeg" alt="Image" />
                                </div>

                                <div className="team-content">
                                    <h3>Gisele Bellon</h3>
                                    <span>Product Delivery</span>

                                    <ul>
                                        <li>
                                            <Link href="" legacyBehavior>
                                                <a href='https://www.linkedin.com/in/gisele-bellon-417ba94/' target="_blank"><i className="bx bxl-linkedin"></i></a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-lg-3 col-sm-6">
                            <div className="single-team active">
                                <div className="team-single-img">
                                    <img src="/images/team/team5.jpeg" alt="Image" />
                                </div>

                                <div className="team-content">
                                    <h3>Andre Costa</h3>
                                    <span>Architecture</span>

                                    <ul>
                                        <li>
                                            <Link href="/team/#">
                                                <a target="_blank"><i className="bx bxl-linkedin"></i></a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="single-team active">
                                <div className="team-single-img">
                                    <img src="/images/team/team6.jpeg" alt="Image" />
                                </div>

                                <div className="team-content">
                                    <h3>Leticia Rosa</h3>
                                    <span>Lead BackEnd </span>

                                    <ul>
                                        <li>
                                            <Link href="/team/#">
                                                <a target="_blank"><i className="bx bxl-linkedin"></i></a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
        );
    }
}

export default TeamCard;


  