import * as React from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./scss/Welcome.scss";
import residentLogo from "../assets/resident.png";
import staffLogo from "../assets/staff.png";
import adminLogo from "../assets/admin.png";
import CustomButton from "../shared/CustomButton";

const Welcome = () => {
  const navigate = useNavigate();
  const cx = classNames.bind(styles);

  const renderResident = () => {
    return (
      <div
        data-testid="welcome-category-resident"
        className={cx("welcome-category")}
      >
        <img
          data-testid="img-logo-resident"
          className={cx("logo")}
          src={residentLogo}
          alt="Logo"
        />
        <CustomButton
          content="Residents"
          clicked={() => {
            navigate("/resident");
          }}
        ></CustomButton>
      </div>
    );
  };

  const renderStaff = () => {
    return (
      <div className={cx("welcome-category")}>
        <img className={cx("logo")} src={staffLogo} alt="Logo" />
        <CustomButton
          content="General Staffs"
          clicked={() => {
            navigate("/staff");
          }}
        ></CustomButton>
      </div>
    );
  };

  const renderAdmin = () => {
    return (
      <div className={cx("welcome-category")}>
        <img className={cx("logo")} src={adminLogo} alt="Logo" />
        <CustomButton
          content="Admin"
          clicked={() => {
            navigate("/adminLogin");
          }}
        ></CustomButton>
      </div>
    );
  };

  return (
    <div data-testid="welcome-container" className={cx("welcome-container")}>
      {renderResident()}
      {renderStaff()}
      {renderAdmin()}
    </div>
  );
};

export default Welcome;
