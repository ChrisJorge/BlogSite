import React from 'react';
import FormComponent from './FormComponent';
function Form({func, data}) {

   
  return (
    <>
        <div className="formMasterContainer">
            <div className='formContainer'>
               <div className="announcementContainer">
                <div className="announcementTxt"></div>
               </div>
                <form  onSubmit={func}>
                    {data.map((item, i) => {
                        return(
                            <div key={i}>
                                <FormComponent labeltype={item.labeltype} labeltxt={item.labeltxt} name={item.name} placeholdertxt={item.placeholdertxt}/>
                            </div>
                        )
                    })}
                <div className="buttonContainer">
                    <button type='reset'>Clear</button>
                    <button type='submit'>Submit</button>
                </div>
                </form>

            </div>
        </div>
        
    </>
  )
}

export default Form