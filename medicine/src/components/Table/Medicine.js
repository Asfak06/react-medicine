import React, { useState, useEffect } from 'react';
import {MedicineData} from './MedicineData';
import {HomePageHeader} from './Header';
import "./Medicine.css";
import "./select.scss";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { BsChevronBarRight, BsChevronBarLeft } from "react-icons/bs";
import axios from "axios";
import medicine from './data.json';



export default function Medicine(){
    const [data, setData] = useState([]);
    const handleChange = (event) => {
        setData(medicine.filter(a => a.group === event.target.value))
    };

    useEffect(() =>{
      axios.get("http://localhost/medicine/public/api/medicines", {
        headers: {
        'Content-Type': 'application/json',
        'Accept': "application/json",
        'Access-Control-Allow-Origin' : true,
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        }
      }
      ).then((res)=> setData(res.data.data));
      return () => data.data;
    }, []);

    var distinct_group = [...new Set(medicine.map(item => item.group))];

    return(
        <div>
            <HomePageHeader />
            <div className='select'>
                <select onChange={handleChange}>
                    <option value="">Select group</option>
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
