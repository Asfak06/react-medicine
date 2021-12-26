import React from 'react'
import { FcApproval, FcCancel } from "react-icons/fc";
import moment from 'moment';

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
            {status == 1? <p><FcApproval/> Active </p>: <p><FcCancel/>  Inactive</p> }                
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
export default Med;
