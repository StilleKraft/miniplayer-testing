"use client";
import React from "react";

const page = () => {
  return (
    <video
      src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      title="Example video"
      autoPlay={true}
      style={{ maxHeight: "100vh", maxWidth: "100vw" }}
      controls
    />
  );
};

export default page;
