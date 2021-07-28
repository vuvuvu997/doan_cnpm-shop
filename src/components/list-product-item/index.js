import React, { useState } from "react";
import { deleteProduct } from "../../actions/product";
import AddProductForm from "../add-product-form";
import { useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./style.scss";

function ListProductItem(props) {
  const [showEdit, setShowEdit] = useState(false);
  const [showDel, setShowDel] = useState(false);
  const dispatch = useDispatch();
  let formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "VND",
  });
  const { data } = props;

  const handleDeleteProduct = (value) => {
    dispatch(deleteProduct(value));
  };

  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = () => setShowEdit(true);
  const handleCloseDel = () => setShowDel(false);
  const handleShowDel = () => setShowDel(true);
  return (
    <tr className="product-item">
      <td style={{ width: "35%" }}>{data.name}</td>
      <td className="product-item__img" style={{ width: "15%" }}>
        <img src={data.link_image} alt={data.name} />
      </td>
      <td style={{ width: "10%" }}>{formatter.format(data.price)}</td>
      <td style={{ width: "10%" }}>{data.rating}</td>
      <td style={{ width: "10%" }}>12</td>
      <td style={{ width: "10%" }}>{data.count}</td>
      <td style={{ width: "10%" }}>
        <div className="product-item__modal-dialog">
          <Button
            variant="primary"
            className="btn btn--edit"
            onClick={handleShowEdit}
          >
            <i className="far fa-edit"></i>
          </Button>
          <Modal
            className="product-item__modal-dialog"
            show={showEdit}
            onHide={handleCloseEdit}
          >
            <Modal.Header closeButton>
              <Modal.Title>Sửa thông tin sản phẩm</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <AddProductForm data={data} onCloseModalEdit={handleCloseEdit} />
            </Modal.Body>
          </Modal>

          <Button
            variant="primary"
            className="btn btn--delete"
            onClick={handleShowDel}
          >
            <i className="far fa-trash-alt"></i>
          </Button>

          <Modal show={showDel} onHide={handleCloseDel}>
            <Modal.Header closeButton>
              <Modal.Title>Xóa sản phẩm</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="alert alert-danger" role="alert">
                Bạn có muốn xóa sản phẩm này không?
              </div>
              <p>{data.name}</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseDel}>
                Đóng
              </Button>
              <Button
                variant="primary"
                onClick={() => handleDeleteProduct(data.id)}
              >
                Xác nhận
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </td>
    </tr>
  );
}

export default ListProductItem;
