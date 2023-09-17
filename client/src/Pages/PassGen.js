import { useCallback, useEffect, useState } from "react";



export default function PassGen(){

    const {number, setNumber}= useState(false)
    const {charc, setCharc}= useState(false)
    const {password,setPassword}= useState('')
    const {length, setLenght} = useState(8)


    const passwordGenerator= useCallback(
      () => {
        const pass = ""
        const str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        if(number) str += "1234567890"
        if(charc) str += "!@#$%^&*()"
        

        const result = [...str].map((char, i) => {
            const randomPass = Math.floor(Math.random() * (i + 1));
            pass += str.charAt(randomPass);
          });
        setPassword(pass)
      },
      [number,charc],
    )
    




    

useEffect(()=>{
passwordGenerator()
},[charc,number,length,setPassword])

return 
(
<input type="text" id="password" placeholder="Your PAssword"/>
  

    
)

   
    





}