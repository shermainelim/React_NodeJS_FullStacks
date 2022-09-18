import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  useVerifyResident,
  logOutResident,
  useQueue,
} from "../../redux/appSlice";
import classNames from "classnames/bind";
import styles from "./ResidentPage.scss";
import CustomButton from "../../shared/CustomButton";

const ResidentPage = () => {
  const [logout, setLogout] = useState(false);

  const dispatch = useDispatch();
  const cx = classNames.bind(styles);

  const residentData = useVerifyResident();
  const queueNumberCreated = useQueue();

  const logoutHandler = async () => {
    dispatch(logOutResident());

    setLogout(true);
  };

  if (logout) {
    return <Navigate to="/" />;
  }

  return (
    <div className={cx("resident-page-container")}>
      <div>
        <div>
          <b>Full Name:</b> {residentData?.[0]}
        </div>
        <div>
          <b>Address:</b> {residentData?.[1]}
        </div>
        <div>
          <b>UINFIN:</b> {residentData?.[2]}
        </div>
        <div>
          <b>Queue No:</b> {queueNumberCreated}
        </div>
      </div>
      <CustomButton content="Logout" clicked={logoutHandler}></CustomButton>
    </div>
  );
};

export default ResidentPage;
