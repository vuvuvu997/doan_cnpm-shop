export const menu = [
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
    ],
  },
  {
    name: "Quản Lý Shop",
    id: "quanlyshop",
    icon: "fas fa-store",
    list: [
      {
        to: "/portal/settings/shop/profile",
        label: "Hồ sơ Shop",
        exact: false,
      },
    ],
  },
];
