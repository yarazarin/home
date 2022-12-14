import React from "react";
import "./ImgGallery.css";
import { Link } from "react-router-dom";

const ImgGallery = ({ to, img, titles,idrt }) => {
  return (
    <div className="img_dis" id = {idrt}>
      <Link to={to}>
        <img src={img} />
        <span className="content-image">{titles}</span>
      </Link>
    </div>
  );
};

export default ImgGallery;
