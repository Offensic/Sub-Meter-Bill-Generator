import React, { useEffect, useState, useRef, useContext } from "react";
import { MdKeyboardBackspace } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";


import dayjs from "dayjs";

import { myContext } from "../ContextAPI/ContextProvider.jsx";
const InvoicePage = () => {
    const printRef = useRef();
    const navigate = useNavigate();

    const { Latepayment, setLatepayment } = useState(300)
    const { invoice, setInvoice } = useContext(myContext)

    const handlePrint = () => {
        window.print();
    };

    // ✅ Step 1: Check if required fields exist
    const isValid = invoice?.Meter_no && invoice?.Bill_to && invoice.Due_date;

    // ✅ Step 2: If invalid, redirect immediately (no flash)
    if (!isValid) {
        return <Navigate to="/" replace />;
    }
    useEffect(() => {
        console.log(invoice.Due_date)
        const SubTotal = Number(invoice.Units) * Number(invoice.Unit_price) + Number(invoice.Tax);
        console.log('SubTotal', SubTotal)


        const Total = SubTotal + Number(invoice.Other_charges) + Number(invoice.Internet_subscription);
        console.log('Total', Total)

        const LatePayment = Total + Number(invoice.Late_payment);
        console.log('LatePayment', LatePayment)

        setInvoice((prev) => ({
            ...prev,
            Sub_total: SubTotal,
            Total: Total,
            Late_payment: LatePayment,

        }))

    }, [])

    const handleback = () => {
        navigate('/')
    }

    return (

        <div className="relative bg-[black] mt-0 pt-8 print:pt-0 " >



            {/* Invoice Printable Format      */}
            <div>
                <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-md " id="invoice" ref={printRef}>

                    {/* Header */}
                    <div className="h-50 w-full px-7 py-4 bg-[#D9D9D9] text-[black] flex justify-center items-center">
                        <div className="h-full w-full bg-[#165F6C] flex justify-between items-center p-2 rounded-xl">
                            {/* Logo here */}
                            <div className="h-full w-50  flex  justify-center items-center ">
                                <h1 className="text-3xl text-[white] font-bold">Plaza Logo</h1>
                            </div>

                            {/* Sub header Details */}
                            <div className="h-full w-50   text-white flex justify-end items-end flex-col">
                                <p>0300-80808080</p>
                                <p>Near Gajumath Fasil Town</p>
                            </div>
                        </div>

                    </div>


                    <div className="p-4">

                        {/* Main Heading  */}
                        <h1 className="text-4xl font-bold text-center m-10">Monthly Bill</h1>

                        {/* Sub header   */}
                        <div className="grid grid-cols-2 gap-4 mb-6 ">
                            <div>
                                <p className="pt-1"><strong>Bill To:</strong> {invoice.Bill_to}</p>
                                <p className="pt-1"><strong>Date:</strong> {dayjs(new Date()).format("MMM-DD-YYYY")}</p>
                                <p className="font-semibold pt-1"><strong>Due Date: </strong >{dayjs(invoice.Due_date).format("MMM-DD-YYYY")}</p>
                            </div>
                            <div>
                                <p className="pt-1"><strong>Reference No:</strong> {invoice.Reference_no}</p>
                                <p className="pt-1"><strong>Meter:</strong> {invoice.Meter_no}</p>
                            </div>
                        </div>


                        <div className="my-10  grid  grid-cols-1 sm:grid-cols-2 gap-4">

                            {/* Previous Bill Table */}

                            <div className=" flex flex-col gap-10 ">
                                <div className="border pl-3  py-5 rounded-md">
                                    <p className="text-2xl font-bold">Previous Bill History</p>
                                </div>

                                <table className="table-auto w-full text-sm text-left">
                                    <thead className="h-12 ">
                                        <tr >
                                            <th className="border p-2">Month</th>
                                            <th className="border p-2">Units</th>
                                            <th className="border p-2">Bill</th>
                                            <th className="border p-2">Payment</th>
                                        </tr>
                                    </thead>
                                    <tbody className="">
                                        {invoice.Bill_history.map((row, index) => (
                                            <tr key={index} className="h-2 text-[13px]">
                                                <td className="px-2 py-1  border  ">{row.month}</td>
                                                <td className="px-2 py-1 border">{row.units}</td>
                                                <td className="px-2 py-1 border">{row.bill}</td>
                                                <td className="px-2 py-1 border">{row.payment}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>

                            </div>


                            {/* Current Bill Table */}
                            <div className=" flex flex-col gap-10">
                                <div className="border pl-3  py-5 rounded-md">
                                    <p className="text-2xl font-bold">Current Bill</p>
                                </div>

                                <div className="">
                                    <div className="flex justify-between border py-1 px-3    ">
                                        <span >Units:</span>
                                        <span className="font-bold">{invoice.Units || '0'}</span>
                                    </div>
                                    <div className="flex justify-between border py-1 px-3  ">
                                        <span>Unit Price:</span>
                                        <span>{invoice.Unit_price || '0'}</span>
                                    </div>
                                    <div className="flex justify-between border py-1 px-3  ">
                                        <span>Tax:</span>
                                        <span>{invoice.Tax || '0'}</span>
                                    </div>
                                    <div className="flex justify-between border py-2 px-3    font-bold ">
                                        <span>Sub Total:</span>
                                        <span>{invoice.Sub_total || '0'}</span>
                                    </div>
                                    <div className="flex justify-between border py-1 px-3  ">
                                        <span>Previous Bill:</span>
                                        <span>{invoice.Previous_bill}</span>
                                    </div>
                                    <div className="flex justify-between border py-1 px-3  ">
                                        <span>Internet Subscription:</span>
                                        <span>{invoice.Internet_subscription || '0'}</span>
                                    </div>
                                    <div className="flex justify-between border py-1 px-3  ">
                                        <span>Other Charges:</span>
                                        <span>{invoice.Other_charges || '0'}</span>
                                    </div>
                                    <div className="flex justify-between border  py-2 px-3 font-bold ">
                                        <span>Total:</span>
                                        <span>{invoice.Total}</span>
                                    </div>
                                    <div className="flex justify-between border  py-2 px-3 font-bold text-red-600 ">
                                        <span>Late Payment:</span>
                                        <span>{Math.trunc(invoice.Late_payment) || '0'}</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                        {/* Footer */}
                        {/* <div className="text-sm text-gray-700 leading-relaxed mt-20">
                            <p className="mb-2 text-end">
                                براہ کرم ادائیگی مقررہ تاریخ تک یقینی بنائیں تاکہ سروس میں کسی قسم کی
                                رکاوٹ یا تاخیر جرمانے سے بچا جا سکے۔
                            </p>
                            <p className="mb-4 text-end">
                                آپ بینک ٹرانسفر، کریڈٹ کارڈ، جاز کیش یا ایزی پیسہ کے ذریعے ادائیگی کر سکتے ہیں۔
                            </p>
                            <p>
                                Please ensure the payment is made by the due date to avoid any service
                                interruption or late fee charges. You can pay via bank transfer,
                                Credit Card, Jazz Cash, or Easy Paisa. Thank you for your prompt
                                attention to this bill.
                            </p>
                        </div> */}

                    </div>

                </div >
            </div>

            {/* buttong for Invoice Print */}
            <div className="flex justify-center item-center mt-5 fixed  bottom-0 right-4 ">
                <button onClick={handlePrint} className="bg-[#27aac1] cursor-pointer text-white px-4 py-2 rounded-md mb-4" >
                    Print Invoice
                </button>
            </div>

            {/* buttong for Invoice Print */}
            <div className="flex justify-center item-center mt-5 fixed  top-0 left-4 ">
                <button onClick={handleback} className="bg-[#27aac1] flex justify-center gap-2 items-center cursor-pointer text-white px-1  rounded-md mb-4" >
                    <MdKeyboardBackspace size={25} />
                    <span>Back</span>
                </button>
            </div>
        </div>
    );
};

export default InvoicePage;
