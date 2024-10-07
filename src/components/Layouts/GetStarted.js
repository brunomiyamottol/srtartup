import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import dynamic from "next/dynamic";

const ModalVideo = dynamic(() => import("react-modal-video"), {
  ssr: false,
});

// const VideoUrl = {
//   ["en"]: "https://youtu.be/l2Kgl1meiUk?si=vjYI5f_Yin2SizDx",
//   ["es"]: "https://app.kaaria.ai/#/login?createAccount=true",
//   ["pt"]: "https://app.kaaria.ai/#/login?createAccount=true",
// };

export default function TakeAPeak() {
  const { t } = useTranslation();

  // const [isOpen, setIsOpen] = useState(false);
  // const [stateVideoURL, setStateVideoURL] = useState("");

  // useEffect(() => {
  //   const browserShortLanguage = navigator?.language?.substring(0, 2)?.toLowerCase();
  //   const video = VideoUrl[browserShortLanguage ?? "en"] ?? VideoUrl["en"];

  //   setStateVideoURL(video);
  // }, []);

  const videoId = 'l2Kgl1meiUk';  // Replace this with the actual YouTube video ID
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;  // Thumbnail URL

  
  const [isOpen, setIsOpen] = useState(false);  // useState for managing state
  const openModal = () => {
    setIsOpen(true);  // Update state without 'this'
  };

  // function handleOpenModal() {
  //   setIsOpen(true);

  //   window.open(stateVideoURL, "_blank");
  // }

  // function handleCloseModal() {
  //   setIsOpen(false);
  // }

  return (
    <>
      <div className="mt-5 flex justify-left">
        <div className="w-full sm:w-full lg:w-4/5 lg:w-full py-6 flex flex-wrap justify-center" style={{ zIndex: 1 }}>
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
      <ModalVideo 
          channel='youtube'
          videoId='l2Kgl1meiUk?si=c--si1w2ZzZy6MTb'  // YouTube video ID goes here
          isOpen={isOpen}  // Use state variable isOpen
          onClose={() => setIsOpen(false)}  // Close the modal with setIsOpen
        />
    </>
  );
}
