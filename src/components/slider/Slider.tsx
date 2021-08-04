import { CSSProperties } from "react";
import Slider from "react-slick";
import { v4 as uuidv4 } from "uuid";

import "../App.scss";

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red", width:"10px", height:"10px" }}
      onClick={onClick}
    />
  );
}


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
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    variableWidth: true,
    adaptiveHeight: true,
    nextArrow: <SampleNextArrow class='slick-my' />,
  };

  const styleImg: CSSProperties = {
    width: "100px",
    height: "100px",
    objectFit: "cover",
    marginRight: "14px",
    border: "1px solid",
    borderRadius: "4px",
  };
  return (
    <div className='slider-wrapper'>
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
