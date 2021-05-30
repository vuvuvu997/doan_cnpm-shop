import * as actionTypesProductInCategory from "./../constants/action-types-product-in-category";
export const fetchProductInCategory = (data) => {
  return {
    type: actionTypesProductInCategory.FETCH_PRODUCTS_LIST_IN_CATEGORY,
    payload: { data },
  };
};

export const sortDecreateProductInCategory = () => {
  return {
    type: actionTypesProductInCategory.SORT_DECREATE_PRODUCT_PRICE,
  };
};

export const sortIncreateProductInCategory = () => {
  return {
    type: actionTypesProductInCategory.SORT_INCREATE_PRODUCT_PRICE,
  };
};

export const sortPopularProductInCategory = () => {
  return {
    type: actionTypesProductInCategory.SORT_POPULAR_PRODUCT,
  };
};

export const sortDiscountProductInCategory = () => {
  return {
    type: actionTypesProductInCategory.SORT_DISCOUNT_PRODUCT,
  };
};
