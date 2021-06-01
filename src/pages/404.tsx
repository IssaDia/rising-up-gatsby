import * as React from "react";
import PropTypes from "prop-types";

const NotFoundPage = () => {
  let t = 5;
  return (
    <>
      <h2>{t}</h2>
      <h1>Error page</h1>
      <p>qdsssq</p>
    </>
  );
};

export default NotFoundPage;

NotFoundPage.propTypes = {
  t: PropTypes.number.isRequired
};
