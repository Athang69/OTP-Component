import { useRef } from "react"

export default function Otp(){
    const inputRef=Array.from({length:6},()=>useRef());
    function onChange(e,i){
        const value=e.target.value
        if(value && i<5){
            inputRef[i+1].current.focus();
        }
    }

    function onKeyDown(e,i){
        if(e.key==="Backspace"){
        if(e.target.value===""){
            if(i>0)
        {
            inputRef[i-1].current.focus();
            inputRef[i-1].current.value=""
        }}}
    }

    return <div className="flex gap-2"> 
    {
        inputRef.map((ref,i)=>(
            <input key={i} ref={ref} maxLength={1} className="w-10 h-10 border rounded text-center"
            onChange={(e)=>onChange(e,i)}
            onKeyDown={(e)=>onKeyDown(e,i)} />
        ))}
    </div>
}