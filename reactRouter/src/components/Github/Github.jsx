// import React, { useEffect, useState } from 'react'
import { useLoaderData } from "react-router-dom";

function Github() {
  //   const [data, setData ] = useState([])
  //   useEffect(() => {

  //           fetch('https://api.github.com/users/mukeshutmani')
  //            .then( response => response.json())
  //            .then ( data => {
  //                   setData(data)
  //            })
  //   },[])

  const data = useLoaderData();

  return (

    <>
    
   <div className="text-center m-1 bg-gray-600 text-white p-5 text-4xl">

      Github Followers: {data.followers}
      <h1>Name: {data.name}</h1> 
    
      <img
        src={data.avatar_url}
        alt="Git Picture"
        width={300}
        className=" rounded-full "
      />
    </div>

    </>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/mukeshutmani");
  return response.json();
};
