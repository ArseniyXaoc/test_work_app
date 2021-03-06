import { CSSProperties } from "react";
import Slider from "react-slick";
import { v4 as uuidv4 } from "uuid";

import "../App.scss";

function Slide({
  photos,
}: {
  photos: {
    owner_id: string;
    url_small: string;
    url_thumb: string;
    url_original: string;
    url_large: string;
  }[];
}) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    variableWidth: true,
    adaptiveHeight: true,
  };

  const styleImg: CSSProperties = {
    width: "250px",
    height: "100px",
    objectFit: "cover",
    margin: "10px",
    border: "3px solid",
    borderRadius: "10px",
  };
  return (
    <div>
      <h3>Фото товара</h3>
      <Slider {...settings}>
        {photos.map((data) => {
          return (
            <div key={uuidv4()}>
              <img style={styleImg} src={data.url_large} alt="" />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default Slide;
