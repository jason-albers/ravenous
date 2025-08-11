import React from "react";
import styles from "./BusinessList.module.css";

import Business from "../Business/Business";

const BusinessList = ({ businesses }) => {
  return (
    <div className={styles.BusinessList}>
<<<<<<< HEAD
      {businesses.map((business, index) => (
        <Business key={business.name + index} business={business} />
      ))}
=======
      {businesses.map((business) => {
        return <Business business={business} key={business.name} />;
      })}
>>>>>>> 2994f465 (Completed Ravenous project step 3)
    </div>
  );
};

export default BusinessList;
