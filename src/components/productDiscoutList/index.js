import React, { useEffect } from "react";
import ListProductExtend from "../listProductExtend";

function ProductDiscountList() {
  useEffect(() => {
    let btn_back_product = document.querySelector(".btn-moveProduct-pre");
    btn_back_product.style.display = "none";
  }, []);

  return (
    <div class="price-suprice">
      <h2 class="price-suprice__header">
        Gía sốc <i class="fa fa-bolt" aria-hidden="true"></i> hôm nay
      </h2>
      <ListProductExtend />
    </div>
  );
}

export default ProductDiscountList;
