import React,{useEffect} from 'react'
import axios from 'axios'


export default function Hollywood() {

  useEffect(()=>{
    axios.get("http://localhost:5000/getallUserData")
    .then((response)=>{ console.log(response)})
  },[])


  return (
    <div>
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white pt-[100px]">
      {/* Card Image */}
      <img className="w-full h-[200px] object-cover" src='https://image.api.playstation.com/vulcan/ap/rnd/202207/1210/4xJ8XB3bi888QTLZYdl7Oi0s.png'alt='{title}' />

      {/* Card Body */}
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">God of War Ragnarök</div>
        <p className="text-gray-700 text-base">
          feklefmklsdkmfmsldf fsds,f lsdnfsndf sdflksj fl
        </p>
      </div>

      {/* Card Footer */}
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #React
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #Tailwind
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #CSS
        </span>
      </div>
    </div>







    


    </div>
  )
}
