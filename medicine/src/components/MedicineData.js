import React from 'react'
import "./Medicine.css";
import medicine from './data.json';
import { FiArrowUp } from "react-icons/fi";
import { FcApproval, FcCancel } from "react-icons/fc";

export const MedicineData = ({value, page}) => {

    function check_paracetamol(group) {
        return group.group == 'paracetamol';
    }
    function check_anti(group) {
        return group.group == 'anti-biotic';
    }
    if(value==1){
        var res = medicine.filter(check_paracetamol);
    }
    if(value==2){
        var res = medicine.filter(check_anti);
    }
    

    if(res){
        return(            
          <Dataset medicines={res} page={page} />
        );
    }

    return (
         <Dataset medicines={medicine} page={page} />
    );
    
};

const Dataset = ({medicines, page}) => {
    
    var min=0;
    var max=min+1;
    if(page>1){
        for(var i=1;i<page;i++){
           min=max+1;
           max=max+2;
        }
    }

    console.log(min,max);
    return (
        <div className="container" >
                <table id="medicines">
                    <tbody>
                    <tr>
                        <th>
                          <p></p>
                        </th>
                        <th>
                        <h3>name</h3>
                        </th>
                        <th>
                        <h3>group</h3>
                        </th>
                        <th>
                        <h3>event</h3>
                        </th>
                        <th>
                        <h3>indication</h3>
                        </th>
                        <th>
                        <h3>dosageAndAdministration</h3>
                        </th>
                        <th>
                        <h3>status</h3>
                        </th>
                        <th>
                        <h3>image</h3>
                        </th>
                        <th>                        
                        <h3><FiArrowUp /> createAt</h3>
                        </th>
                        <th>
                        <h3>updatedAt</h3>
                        </th>
                        <th>
                        <h3>manufacturingBy</h3>
                        </th>                        
                    </tr>        
          {medicines.map((data, key) => {
            if(key>=min && key<=max){
                return (
                    <Med
                        key={key}
                        name={data.name}
                        group={data.group}
                        event={data.event}
                        indication={data.indication}
                        dosageAndAdministration={data.dosageAndAdministration}
                        preparation={data.preparation}
                        status={data.status}
                        image={data.image}
                        createAt={data.createAt}
                        updatedAt={data.updatedAt}
                        manufacturingBy={data.manufacturingBy}
                    />
                );
            }
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

const Med = ({name, group, event, indication, dosageAndAdministration, status, image, createAt, updatedAt, manufacturingBy}) => {
    if (!name) return <div />;
    return (
          <tr>
            <td>
             <input className='check' type="checkbox" />
            </td>
            <td>
              <h5>{name}</h5>
            </td>
            <td>
              <h5>{group}</h5>
            </td>
            <td>
              <h5>{event}</h5>
            </td>
            <td>
              <h5>{indication}</h5>
            </td>
            <td>
              <h5>{dosageAndAdministration}</h5>
            </td>
            <td>
            {status == 'active'? <h3><FcApproval/> {status} </h3>: <h3><FcCancel/>  {status}</h3> }
                

            </td>
            <td>
              <img src={image} alt="Logo" />
            </td>
            <td>
              <h5>{createAt}</h5>
            </td>
            <td>
              <h5>{updatedAt}</h5>
            </td>
            <td>
              <h5>{manufacturingBy}</h5>
            </td>
          </tr>
    );
};