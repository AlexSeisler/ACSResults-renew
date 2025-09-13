import React from 'react';

export const MissionVideo = () => {
  return (
    <div className="rounded-2xl overflow-hidden">
      <video 
        className="w-full aspect-video object-cover"
        controls 
        poster="/content/images/thumb.png"
      >
        <source src="/content/videos/ACS-ResultsVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};