import React, { useEffect, useState } from "react";
import productApi from "../../api/productAPI";
import ProductItem from "../productItem";

function ProductList() {
  const [productsList, setProductList] = useState();

  useEffect(() => {
    let fetchProductListApi = async () => {
      try {
        const response = await productApi.getAll();
        setProductList(response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProductListApi();
  }, []);

  if (!productsList) return <p>Loading...</p>;
  return (
    <div class="product-list">
      <div class="product-list__header">
        <h2 class="product-list__header-title">GỢI Ý HÔM NAY</h2>
      </div>
      <div class="product-list__body">
        <div class="row">{showProducts(productsList)}</div>
      </div>
    </div>
  );
}

function showProducts(productsList) {
  let result = null;
  if (productsList.length > 0) {
    result = productsList.map((item, index) => {
      return (
        <ProductItem
          key={index}
          name={item.name}
          price={item.price}
          discout={item.discout}
          picture={item.picture}
        />
      );
    });
  }
  return result;
}

export default ProductList;
