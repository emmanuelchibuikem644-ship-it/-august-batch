 import React from 'react'

export default function Project(props) {
   console.log(props)
 return (
    <div className="bg-green-500 p-3 w-50">
    <Image scr={props.src} width={200} hight={200} />
    <h2>name: {props.name}</h2>
    <h2>role: {props.role}</h2>
    <h2>bio:{props.bio}</h2>
  
    </div> 
 )
}
