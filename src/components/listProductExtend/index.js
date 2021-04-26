import ProductItem from "../productItem";

function ListProductExtend() {
  return (
    <div class="price-suprice__row">
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <div class="group-btn-control-move">
        <span
          onClick={() => moveProduct(+1)}
          class="btn-control-move btn-moveProduct-next"
        >
          <i class="fa fa-angle-right" aria-hidden="true"></i>
        </span>
        <span
          onClick={() => moveProduct(-1)}
          class="btn-control-move btn-moveProduct-pre"
        >
          <i class="fa fa-angle-left" aria-hidden="true"></i>
        </span>
      </div>
    </div>
  );
}

function moveProduct(a) {
  let suprice_price = document.querySelector(".price-suprice__row");
  let btn_next_product = document.querySelector(".btn-moveProduct-next");
  let btn_back_product = document.querySelector(".btn-moveProduct-pre");
  if (a > 0) {
    suprice_price.style.animation = "nextProduct 0.5s ease";
    btn_back_product.style.display = "block";
    btn_next_product.style.display = "none";
  } else {
    suprice_price.style.animation = "backProduct 0.5s ease";
    btn_back_product.style.display = "none";
    btn_next_product.style.display = "block";
  }
}

export default ListProductExtend;
