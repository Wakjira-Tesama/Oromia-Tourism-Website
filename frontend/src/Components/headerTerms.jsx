import React from "react";
import { Link } from "react-router-dom";
import FixedHeader from "./FIxedHeader";

import "../styles/headerTerms.css";

const TermsHeader = () => {
  return (
    <div>
      <FixedHeader />
      <div className="terms-hero">
        <h1>Oromia Tourism Organization</h1>

        <h1>Terms and Conditions</h1>
        <p className="discoverPara">
          Read and understand the terms of use of our website.
        </p>
        <BottomHeader />
      </div>
    </div>
  );
};

export default TermsHeader;
