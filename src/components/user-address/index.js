import { FastField, Form, Formik } from "formik";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Button, FormGroup, Spinner } from "reactstrap";
import * as Yup from "yup";
import userAPI from "../../api/userAPI";
import InputField from "./../../custom-fields/InputField";
import * as toastMessage from "./../../helpers/toastMessage";
import "./style.css";

UserAddress.propTypes = {
  onSubmit: PropTypes.func,
};

UserAddress.defaultProps = {
  onSubmit: null,
};

function UserAddress(props) {
  const validationSchema = Yup.object().shape({
    address: Yup.string().required("This field is required."),
  });

  const userProfile = useSelector((state) => state.user);

  let [initialValues, setInitialValues] = useState({
    address: userProfile.address,
  });
  let [checkedEdit, setCheckedEdit] = useState(false);

  const handleSubmit = async (value) => {
    try {
      await userAPI.updateProfile(value);
      toastMessage.toastSucces("Updated success");
    } catch (error) {
      console.error(error);
      toastMessage.toastError("Error updating address");
    }
    setInitialValues({ address: "" });
    setCheckedEdit(false);
  };
  return (
    <div className="user-address">
      <h2>Sổ địa chỉ</h2>
      <div className="user-address__container">
        <p className="user-address__name">
          {userProfile.first_name + " " + userProfile.last_name}{" "}
          <span>
            <i class="fa fa-check-circle-o" aria-hidden="true"></i> Địa chỉ mặc
            định
          </span>
        </p>
        <p className="user-address__address">
          <span>Địa chỉ: </span>
          {userProfile.address}
        </p>
        <p className="user-address__phone">
          <span>Điện thoại: </span>
          {userProfile.phone_number}
        </p>
      </div>

      <label class="label-checkbox" for="form-edit-address">
        Chỉnh sửa địa chỉ{" "}
        {checkedEdit ? (
          <i class="fa fa-chevron-up" aria-hidden="true"></i>
        ) : (
          <i class="fa fa-chevron-down" aria-hidden="true"></i>
        )}
      </label>
      <input
        type="checkbox"
        id="form-edit-address"
        onChange={(event) => setCheckedEdit(event.target.checked)}
        checked={checkedEdit}
      />
      <div id="user-address__edit" className="user-address__edit">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {(formikProps) => {
            // do something here ...
            //const { values, errors, touched, isSubmitting } = formikProps;
            const { isSubmitting } = formikProps;

            return (
              <Form>
                <FastField
                  name="address"
                  type="text"
                  component={InputField}
                  label="Địa chỉ mới"
                  placeholder="Enter new address ..."
                />

                <FormGroup>
                  <Button type="submit" color={"primary"}>
                    {isSubmitting && <Spinner size="sm" />}
                    Cập nhật
                  </Button>
                </FormGroup>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}

export default UserAddress;
