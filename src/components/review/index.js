import React, { useEffect, useState } from "react";
import "./review.css";
import ReviewItem from "./../review-item";
import axios from "axios";

function showListReview(list) {
  let result = null;
  if (list.length > 0) {
    result = list.map((item) => {
      return <ReviewItem key={item.id} data={item} />;
    });
  }
  return result;
}

function Review(props) {
  const [listReview, setListReview] = useState();

  const { dataProduct } = props;
  const id = dataProduct.id;
  useEffect(() => {
    const fetchReviewList = async () => {
      try {
        const response = await axios.get(
          `https://your-ecommerce.herokuapp.com/products/${id}/reviews`
        );
        setListReview(response.data.reviews);
      } catch (error) {
        console.log(error);
      }
    };
    fetchReviewList();
  }, [id]);

  return (
    <div className="review">
      <div className="grid wide">
        <div className="review__container">
          <h2 className="review__title">Đánh giá sản phẩm</h2>
          <div className="review__header">
            <div className="row">
              <div className="col l-2">
                <div className="review__header__left">
                  <p>
                    <span className="review__header__left__special">5</span>{" "}
                    trên <span>5</span>
                  </p>
                  <p>
                    <i class="fa fa-star-o" aria-hidden="true"></i>
                    <i class="fa fa-star-o" aria-hidden="true"></i>
                    <i class="fa fa-star-o" aria-hidden="true"></i>
                    <i class="fa fa-star-o" aria-hidden="true"></i>
                    <i class="fa fa-star-o" aria-hidden="true"></i>
                  </p>
                </div>
              </div>
              <div className="col l-10">
                <div className="review__header__right">
                  <button className="btn_1 btn_1--primary">Tất Cả</button>
                  <button className="btn_1 btn_1--primary">5 Sao</button>
                  <button className="btn_1 btn_1--primary">4 Sao</button>
                  <button className="btn_1 btn_1--primary">3 Sao</button>
                  <button className="btn_1 btn_1--primary">2 Sao</button>
                  <button className="btn_1 btn_1--primary">1 Sao</button>
                  <button className="btn_1 btn_1--primary">Có Bình Luận</button>
                  <button className="btn_1 btn_1--primary">
                    Có Hình Ảnh/ Có Video
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="review__content">
            {listReview ? showListReview(listReview) : <h2>No have review.</h2>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Review;
