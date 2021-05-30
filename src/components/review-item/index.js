import React from "react";
import "./reviewItem.css";

function showRating(value) {
  let result = [];
  for (let i = 0; i < value; i++) {
    result.push(<i className="fa fa-star" aria-hidden="true"></i>);
  }
  for (let i = value; i < 5; i++) {
    result.push(<i className="fa fa-star-o" aria-hidden="true"></i>);
  }
  return result;
}

function showImage(list) {
  let result = null;
  if (list.length > 0) {
    result = list.map((item) => {
      return <img src={item} alt="imagereview" />;
    });
  }
  return result;
}

function ReviewItem(props) {
  const { comment, photo_urls, create_at, rating, reviewer_name } = props.data;
  return (
    <div className="review__item">
      <div className="row">
        <div className="col l-1">
          <div className="review__item__img">
            <img
              src="https://cf.shopee.vn/file/3a37603246930ccafbf254f66a00bd39_tn"
              alt="imageAuth"
            />
          </div>
        </div>
        <div className="col l-11">
          <div className="review__item__content">
            <p className="review__item__name">{reviewer_name}</p>
            <p className="review__item__rating">{showRating(rating)}</p>
            <p className="review__item__desc">{comment}</p>
            {photo_urls ? (
              <div className="review__item__content__img">
                {showImage(photo_urls)}
              </div>
            ) : (
              ""
            )}
            <p className="review__item__time">{create_at}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewItem;
