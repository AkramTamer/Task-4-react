import StepsCard from "../assets/component/StepsCard"
import LoginForm from "../assets/component/LoginForm"

export default function Home(){
    const steps =[
        {number:1,title:"YOUR INFO"},
        {number:2,title:"SELECT PLAN"},
        {number:3,title:"ADD-ONS"},
        {number:4,title:"SUMMARY"},
    ];
    return(
        <div className="bg-[rgba(239,245,255)] min-h-screen flex justify-center items-center">
            <div className="bg-white rounded-lg p-4 w-full max-w-4xl flex gap-30">
            <StepsCard steps={steps} />
            <LoginForm />
            
                </div>
                </div>
            
            
                
    
    
    
  
    );
    
}
               
               


           
        
