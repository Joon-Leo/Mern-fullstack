import React from "react";

import "./Avatar.css";

export type AvatarProps = {
  image: string;
  alt: string;
  width?: string;
  className?: string;
  style?: React.CSSProperties;
};

const Avatar = ({ image, alt, width, className, style }: AvatarProps) => {
  return (
    <div className={`avatar ${className}`} style={style}>
      <img src={image} alt={alt} style={{ width: width, height: width }} />
    </div>
  );
};

export default Avatar;
