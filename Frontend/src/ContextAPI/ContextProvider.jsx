import { useContext, useState, useEffect, createContext } from "react"


const myContext = createContext();

function ContextProvider(props) {


const [invoice, setInvoice] = useState({
        Bill_To: "",
        Date: "",
        Due_date: "",
        Shop_no: "",
        Meter_no: "",
        Units: 0,
        Unit_price: 0,
        Rent: 0,
        Sub_total: 0,
        Previous_bill: 0,
        Internet_subscription: 0,
        Other_charges: 0,
        Total: 0,
        Payement_status: 'none',
        // Late_payment: 300,
        Bill_history: [
            { month: "Jan", units: 0, bill: 0, payment: 0 },
            { month: "Feb", units: 0, bill: 0, payment: 0 },
            { month: "Mar", units: 0, bill: 0, payment: 0 },
            { month: "Apr", units: 0, bill: 0, payment: 0 },
            { month: "May", units: 0, bill: 0, payment: 0 },
            { month: "Jun", units: 0, bill: 0, payment: 0 },
            { month: "Jul", units: 0, bill: 0, payment: 0 },
            { month: "Aug", units: 0, bill: 0, payment: 0 },
            { month: "Sep", units: 0, bill: 0, payment: 0 },
            { month: "Oct", units: 0, bill: 0, payment: 0 },
            { month: "Nov", units: 0, bill: 0, payment: 0 },
            { month: "Dec", units: 0, bill: 0, payment: 0 },
        ],
    });

    
    return (
        <myContext.Provider value={{ invoice, setInvoice }}>
            {props.children}
        </myContext.Provider>

    )

}

export { myContext, ContextProvider };