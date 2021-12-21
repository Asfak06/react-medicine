import React from 'react'
import {HomePageHeader,MedicineData} from './components/MedicineData'
import medicine from './components/data.json';

class Medicine extends React.Component{
      
    constructor(props) {
        super(props);
        this.state = {
            value: null,
            page:1
          };  
        this.handleChange = this.handleChange.bind(this);
        this.paginate = this.paginate.bind(this);
      }
    
    handleChange(event) {
        this.setState({ value : event.target.value });
    }

    paginate(event) {
         this.setState({ page : event.target.value });
    }

    

    render(){
        var len = medicine.length/2;
        var arr = [];
        for(var i=1;i<=len; i++){
            arr.push(<button key={i} onClick={this.paginate} value={i}>{i}</button>);
        }

        console.log("count")
       return(
          <div>
              <HomePageHeader />
              <select id="lang" onChange={this.handleChange}>
                 <option value="select">Select</option>
                 <option value="1">paracetamol</option>
                 <option value="2">anti-biotic</option>
              </select>
              <p></p>
              <MedicineData value={this.state.value}  page={this.state.page}/>
              {arr}         
          </div>
       );
    }
};



export default Medicine;