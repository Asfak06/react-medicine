import React, { useState, useCallback  } from 'react';
import "./Medicine.css";
import Dataset from "./Dataset";

export const MedicineData = ({medicine}) => {
    return(            
      <Dataset meds={medicine} />
    ); 
};

