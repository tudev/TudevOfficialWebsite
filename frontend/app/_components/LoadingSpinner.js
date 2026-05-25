import React from "react";
import { Spinner } from "reactstrap";

function LoadingSpinner() {
  return (
    <>
      <p className="text-white">
        <Spinner />
      </p>
    </>
  );
}

export default LoadingSpinner;
