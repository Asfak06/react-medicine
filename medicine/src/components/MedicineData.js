import React from 'react'
import "./Medicine.css";
import medicine from './data.json';

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
    

    var min=0;
    var max=min+1;
    if(page>1){
        for(var i=1;i<page;i++){
           min=max+1;
           max=max+2;
        }
    }

console.log(min,max);

    if(res){
        return(
            
            <div className="container">
              <table>
                    <tbody>
                    <tr>
                        <td>
                        <h3>name</h3>
                        </td>
                        <td>
                        <h3>group</h3>
                        </td>
                    </tr>
                    </tbody>
                </table>                 
            {res.map((data, key) => {
                if(key>=min && key<=max){
                    return (
                        <div key={key}>
                        <Med
                            key={key}
                            name={data.name}
                            group={data.group}
                        />
                        </div>
                    );
                }

            })}
            </div>
        );
    }

    return (
        <div className="container">
                <table>
                    <tbody>
                    <tr>
                        <td>
                        <h3>name</h3>
                        </td>
                        <td>
                        <h3>group</h3>
                        </td>
                    </tr>
                    </tbody>
                </table>            
          {medicine.map((data, key) => {
            if(key>=min && key<=max){
                return (
                <div key={key}>                  
                    <Med
                    key={key}
                    name={data.name}
                    group={data.group}
                    />
                </div>
                );
            }
          })}
        </div> 
    );
    
};

export const HomePageHeader = () => {
    return (
      <header className="header">
        <h2>Medicine list</h2>
      </header>
    );
};

const Med = ({ name, group }) => {
    if (!name) return <div />;
    return (
      <table>
        <tbody>
          <tr>
            <td>
              <h5>{name}</h5>
            </td>
            <td>
              <h5>{group}</h5>
            </td>
          </tr>
        </tbody>
      </table>
    );
};