import React, { useState, useEffect } from 'react';


function UserProjects() {


   const countDown = (num) => {
    console.log(num)

    if(num === 0) return

    countDown(num - 55)

   }

   countDown(5)



  return (
    <div>
      
    </div>
  );
}

export default UserProjects;
