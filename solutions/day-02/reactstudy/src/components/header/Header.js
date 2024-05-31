import React from "react";
import PropTypes from "prop-types";
import { showDate } from "../../utils/display-time.js";
// import "../../styles/header.scss";
import headerStyles from "../../styles/header.module.scss";
const { header, headerWrapper } = headerStyles;
const Header = ({
  data: {
    welcome,
    title,
    subtitle,
    author: { firstName, lastName },
    date,
  },
}) => {
  return (
    <header className={header}>
      <div className={headerWrapper}>
        <h1>{welcome}</h1>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>
          {firstName} {lastName}
        </p>
        <small>{showDate(date)}</small>
      </div>
    </header>
  );
};

export default Header;
