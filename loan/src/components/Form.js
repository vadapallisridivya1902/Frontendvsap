import React from 'react'

import {useForm}from 'react-hook-form';

export default function Form() {

    const{register, handleSubmit,formState:{errors}}= useForm()
    const onSubmit=data=>console.log(data);

    //console.log(Watch('Name'));
  return (
    <section>
        <div className="register">
            <div className="col-1">
                <h2>LOAN APPLICATION FORM</h2>
                <span>Apply and enjoy the services</span>

                <form id='form' className='flex flex-col'onSubmit={handleSubmit(onSubmit)}>
                    <input type="text"{...register("Account Number")}placeholder='Account Number' />
                    <input type="text"{...register("Loan Amount")}placeholder='Loan Amount' />
                    <input type="text"{...register("Loan Period")}placeholder='Loan Period' />
                    <input type="text"{...register("Interest Percentage",{required:true,minLength:2,maxLenth:10})}placeholder='Interest Percentage' />
                    {errors.Percentage?.type==="required"}
                    <button className='btn'>APPLY NOW</button>
                    <button className='btn'>HOME</button>
                </form>
            </div>
            <div className="col-2"></div>
            
        </div>
    </section>
  )
}
