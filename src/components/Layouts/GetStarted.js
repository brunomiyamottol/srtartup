import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import dynamic from "next/dynamic";
import 'react-modal-video/scss/modal-video.scss';

// Dynamic import to disable server-side rendering
const ModalVideoComponent = dynamic(() => import("react-modal-video"), {
  ssr: false,
});

export default function TakeAPeak() {
  const { t } = useTranslation();
  const videoId = 'mU8YUV-amT8';  // Replace with the actual YouTube video ID
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;  // YouTube thumbnail URL
  const [isOpen, setIsOpen] = useState(false);  // State to manage modal open/close

  useEffect(() => {
    // Open the modal when the page loads
    setIsOpen(true);
  }, []);

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <>
      <div className="mt-5 flex justify-left">
        <div className="w-full sm:w-full lg:w-4/5 py-6 flex flex-wrap justify-center" style={{ zIndex: 1 }}>
          {/* YouTube video thumbnail preview */}
          <div
            onClick={(e) => { e.preventDefault(); openModal(); }}  // Make image clickable
            style={{ cursor: 'pointer', position: 'relative', maxWidth: '75%', maxHeight: '50%' }}
          >
            <img src={thumbnailUrl} alt="Video Preview" style={{ width: '150%', height: 'auto' }} />
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                fontSize: '50px',
                color: '#fff',
              }}
            >
              <i className="bx bx-play-circle"></i>  {/* Play icon overlay */}
            </div>
          </div>
        </div>
      </div>

      <ModalVideoComponent
        channel="youtube"
        videoId={videoId}  // Use dynamic video ID
        isOpen={isOpen}  // Modal state controls visibility
        onClose={() => setIsOpen(false)}  // Close the modal
      />
    </>
  );
}
