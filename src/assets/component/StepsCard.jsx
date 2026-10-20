import StepItem from "./StepItem";
import formImg from "../step-Icon.png"
export default function StepsCard({steps}){
    return(
       <div className="relative w-68.5 shrink-0  rounded-lg overflow-hidden">
                       <img src={formImg} alt="" 
                       className="absolute inset-0 w-full h-full object-cover"/>
               
                       <div className="relative flex flex-col gap-6 p-8">
                         
                       {steps.map((step) => (
                           <StepItem
                           key={step.number}
                           number={step.number}
                           title={step.title}
                           isActive={step.number==1}
                           />
                           
                       ))}
                       
                       
                       </div>
                       </div>
    )
}