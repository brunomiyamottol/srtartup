import React, { Component } from "react";
import dynamic from "next/dynamic";
const ModalVideo = dynamic(() => import("react-modal-video"), {
  ssr: false,
});

class AboutUsMainBanner extends Component {
  state = {
    isOpen: false,
  };
  openModal = () => {
    this.setState({ isOpen: true });
  };

  render() {
    return (
      <>
        <div className="main-banner-area">
          <div className="d-table">
            <div className="d-table-cell">
              <div className="container-fluid">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="banner-text mt-30">
                      <h1>
                        ENABLING ENTREPRISES TO ACCESS THEIR FULL POTENTIAL AND DRIVE THEIR BUSINESS FORWARD IS AT THE
                        CORE OF OURS
                      </h1>
                      <p></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* If you want to change the video need to update below videoID */}
        {/* <ModalVideo 
                    channel='youtube' 
                    isOpen={this.state.isOpen} 
                    videoId='_ysd-zHamjk' 
                    autoPlay
                    onClose={() => this.setState({isOpen: false})} 
                /> */}
      </>
    );
  }
}

export default AboutUsMainBanner;
