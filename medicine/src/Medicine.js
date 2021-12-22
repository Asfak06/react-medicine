import React, { useState } from 'react';
import {HomePageHeader,MedicineData} from './components/MedicineData'
import medicine from './components/data.json';
import "./components/Medicine.css";
import "./select.scss"
export default function Medicine(){
    const [value, setValue] = useState(null);
    const [page, setPage] = useState(1); 
    
    const handleChange = (event) => {
        setValue(event.target.value );
    };

    const paginate = (event) =>{
         setPage(event.target.value );
    };

    var len = medicine.length/2;
    var arr = [];
    for(var i=1;i<=len; i++){
        arr.push(<button className='page' key={i} onClick={paginate} value={i}>{i}</button>);
    }

    return(
        <div>
            <HomePageHeader />
            <div include="form-input-select()">
            <select required onChange={handleChange}>
                        <option value="select">Select</option>
                        <option value="1">paracetamol</option>
                        <option value="2">anti-biotic</option>
            </select>
            </div>

            <p></p>

            <MedicineData value={value}  page={page}/>
            {arr}         
        </div>
     );
};
