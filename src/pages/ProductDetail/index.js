import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductDetail from "../../components/product-detail";
import ProductDiscountList from "../../components/productDiscoutList";
import Review from "../../components/review";

function ProductDetailPage(props) {
  const [product, setProduct] = useState();
  const { match } = props;
  const pathName = match.params.productId;
  useEffect(() => {
    const fetchProductAPI = async () => {
      try {
        const response = await axios.get(
          `https://your-ecommerce.herokuapp.com/products/${pathName}`
        );
        setProduct(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProductAPI();
  }, [pathName]);

  if (!product) return "Loading";
  return (
    <div className="--container">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li class="breadcrumb-item">
            <Link to="/">Danh sách sản phẩm</Link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            {product.name}
          </li>
        </ol>
      </nav>
      <ProductDetail dataProduct={product} />
      <div className="grid wide">
        <ProductDiscountList />
      </div>
      <Review dataProduct={product} />
    </div>
  );
}

export default ProductDetailPage;
