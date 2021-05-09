import React from 'react';
import SimpleImageSlider from "react-simple-image-slider";




const Slide = () => {
    const images = [
        { url: "https://i.ibb.co/9qMq4LR/outdoor2.jpg" },
        { url: "https://i.ibb.co/RjZbWRL/outdoor3.jpg" },
        { url: "https://i.ibb.co/RjZbWRL/outdoor3.jpg" },
        
      ];
    return (
        <div>
        <SimpleImageSlider
          width={896}
          height={504}
          images={images}
        />
      </div>
    );
};

export default Slide;
