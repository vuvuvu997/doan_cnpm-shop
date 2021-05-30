import React, { useEffect, useState } from "react";
import productApi from "../../api/productAPI";
import ListProductExtend from "../listProductExtend";

function ProductDiscountList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let fetchProductsDiscountAPI = async () => {
      try {
        const response = await productApi.getProductsDiscount("page=0");
        setProducts(response.products);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProductsDiscountAPI();
  }, []);
  return (
    <div class="price-suprice">
      <h2 class="price-suprice__header">
        Gía sốc <i class="fa fa-bolt" aria-hidden="true"></i> hôm nay
      </h2>
      {!products ? <h2>Loading...</h2> : <ListProductExtend data={products} />}
    </div>
  );
}

export default ProductDiscountList;
