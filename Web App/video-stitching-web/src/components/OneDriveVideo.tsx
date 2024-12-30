import React from "react";

const OneDriveVideo: React.FC = () => {
  const videoUrl =
    "https://onedrive.live.com/embed?cid=https://1drv.ms/v/c/6ac7ab93826111ed/EQM-h5Wdf61DoV2TUuGnieMBZi4305yVpy2MOguNLeCpFQ?e=vQWibm";

  return (
    <div>
      <h1>OneDrive Video</h1>
      <iframe
        src={videoUrl}
        width="640"
        height="360"
        frameBorder="0"
        allowFullScreen
        title="OneDrive Video"
      ></iframe>
    </div>
  );
};

export default OneDriveVideo;
