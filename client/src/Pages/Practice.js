import React from "react";
import { useState } from "react";
export default function Practice() {


  
  const [ country, setCountry ] = useState("");

  const countries = [
    {
      name: "Nepal",
      value: "NP",
      cities: ["Kathmandu", "bhaktapur", "Butwal"],
    },
    {
      name: "India",
      value: "IN",
      cities: ["Delhi", "Mumbai", "Banguluri"],
    },
    {
      name: "Pakistan",
      value: "pk",
      cities: ["Karachi", "Lahore", "Islambad"],
    },
  ];

  return (
    <div>
      <select
        onChange={(e) => {
          setCountry(e.target.value);
        }}
      >
        <option >Select a country</option>
        {countries.map((country, index) => {
          return <option key={index} value={country.value}>{country.name}</option>;
        })}
      </select>

    {country &&  <>
      <select>
            <option>Select a cities</option>
            {countries.find((find)=> find.value===country)?.cities.map((city, index)=>{
              return <option key={index} value={city} >{city}</option>;
            })
            }
            
          </select>
          </>}
       
      
  
      



    </div>
  );
}
