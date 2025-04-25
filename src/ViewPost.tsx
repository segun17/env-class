// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import {useParams} from "react-router-dom"

// function ViewPost() {
//     const [sinlePost,setSinglePost]=useState({})
//     const params= useParams()
//     console.log(params.id)
//     useEffect(()=>{
        // axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`).then((res)=>{
//             console.log(res.data)
//             setSinglePost(res.data)
//         }).catch((err)=>{
//             console.log(err)
//         })
//     },[])
//   return (
//     <div>
//      <div>TITLE: {sinlePost.title}</div> 
//      <div>Desc: {sinlePost.body}</div>
//     </div>
//   )
// }

// export default ViewPost


// import axios from 'axios'
// import React, { useState } from 'react'

// function ViewPost() {
//     const [city,setCity]=useState("")
//    const [data,setData]=useState({})
//     const handleWeather=()=>{
//        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=London&appid=4ee1fb0f082747a8021bb5edffc440c5`).then((res)=>{
//          console.log(res)
//        }).catch((err)=>{
//         console.log(err)
//        })
//     }

//   return (
//     <div>
//         <div>
//             <input className='border' value={city} onChange={(e)=>setCity(e.target.value)}/>
//             <button onClick={handleWeather} className='block bg-gray-200'>Check</button>
//         </div>
//         <div className='bg-gray-200 text-white p-3 rounded mt-4 space-y-5'>
//             <p>Name:</p>
//             <p>Desc:</p>
//             <p>Temp:</p>
//             <p>Hum: </p>
//         </div>
//     </div>
//   )
// }

// export default ViewPost
