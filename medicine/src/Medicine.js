import React, { useState } from 'react';
import {HomePageHeader,MedicineData} from './components/MedicineData'
import "./components/Medicine.css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { BsChevronBarRight, BsChevronBarLeft } from "react-icons/bs";
import "./select.scss";
import medicine from './components/data.json';


export default function Medicine(){
    const [data, setData] = useState(medicine);
    const handleChange = (event) => {
        setData(medicine.filter(a => a.group === event.target.value))
    };
    var distinct_group = [...new Set(medicine.map(item => item.group))];
    return(
        <div>
            <HomePageHeader />
            <div>
                <select onChange={handleChange}>
                    <option value="3">Select group</option>
                    {distinct_group.map((item, i)=> 
                        <option value={item} key={i}>{item}</option>
                    )}
                </select>
            </div>

            <p></p>

            <MedicineData medicine={data}/>

            <div id="foot"> 
                <div className='foot-arrows'>
                    <div className='foot-rows foot-text'>
                        <span>Rows per page</span>
                        <input type="number" value={5} />
                    </div>
                    <p className='foot-text'>1-{data.length} of {data.length}</p>
                    <span><BsChevronBarLeft/></span>
                    <span><FiChevronLeft/></span>  
                    <span><FiChevronRight/></span>
                    <span><BsChevronBarRight/></span>
                </div>
            </div>
        </div>
     );
};
