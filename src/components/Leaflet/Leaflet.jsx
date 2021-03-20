import React from "react";
import { Typography } from "@material-ui/core";

import ad from "../../assets/ad.jpg";
import ad2 from "../../assets/ad2.jpg";

const Leaflet = () => {
  return (
    <div class="flex-container">
      <div class="flex-item">
        <Typography variant="subtitle1">
          <img src={ad} alt="전단지" style={{ width: '100%'}} />
        </Typography>
      </div>
      <div class="flex-item">
        <Typography variant="subtitle1">
          <img src={ad2} alt="전단지2" style={{ width: '100%'}} />
        </Typography>
      </div>
    </div>
  );
};

export default Leaflet;
