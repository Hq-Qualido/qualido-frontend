import React,{useState} from 'react'

export default function Security() {
    const [disable, setDisable] = useState(true);

    return (
    <>
    <div className="container">
        <div className="row">
            <form>
                <label htmlFor="">E-mail Address</label> <br />
                <label htmlFor="">Your Name</label> <br /> 
                <label htmlFor="" aria-disabled>Enter Mobile Number</label> <br />
                <input type="text" placeholder='idadkjgnjdhg' disabled={disable}  />
                <button className='buy-btn'
                onClick={(e) => {
                    e.preventDefault();
                    setDisable(false)}}
                    >
                    Butn
                    </button>
            </form>
        </div>
    </div>
    </>
  )
}
