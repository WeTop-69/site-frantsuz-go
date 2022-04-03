import { ref, onValue, getDatabase, get, child } from 'firebase/database';
import React, { Suspense, useEffect, useState } from 'react'
import InfoPrase from './InfoPrice';
let  i = []
let infocar3 = []
function IBC() {
  const dbRef =  getDatabase();
  const [infocar, setInfo] = useState([])
    const btnInfo2 = ref(dbRef, 'cars');
    onValue(btnInfo2, (snapshot) => {
        let infocar2 = snapshot.val()
        let infocar4 = Object.values(infocar2)
        if (i.length == infocar4.length){
        } else {
            i = infocar4
            setTimeout(() => {
                setInfo(infocar3 = infocar4);
            }, 5000);
        }
    });
    console.log(infocar)
return(
    <div className='blockCarOf'>
        {
          infocar.map(post =>
            <InfoPrase post={post} key={post.b}/>  
            )}
    </div>
)}
  export default IBC;