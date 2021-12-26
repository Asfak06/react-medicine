 import React, { useEffect,useState} from 'react';
 import { useFormik } from 'formik';
 import axios from "axios";
 

 const validate = values => {
   const errors = {};
   if (!values.Name) {
     errors.Name = 'Required';
   }
 
   if (!values.Group) {
     errors.Group = 'Required';
   }
 
   if (!values.Event) {
     errors.Event = 'Required';
   }

   if (!values.Indication) {
    errors.Indication = 'Required';
   }
   if (!values.Preparation) {
      errors.Preparation = 'Required';
   }
   if (!values.Dosage_and_administration) {
    errors.Dosage_and_administration = 'Required';
   }

   if (!values.Image) {
    errors.Image = 'Required';
   }

   if (!values.Manufacturing_by) {
    errors.Manufacturing_by = 'Required';
   }

   return errors;
 };
 
 const baseURL = "http://127.0.0.1:8000/api/medicine";

 export const FormIndex = () => {

  function createPost(values) {
    axios.post(baseURL,values, {
      headers: {
      'Content-Type': 'application/json',
      'Accept': "application/json",
      'Access-Control-Allow-Origin' : true,
      'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      }
    }
    ).then((res)=>{
      console.log(res)
    })

    }

   const formik = useFormik({
     initialValues: {
       Name: '',
       Group: '',
       Event: '',
       Indication: '',
       Preparation: '',
       Dosage_and_administration: '',
       Status: '',
       Image: '',
       Manufacturing_by: '',
     },
     validate,
     onSubmit: values => {
      //  alert(JSON.stringify(values, null, 2));
       let form_values= JSON.stringify(values, null, 2);
       createPost(form_values);
     },
   });

   return (
     <div className='FormIndex'> 
     <h4 className='text-center m-4'>Input Medicine info</h4>
     <hr />
     <form onSubmit={formik.handleSubmit} className='form-group w-50 m-auto'>
       <label htmlFor="Name">Name</label>
       <input
         className='form-control'
         id="Name"
         name="Name"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.Name}
       />
       {formik.errors.Name ? <div className='text-danger'>{formik.errors.Name}</div> : null}
 
       <label htmlFor="Group">Group</label>
       <input
         className='form-control'
         id="Group"
         name="Group"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.Group}
       />
       {formik.errors.Group ? <div className='text-danger'>{formik.errors.Group}</div> : null}
 
       <label htmlFor="Event">Event</label>
       <input
         className='form-control'
         id="Event"
         name="Event"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.Event}
       />
       {formik.errors.Event ? <div className='text-danger'>{formik.errors.Event}</div> : null}

       <label htmlFor="Indication">Indication</label>
       <input
         className='form-control'
         id="Indication"
         name="Indication"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.Indication}
       />
       {formik.errors.Indication ? <div className='text-danger'>{formik.errors.Indication}</div> : null}

       <label htmlFor="Preparation">Preparation</label>
       <input
         className='form-control'
         id="Preparation"
         name="Preparation"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.Preparation}
       />
       {formik.errors.Preparation ? <div className='text-danger'>{formik.errors.Preparation}</div> : null}

       <label htmlFor="Dosage_and_administration">Dosage_and_administration</label>
       <input
         className='form-control'
         id="Dosage_and_administration"
         name="Dosage_and_administration"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.Dosage_and_administration}
       />
       {formik.errors.Dosage_and_administration ? <div className='text-danger'>{formik.errors.Dosage_and_administration}</div> : null}


       <div className='form-check m-3'>
            <input
              className='form-check-input'
              id="Status"
              name="Status"
              type="checkbox"
               onChange={formik.handleChange}
              value={formik.values.Status}
            />
            <label class="form-check-label" htmlFor="Status">Status</label>
            {/* {formik.errors.Status ? <div className='text-danger'>{formik.errors.Status}</div> : null} */}
       </div>


       <label htmlFor="Image">Image</label>
       <input
         className='form-control'
         id="Image"
         name="Image"
         type="file"
         onChange={formik.handleChange}
         value={formik.values.Image}
       />
       {formik.errors.Image ? <div className='text-danger'>{formik.errors.Image}</div> : null}

       <label htmlFor="Manufacturing_by">Manufacturing_by</label>
       <input
         className='form-control mb-2'
         id="Manufacturing_by"
         name="Manufacturing_by"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.Manufacturing_by}
       />
       {formik.errors.Manufacturing_by ? <div className='text-danger'>{formik.errors.Manufacturing_by}</div> : null}
 
       <button className='form-control w-25 bg-success m-auto'  type="submit">Submit</button>
     </form>
     </div>

   );
 };