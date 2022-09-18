import * as React from "react";
import classNames from "classnames/bind";
import styles from "./CustomButton.scss";

interface Props {
  content: string;
  clicked: () => void;
  resident?: boolean;
}

const CustomButton: React.FC<Props> = ({ content, clicked, resident }) => {
  const cx = classNames.bind(styles);

  return (
    <button
      data-testid="custom-btn"
      className={resident ? cx("another-btn") : cx("btn")}
      onClick={clicked}
    >
      {content}
    </button>
  );
};

export default CustomButton;
