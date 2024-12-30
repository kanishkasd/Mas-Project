import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./CategoryPage.css";

interface CategoryParams {
  name: string;
}

const CategoryPage: React.FC = () => {
  const { name } = useParams<CategoryParams>();
  const navigate = useNavigate();
  const [videos, setVideos] = useState<string[]>([]);
  const [oneDriveLink, setOneDriveLink] = useState<string>("");

  const handleAddVideo = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const files = Array.from(event.target.files);
      setVideos((prev) => [...prev, ...files.map((file) => file.name)]);
    }
  };

  const handleStitchVideos = () => {
    alert(`Stitching ${videos.length} videos`);
  };

  const handleSetOneDriveLink = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setOneDriveLink(event.target.value);
  };

  return (
    <div className="category-container">
      <h1>{name}</h1>
      <button onClick={() => navigate("/")}>Back to Home</button>
      <div className="video-list">
        {videos.length === 0 ? (
          <p>No videos added yet.</p>
        ) : (
          <ul>
            {videos.map((video, index) => (
              <li key={index}>{video}</li>
            ))}
          </ul>
        )}
      </div>
      <div className="actions">
        <input
          type="file"
          accept="video/*"
          multiple
          onChange={handleAddVideo}
        />
        <button onClick={handleStitchVideos} disabled={videos.length === 0}>
          Stitch Videos
        </button>
      </div>
      <div className="one-drive">
        <h3>OneDrive Video</h3>
        <input
          type="text"
          placeholder="Enter OneDrive video link"
          value={oneDriveLink}
          onChange={handleSetOneDriveLink}
        />
        {oneDriveLink && (
          <iframe
            src={oneDriveLink}
            width="640"
            height="360"
            frameBorder="0"
            allowFullScreen
            title="OneDrive Video"
          ></iframe>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
