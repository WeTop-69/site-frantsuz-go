import { ref, onValue, getDatabase } from 'firebase/database';
import React, { Suspense, useEffect, useState } from 'react'
import InfoPrase from './InfoPrice';

let infocar3 = []
    let i =[]

function IBC() {

    const dbRef =  getDatabase();
    const btnInfo2 = ref(dbRef, 'cars');
    const [infocar, setInfo] = useState(infocar3)
    onValue(btnInfo2, (snapshot) => {
        let infocar2 = snapshot.val()
        let infocar4 = Object.values(infocar2)
        if (i.length == infocar4.length){
        } else {
            i = infocar4
            setTimeout(() => {
                setInfo(infocar3 = infocar4);
            }, 1000);
        }
    });
    console.log(infocar)
    console.log(infocar3)
  return (
    <div className='blockCarOf'>
        {infocar.map(post =>
        <InfoPrase post={post} key={post.b}/>  
        )}
    </div>
  )}
  export default IBC;