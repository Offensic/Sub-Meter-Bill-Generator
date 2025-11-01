import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { myContext } from '../ContextAPI/ContextProvider'
function InputForm() {

    const { invoice, setInvoice } = useContext(myContext);


    const navigate = useNavigate();

    const handleChnange = (e) => {

        const { id, value } = e.target;
        setInvoice((preveState) => ({
            ...preveState, [id]: value,
        }));

    }

    const handlenavigate = (e) => {
        e.preventDefault();
        console.log(invoice)
        navigate('/invoice')
    }
    return (
        <div>

            <div className='bg-color  w-[100%] h-full py-10 flex justify-center items-center flex-col '>



                <form className="w-[80%] sm:w-[400px]" onSubmit={handlenavigate}>

                    {/* heading of of this page */}
                    <div className='border-b-4 mb-10 pb-3 w-fit border-white'>
                        <h1 className='text-[white] text-[22px] tracking-tighter font-bold uppercase '>Sub Meter Bill / Invoice Maker</h1>
                    </div>

                    <div className="mb-5">
                        <label htmlFor="Bill_to" className="block mb-3 text-sm font-medium text-white">Customer name / Bill To <span className='text-[11px] pl-2 italic'>(Required)</span></label>
                        <input type="text" id="Bill_to" className="bg-gray-50  text-gray-900 text-sm rounded-lg  block w-full p-2.5 " onChange={handleChnange} placeholder="Enter name" required />
                    </div>


                    <div className="mb-5">
                        <label htmlFor="Shop_no" className="block mb-3 text-sm font-medium text-white">Shop No <span className='text-[11px] pl-2 italic'>(Required)</span></label>
                        <input type="text" id="Shop_no" className="bg-gray-50 border  text-gray-900 text-sm rounded-lg  block w-full p-2.5 " onChange={handleChnange} placeholder='Shop no' />
                    </div>


                    <div className="mb-5">
                        <label htmlFor="Meter_no" className="block mb-3 text-sm font-medium text-white">Meter No <span className='text-[11px] pl-2 italic'>(Required)</span></label>
                        <input type="text" min={0} id="Meter_no" className="bg-gray-50 border  text-gray-900 text-sm rounded-lg  block w-full p-2.5 " onChange={handleChnange} placeholder='Meter no'  />
                    </div>



                    <div className="mb-5">
                        <label htmlFor="Units" className="block mb-3 text-sm font-medium text-white">Total Unit <span className='text-[11px] pl-2 italic'>(Required)</span></label>
                        <input type="number" id="Units" className="bg-gray-50 border  text-gray-900 text-sm rounded-lg  block w-full p-2.5 " onChange={handleChnange} placeholder='Total Unit Use by the Customer' required />
                    </div>



                    <div className="mb-5">
                        <label htmlFor="Unit_price" className="block mb-3 text-sm font-medium text-white">Unit Price <span className='text-[11px] pl-2 italic'>(Required)</span></label>
                        <input type="text" id="Unit_price" className="bg-gray-50 border  text-gray-900 text-sm rounded-lg  block w-full p-2.5 " onChange={handleChnange} placeholder='Set the Per Unit Price' required />
                    </div>



                    <div className="mb-5">
                        <label htmlFor="Rent" className="block mb-3 text-sm font-medium text-white">Rent <span className='text-[11px] pl-2 italic'>(Optional)</span></label>
                        <input type="number" id="Rent" className="bg-gray-50 border  text-gray-900 text-sm rounded-lg  block w-full p-2.5 " onChange={handleChnange} placeholder='Rent Amount' />
                    </div>



                    <div className="mb-5">
                        <label htmlFor="Internet_subscription" className="block mb-3 text-sm font-medium text-white">Internet Subscription Fee <span className='text-[11px] pl-2 italic'>(Optional)</span></label>
                        <input type="number" id="Internet_subscription" className="bg-gray-50 border  text-gray-900 text-sm rounded-lg  block w-full p-2.5 " onChange={handleChnange} placeholder='Internet Subscription Charges' />
                    </div>


                    <div className="mb-5">
                        <label htmlFor="Other_charges" className="block mb-3 text-sm font-medium text-white">Other Charges<span className='text-[11px] pl-2 italic'>(Optional)</span></label>
                        <input type="number" id="Other_charges" className="bg-gray-50 border  text-gray-900 text-sm rounded-lg  block w-full p-2.5 " onChange={handleChnange} placeholder='Additional other Charges that you want to add' />
                    </div>


                    <div className="mb-5">
                        <label htmlFor="Due_date" className="block mb-3 text-sm font-medium text-white">Due Date of Bill / Last Date <span className='text-[11px] pl-2 italic'>(Required)</span></label>
                        <input type="date" id="Due_date" className="bg-gray-50 border  text-gray-900 text-sm rounded-lg  block w-full p-2.5 " onChange={handleChnange} placeholder='Last Date of Bill Submission' required />
                    </div>



                    <button type="submit" className="text-white cursor-pointer  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center btn-color hover:bg-[#041b04] border-white" >See Preview </button>
                </form>

            </div>
        </div>
    )
}

export default InputForm