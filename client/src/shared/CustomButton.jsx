import React from "react";
import classNames from "classnames/bind";
import styles from "./CustomButton.scss";

const CustomButton = (props) => {
  const cx = classNames.bind(styles);

  return (
    <button
      data-testid="custom-btn"
      className={cx("btn")}
      onClick={props.clicked}
    >
      {props.content}
    </button>
  );
};

export default CustomButton;
