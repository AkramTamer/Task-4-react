import { useState } from "react";
export default function LoginForm(){
    const [date, setDate] = useState({
        name:"",
        AddressNumber:"",
        PhoneNumber:"",
        isEmployee: false,
        gender:"",
        country:"",
        desc:""
    });
    const isFormValid=
    date.name.trim()!==""&&
    date.AddressNumber.trim()!==""&&
    date.PhoneNumber.trim()!==""&&
    date.gender!==""&&
    date.country!==""

   
    const handleSubmit = (e)=>{
        e.preventDefault()
        
        console.log(date)   

    }
    return(
        <div>
            <form onSubmit={handleSubmit} className="flex flex-col items-start gap-15">
                <div className="flex flex-col gap-3">
                <h2 className="text-[rgba(2,41,89)] text-4xl font-bold">Personal info</h2>
                <p className="text-[#9699AA] text-lg">Please provide your name, email address, and phone number.</p>
                </div>
             <div className="flex flex-col gap-5 w-full">
                   <div className="flex flex-col gap-1">
                  <label className="text-[rgba(2,41,89)] font-bold">Name</label>
                  <input 
                  onChange={(e)=>{
                  
                    setDate((prev)=>({...prev,name: e.target.value}));

                  }}
                  value={date.name}
                  className="outline-0 border-2 border-gray-400 p-2 rounded-lg font-bold" type="text" placeholder="e.g.stephenking" />
                </div>
                   <div className="flex flex-col gap-1">
                  <label className="text-[rgba(2,41,89)] font-bold">Email Address</label>
                  <input
                  onChange={(e)=>{
                   
                    setDate((prev)=>({...prev,AddressNumber: e.target.value}));

                   }}
                  value={date.AddressNumber} 
                  className="outline-0 border-2 border-gray-400 p-2 rounded-lg font-bold" type="email" placeholder="e.g.stephenking@lorem.com" />
                </div>
                   <div className="flex flex-col gap-1">
                  <label className="text-[rgba(2,41,89)] font-bold">Phone Number</label>
                  <input
                  onChange={(e)=>{

                   setDate((prev)=>({...prev,PhoneNumber: e.target.value}));
            
                  }}
                   value={date.PhoneNumber}
                   className="outline-0 border-2 border-gray-400 p-2 rounded-lg font-bold" type="number" placeholder="e.g.+1234567890" />
             
               <div className="flex items-center gap-2">
                <input type="checkbox" onChange={()=>{
                    setDate((prev)=>({...prev,isEmployee:!date.isEmployee}))
                }} checked={date.isEmployee} />
                 <label className="text-[rgba(2,41,89)] font-bold">Employee</label>
                 </div>
                 </div>
                 </div>
                 <div>
                <input type="radio" name="gender" onChange={()=>{
                  setDate((prev)=>({...prev,gender:"male"}))  
                }}
                checked={date.gender=="male"} />
                 <label className="text-[rgba(2,41,89)] font-bold">male</label>
                <input type="radio" name="gender"onChange={()=>{
                  setDate((prev)=>({...prev,gender:"female"}))  
                }}
                 checked={date.gender=="female"} />
                 <label className="text-[rgba(2,41,89)] font-bold">female</label>

             </div>
             <select onChange={(e)=>{
                setDate((prev)=>({...prev, country: e.target.value }))

             }}>
                <option value="egypt">Egypt</option>
                <option value="italy">Italy</option>
             </select>
            
             {isFormValid&&(
             <button className="bg-[rgba(2,41,89)] text-white py-3 rounded-lg font-bold text-lg cursor-pointer px-10 self-end ">Next step</button>
             )}
            </form>
        </div>

    )
}