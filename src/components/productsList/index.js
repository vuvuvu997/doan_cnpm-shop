import React, { useEffect, useState } from "react";
import { Button, FormGroup, Spinner } from "reactstrap";
import productApi from "../../api/productAPI";
import ProductItem from "../productItem";
import queryString from "query-string";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsList } from "../../actions/productAction";

function showProducts(productsList) {
  let result = null;
  if (productsList.length > 0) {
    result = productsList.map((item) => {
      return (
        <div class="col l-2-4">
          <ProductItem
            key={item.id}
            id={item.id}
            title={item.name}
            price={item.price}
            description={item.name}
            discount={50}
            image={item.link_image}
            rating={5}
          />
        </div>
      );
    });
  }
  return result;
}

function ProductList() {
  const productsStore = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [panigation, setPagination] = useState({
    page: 0,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const params = queryString.stringify(panigation);
    let fetchProductListApi = async () => {
      try {
        const response = await productApi.getProducts(params);
        dispatch(fetchProductsList(response.products));
        localStorage.setItem("pageNumber", response.page);
        setIsSubmitting(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProductListApi();
  }, [panigation, dispatch]);

  function handleAddProductList() {
    setIsSubmitting(true);
    setPagination({
      ...panigation,
      page: +localStorage.getItem("pageNumber") + 1,
    });
  }

  if (!productsStore) return <p>Loading...</p>;
  return (
    <div>
      <div className="row">{showProducts(productsStore)}</div>
      <div className="container-btn-add-product">
        <FormGroup>
          <Button
            type="botton"
            color={"primary"}
            onClick={handleAddProductList}
          >
            {isSubmitting && <Spinner size="sm" />}
            Xem thêm sản phẩm
          </Button>
        </FormGroup>
      </div>
    </div>
  );
}

export default ProductList;
