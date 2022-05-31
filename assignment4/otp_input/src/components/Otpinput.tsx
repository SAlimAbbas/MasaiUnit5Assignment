import { useRef, useState } from "react";
import "./otpInput.css";

type OtpInputType = {
  totalInputs: number;
  onChange:(otp:string)=>void;
};

export const Otpinput = ({ totalInputs,onChange }: OtpInputType) => {

    const inputRef=useRef<HTMLInputElement[]>([]);
    const [otp,setOtp]=useState("")

  return (
    <div>
      {new Array(totalInputs).fill("").map((el, index) => (
        <input
        onChange={(e)=>{
            setOtp(otp+e.target.value);
        }}

        onKeyUp={(e)=>{
            if(e.code==="Backspace")
            {
                
                if(otp.length<=totalInputs)
                {
                  setOtp(otp.slice(0,otp.length-1))

                  inputRef.current[index-1]?.focus();
                  inputRef.current[index-1]?.select();
                  inputRef.current[index-1]?.setAttribute("style","border:1px solid blue");
                }
               
                
              
                
      
               
            }
            else{
              if(otp.length<=totalInputs)
              {
                inputRef.current[index+1]?.focus();
                inputRef.current[index+1]?.setAttribute("style","border:1px solid blue");
                 onChange(otp)
                
              }
             
            }

           
        }}
        ref={(element)=>{
            if(inputRef.current && element)
            {
                inputRef.current[index] = element;
                if(otp.length==totalInputs)
                {
                  element.setAttribute("style","border:1px solid green;color:lightgreen");
                }
                else{
                  element.setAttribute("style","none");

                }
            }
        }} 
        type="text" 
        maxLength={1} 
        key={index}
         className="otpInput" />
      ))}
    </div>
  );
};
