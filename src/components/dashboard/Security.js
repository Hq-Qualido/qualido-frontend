import React,{useState} from 'react'

export default function Security() {
    const [disable, setDisable] = useState(true);
    const [values, setValues] = useState({
        fullname:"",
        phone:"",
        password:"",
    });
    const handleChange=(e)=>{
        const {name,value}=e.target;
        setValues({
            ...values,
            [name]:value,
        })
    }
    async function handleSubmit(){
        console.log(values,"usersedited value")
    }
     
    return (
    <>
    <div className="container my-5 security-page">
        <div className="row">
            <form>

            <div className='user-info-section my-2'>
                <label htmlFor="email" className='users-email mt-1'>E-mail Address  </label>
                <input 
                name="email" 
                type="text" 
                placeholder='srivastava+qualido@gmail.com' 
                disabled={true}  />
            </div>

            <div className='user-info-section my-2'>
                <label htmlFor="fullname" className='users-fullname mt-1'>Full Name  <span className='edit-btn' onClick={(e) => {
                    e.preventDefault();
                    setDisable(false)}}>Edit</span>  </label>
                <input 
                name="fullname" 
                value={values.fullname}
                onChange={handleChange}
                type="text" 
                placeholder='Vivek Srivastava' 
                disabled={disable}  />
            </div>

            <div className='user-info-section my-2'>
                <label htmlFor="phone" className='users-number mt-1'>Mobile Number <span className='edit-btn' onClick={(e) => {
                    e.preventDefault();
                    setDisable(false)}}>Edit</span>   </label> 
                <input 
                name="phone" 
                type="rel" 
                value={values.phone}
                onChange={handleChange}
                placeholder='+91 8989656545' 
                disabled={disable} 
                />
            </div>

            <div className='user-info-section my-2'>
                <label htmlFor="phone" className='users-number mt-1'>Update Password <span className='edit-btn' onClick={(e) => {
                    e.preventDefault();
                    setDisable(false)}}>Edit</span>   </label> 
                <input 
                name="password" 
                type="password" 
                value={values.password}
                onChange={handleChange}
                placeholder='*************' 
                disabled={disable}  
                />
            </div>
            
                    <div className="info-btn mt-4" onClick={handleSubmit}>Submit</div>
            </form>
        </div>
    </div>
    </>
  )
}
