import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./slide.css";

class SlideBar extends Component {
  state = {
    listImg: [
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
    ],
  };

  showSlide(items) {
    let result = null;
    if (items.length > 0) {
      result = items.map((item, index) => {
        return (
          <div key={index}>
            <img src={item.src} alt="" />
          </div>
        );
      });
    }
    return result;
  }

  render() {
    let { listImg } = this.state;
    return (
      <div className="slide-bar">
        <div className="grid wide">
          <div className="row">
            <div className="col l-8">
              <div class="slide-bar__container">
                <Carousel>{this.showSlide(listImg)}</Carousel>
              </div>
            </div>
            <div className="col l-4">
              <div className="slide-bar__more">
                <div className="row">
                  <div className="col l-12">
                    <div className="slide-bar__detail">
                      <img
                        src="/images/slidebar/slide-detail1.jfif"
                        alt=""
                        className="slide-bar__detail-img"
                      />
                    </div>
                  </div>
                  <div className="col l-12">
                    <div className="slide-bar__detail">
                      <img
                        src="/images/slidebar/slide-detail2.jfif"
                        alt=""
                        className="slide-bar__detail-img"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SlideBar;
