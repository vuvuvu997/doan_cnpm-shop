import "./slide.css";
import Carousel from "react-bootstrap/Carousel";

function SlideBar() {
  const listImg = [
    {
      src: "images/slidebar/slidebar1.jfif",
    },
    {
      src: "images/slidebar/slidebar2.jfif",
    },
    {
      src: "images/slidebar/slidebar3.jfif",
    },
    {
      src: "images/slidebar/slidebar4.jfif",
    },
    {
      src: "images/slidebar/slidebar5.jfif",
    },
    {
      src: "images/slidebar/slidebar6.jfif",
    },
    {
      src: "images/slidebar/slidebar7.jfif",
    },
  ];

  function showSlide(items) {
    let result = null;
    if (items.length > 0) {
      result = items.map((item, index) => {
        return (
          <Carousel.Item interval={2000}>
            <img
              key={index}
              className="d-block w-100"
              src={item.src}
              alt="First slide"
            />
          </Carousel.Item>
        );
      });
    }
    return result;
  }

  return (
    <div class="slide-bar__container">
      <Carousel>{showSlide(listImg)}</Carousel>
    </div>
  );
}

export default SlideBar;
