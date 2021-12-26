import React, { useState, useCallback  } from 'react';
import { FiArrowUp } from "react-icons/fi";
import { FiArrowDown } from "react-icons/fi";
import Med from "./Med";

const Dataset = ({meds}) => {
    const [isUp, setIsUp] = useState(true);
    const ChangeOrder = useCallback(() => {
      if(isUp){
        setIsUp(false);
        console.log('up');
        meds=meds.sort((a, b) => parseFloat(Date.parse(a.createAt)) - parseFloat(Date.parse(b.createAt)));
      }else{
        setIsUp(true);
        console.log('down');
        meds=meds.sort((a, b) => parseFloat(Date.parse(b.createAt)) - parseFloat(Date.parse(a.createAt)));   
      }
    }, [ isUp, meds]);

    return (
        <div className="" >
                <table id="medicines">
                    <tbody>
                    <tr>
                        <th>
                          <p></p>
                        </th>
                        <th>
                        <p>Name</p>
                        </th>
                        <th>
                        <p>Group</p>
                        </th>
                        <th>
                        <p>Event</p>
                        </th>
                        <th>
                        <p>Indication</p>
                        </th>
                        <th>
                        <p>Preparation</p>
                        </th>                      
                        <th>
                        <p>Dosage and Administration</p>
                        </th>
                        <th>
                        <p>Status</p>
                        </th>
                        <th>
                        <p>Image</p>
                        </th>
                        <th> 
                        {
                        isUp ? <p><FiArrowDown onClick={ChangeOrder} className='order' /> Created At</p>
                        : 
                        <p><FiArrowUp onClick={ChangeOrder} className='order' /> Created At</p>
                        }                                                         
                        </th>
                        <th>
                        <p>Updated At</p>
                        </th>
                        <th>
                        <p>Manufacturing By</p>
                        </th>                        
                    </tr>        
                    {meds.map((data, key) => {
                          return (
                              <Med
                                  key={key}
                                  name={data.name}
                                  group={data.Group}
                                  event={data.Event}
                                  indication={data.Indication}
                                  preparation={data.Preparation}
                                  dosageAndAdministration={data.Dosage_and_administration}
                                  preparation={data.Preparation}
                                  status={data.Status}
                                  image={data.Image}
                                  createAt={data.created_at}
                                  updatedAt={data.updated_at}
                                  manufacturingBy={data.ManufacturingBy}
                              />
                          );
                    })}
                </tbody>
          </table>    
        </div> 
    );
}

export default Dataset;
