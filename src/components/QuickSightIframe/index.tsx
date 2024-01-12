import React from "react";

interface QuickSightIframeProps {
  url: string;
  width?: string;
  height?: string;
}

const QuickSightIframe: React.FC<QuickSightIframeProps> = ({
  url,
  width = "100%",
  height = "600px",
}) => {
  return (
    <iframe
      src={url}
      title="QuickSight Dashboard"
      width={width}
      height={height}
      style={{ border: "none" }}
    />
  );
};

export default QuickSightIframe;
