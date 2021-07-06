export const menu = [
  {
    name: "Vận chuyển",
    id: "vanchuyen",
    icon: "fas fa-bus",
    list: [
      {
        to: "/",
        label: "Quản Lý Vận Chuyển",
        exact: true,
      },
      {
        to: "/about",
        label: "Giao Hàng Loạt",
        exact: false,
      },
      {
        to: "/products",
        label: "Cài Đặt Vận Chuyển",
        exact: false,
      },
    ],
  },
  {
    name: "Quản Lý Đơn Hàng",
    id: "quanlydonhang",
    icon: "fas fa-clipboard",
    list: [
      {
        to: "/portal/sale/order",
        label: "Tất cả",
        exact: true,
      },
      {
        to: "/about",
        label: "Đơn huỷ",
        exact: false,
      },
      {
        to: "/portal/product/create",
        label: "Trả Hàng / Hoàn Tiền",
        exact: false,
      },
    ],
  },
  {
    name: "Quản Lý Sản Phẩm",
    id: "quanlysanpham",
    icon: "fas fa-shopping-bag",
    list: [
      {
        to: "/portal/product/list/all",
        label: "Tất Cả Sản Phẩm",
        exact: true,
      },
      {
        to: "/portal/product/add",
        label: "Thêm Sản Phẩm",
        exact: false,
      },
      {
        to: "/products",
        label: "Sản Phẩm Vi Phạm",
        exact: false,
      },
    ],
  },
  {
    name: "Quản Lý Shop",
    id: "quanlyshop",
    icon: "fas fa-store",
    list: [
      {
        to: "/portal/settings/shop/rating",
        label: "Đánh giá Shop",
        exact: true,
      },
      {
        to: "/portal/settings/shop/profile",
        label: "Hồ sơ Shop",
        exact: false,
      },
    ],
  },
];
