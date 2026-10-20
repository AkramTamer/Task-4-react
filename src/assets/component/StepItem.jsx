export default function StepItem({number,title,isActive}){
return(
    <div>
        <div className="flex items-center gap-4">
        <div className={`w-8 h-8 shrink-0 rounded-full border border-white flex items-center justify-center text-white">
        ${isActive?"bg-sky-200 text-blue-900 border-sky-200":"text-white"
        }`}>{number}</div>
        <div className="flex flex-col">
        <span className="text-xs text-blue-200">STEP {number}</span>
        <p className="text-white font-bold text-sm">{title}</p>
        
        </div>
    </div>
    </div>
)

}