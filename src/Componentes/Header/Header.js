import React from "react";
import styles from "./Header.module.css";
import PropTypes from "prop-types";

const Header = ({ titulo }) => {
  return (
    <header>
      <h1 className={styles.titulo}>{titulo}</h1>
    </header>
  );
};

Header.propTypes = {
  titulo: PropTypes.string,
};

export default Header;
