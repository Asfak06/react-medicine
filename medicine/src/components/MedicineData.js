import React, { useState, useCallback  } from 'react';
import "./Medicine.css";
import { FiArrowUp } from "react-icons/fi";
import { FiArrowDown } from "react-icons/fi";
import { FcApproval, FcCancel } from "react-icons/fc";
import moment from 'moment'

export const MedicineData = ({value, medicine}) => {

    var meds=medicine;
    function check_paracetamol(group) {
        return group.group == 'Paracetamol';
    }
    function check_anti(group) {
        return group.group == 'Anti-biotic';
    } 

    if(value==1){
        meds=medicine;
        var res = meds.filter(check_paracetamol);
    }
    if(value==2){
        meds=medicine;    
        var res = meds.filter(check_anti);
    }
    if(value==3){
      res = medicine;
    }

    return(            
      <Dataset meds={res} value={value}/>
    ); 
};

const Dataset = ({meds,value}) => {

    const [isUp, setIsUp] = useState(true);
    
    const ChangeOrder = useCallback(() => {
      if(isUp==true){
        setIsUp(false);
        console.log('up');
        meds=meds.sort((a, b) => parseFloat(Date.parse(a.createAt))- parseFloat(Date.parse(b.createAt)));
      }else{
        setIsUp(true);
        console.log('down');
        meds=meds.sort((a, b) => parseFloat(Date.parse(b.createAt)) - parseFloat(Date.parse(a.createAt)));   
      }
    }, [isUp,value]);

    // const ChangeOrder = () => {
    //   if(isUp==true){
    //     setIsUp(false);
    //     console.log('up');
    //     meds=meds.sort((a, b) => parseFloat(Date.parse(a.createAt)) - parseFloat(Date.parse(b.createAt)));
    //   }else{
    //     setIsUp(true);
    //     console.log('down');
    //     meds=meds.sort((a, b) => parseFloat(Date.parse(b.createAt)) - parseFloat(Date.parse(a.createAt)));   
    //   }    
    // };

    return (
        <div className="container" >
                <table id="medicines">
                    <tbody>
                    <tr>
                        <th>
                          <p></p>
                        </th>
                        <th>
                        <h3>Name</h3>
                        </th>
                        <th>
                        <h3>Group</h3>
                        </th>
                        <th>
                        <h3>Event</h3>
                        </th>
                        <th>
                        <h3>Indication</h3>
                        </th>
                        <th>
                        <h3>Preparation</h3>
                        </th>                      
                        <th>
                        <h3>Dosage and Administration</h3>
                        </th>
                        <th>
                        <h3>Status</h3>
                        </th>
                        <th>
                        <h3>Image</h3>
                        </th>
                        <th> 
                        {
                        isUp == true ? <h3><FiArrowDown onClick={ChangeOrder} className='order' /> Created At</h3>
                        : 
                        <h3><FiArrowUp onClick={ChangeOrder} className='order' /> Created At</h3>
                        }                                                         
                        </th>
                        <th>
                        <h3>Updated At</h3>
                        </th>
                        <th>
                        <h3>Manufacturing By</h3>
                        </th>                        
                    </tr>        
                    {meds.map((data, key) => {
                          return (
                              <Med
                                  key={key}
                                  name={data.name}
                                  group={data.group}
                                  event={data.event}
                                  indication={data.indication}
                                  preparation={data.preparation}
                                  dosageAndAdministration={data.dosageAndAdministration}
                                  preparation={data.preparation}
                                  status={data.status}
                                  image={data.image}
                                  createAt={data.createAt}
                                  updatedAt={data.updatedAt}
                                  manufacturingBy={data.manufacturingBy}
                              />
                          );
                    })}
                </tbody>
          </table>    
        </div> 
    );
}

export const HomePageHeader = () => {
    return (
      <header className="header">
        <h2>Medicine list</h2>
      </header>
    );
};

const Med = ({name, group, event, indication,preparation, dosageAndAdministration, status, image, createAt, updatedAt, manufacturingBy}) => {
    return (
          <tr>
            <td>
             <input className='check' type="checkbox" />
            </td>
            <td>
              <p>{name}</p>
            </td>
            <td>
              <p>{group}</p>
            </td>
            <td>
              <p>{event}</p>
            </td>
            <td>
              <p>{indication}</p>
            </td>
            <td>
              <p>{preparation}</p>
            </td>            
            <td>
              <p>{dosageAndAdministration}</p>
            </td>
            <td>
            {status == 'Active'? <p><FcApproval/> {status} </p>: <p><FcCancel/>  {status}</p> }                
            </td>
            <td>
              <img src={image} alt="Logo" />
            </td>
            <td>
              <p>{moment(createAt).fromNow()}</p>
            </td>
            <td>
              <p>{moment(updatedAt).fromNow()}</p>
            </td>
            <td>
              <p>{manufacturingBy}</p>
            </td>
          </tr>
    );
};