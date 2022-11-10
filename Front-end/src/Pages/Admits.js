import React,{useState} from "react"
import { Link } from 'react-router-dom'
import { apiPostCall } from '../Utility';
const Admits = () => {
const [admis,setAdmi]=useState({
    ward:" ",
    admission:" "
   })
   const [success,setSuccess]=useState(false)
   const  handleChanges=(e)=>{
   const Reasons={...admis}
   Reasons[e.target.name]=e.target.value
   setAdmi(Reasons)
   }
   const handleSubmits=(e)=>{
    e.preventDefault();
    setSuccess(true)
   }
   const Store=async()=>{
    try {
      let results = await apiPostCall('http://localhost:1789/api/admit', admis);

      console.log('Results : ' + results);
    }
    catch (error) {
      console.log(error);
    }
    console.log("results", admis);
}

  return (
    <>
    {success ?(
      <div className='accept'>
       <h1>Patient has been admitted!</h1>
       <br/>
       <p>
         <Link to="/">Go to Home</Link>
       </p>
      </div>
     ):(
    <div className="is">
    <div className='login-wrap'>  
    <form onSubmit={handleSubmits}>
    <h1 className='log'>Admissions</h1>
        <div className='log-in'>
           <label> Ward: </label>
          <input type="text"
            name='ward'
            autoComplete='off'
            value={admis.ward}
            onChange={handleChanges}
             placeholder='Enter ward number'
          /> 
        </div>
        <div className='log-in'>
          <label>Reason of Admission: </label>
          <input type="text"
            name='admission'
            autoComplete='off'
            value={admis.admission}
            onChange={handleChanges}
            placeholder="Reason of Admission"
          /> 
        </div>
        <div className='acces'>
        <button className='fives' onClick={Store}><Link>store</Link></button>
          <button className='sixs'><Link to="/admin">LogOut</Link></button>
        </div>
      </form>
      
    </div>
    </div>
  )
}
</> 
)
}
export default Admits;
