import React from 'react'

function FormComponent({labeltype, labeltxt,name,placeholdertxt}) {
  return (
   <>
    <div className='formEntry'>
        <div className="labelContainer">
            <label htmlFor="userName">{labeltxt}</label>
        </div>
        <input type={labeltype} name={name} id={name} placeholder={placeholdertxt}/>
    </div>
   </>
  )
}

export default FormComponent