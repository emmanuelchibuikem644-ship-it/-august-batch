import React from 'react'

const Students = () => {
    const students=[
      {id:1,  name:"joy"},
      {id:2,  name:"obinna"},
      {id:3,  name:"victory"},
      {id:4,  name:"dollakop"},
      {id:5,  name:"mircle"},
    ]
    
  return (
    <div>
    {students.map(student=>
    (
       <p>{student.name}</p>
    )
    )}
    </div>
  );
};