import React, { useState } from 'react';
import {HomePageHeader,MedicineData} from './components/MedicineData'
import "./components/Medicine.css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { BsChevronBarRight, BsChevronBarLeft } from "react-icons/bs";
import "./select.scss"


export default function Medicine(){
    const [value, setValue] = useState(null);
    const [rows, setRows] = useState(5);
    
    const handleChange = (event) => {
        setValue(event.target.value );
    };

    return(
        <div>
            <HomePageHeader />
            <div>
                    <select required onChange={handleChange}>
                        <option value="select">Select</option>
                        <option value="1">paracetamol</option>
                        <option value="2">anti-biotic</option>
                    </select>
            </div>

            <p></p>

            <MedicineData value={value} />

            <div id="foot"> 
                <div className='foot-arrows'>
                    <div className='foot-rows foot-text'>
                        <span>Rows per page</span>
                        <input type="number" value={rows} />
                    </div>
                    <p className='foot-text'>1-10 of 100</p>
                    <span><BsChevronBarLeft/></span>
                    <span><FiChevronLeft/></span>  
                    <span><FiChevronRight/></span>
                    <span><BsChevronBarRight/></span>
                </div>
            </div>
        </div>
     );
};
