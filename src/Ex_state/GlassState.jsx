import React, { useState } from "react";
import GlassIcon from "./GlassIcon";

export default function GlassState() {
  const [imgUrl, setImgUrl] = useState("./img/model.jpg");
  const [selectedGlassUrl, setSelectedGlassUrl] = useState(null);
  const handleChangeGlass = (glassUrl) => {
    setSelectedGlassUrl(glassUrl);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src={imgUrl} alt="glass" width="100%" height="100%" />
          {selectedGlassUrl && (
            <img 
              src={selectedGlassUrl}
              alt="selected glass"
              className="selected-glass"
            />
          )}
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">Choose Glass</div>
            <div className="card-body">
            <GlassIcon onChangeGlass={handleChangeGlass} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
