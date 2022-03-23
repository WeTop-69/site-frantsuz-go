import React, { useState } from "react";
import ReactDOM from 'react-dom';
import car from '../image/pngwing 64.png'
import carDesi from '../image/pngwing 59.png'
import { child, get, getDatabase, onValue, ref, set} from "firebase/database";


function KallCar() {
  const [namecar, cinstnam] = useState('');
  const dbRef = getDatabase();
  const btnInfo2 = ref(dbRef, 'cars/E423YK/carNamber');
  onValue(btnInfo2, (snapshot) => {
    const namecar = snapshot.val();
    document.getElementById('namber1').innerHTML = namecar;
  })
  const dbRefBtn =getDatabase();
  const btnInfo = ref(dbRefBtn, 'cars/E423YK/free');
  onValue(btnInfo, (snapshot) => {
    const RefBtn = snapshot.val();
    if (RefBtn == false){
      const her2 = "НЕДОСТУПНА"
      var cdo = document.querySelector('#carDesOne1');
      cdo.className = 'image-car none';
      var cd = document.querySelector('#carDesTwo1');
      cd.className = 'image-car block';
      var bcc = document.querySelector('#blockCarColor1');
      bcc.className = 'BlockCar black';
      var nam = document.querySelector('#namber1');
      nam.className = 'item-block namber text-color';
      document.getElementById('infoCar1').innerHTML = her2;
    } else{
      const her2 = "ДОСТУПНА"
      var cdo = document.querySelector('#carDesOne1');
      cdo.className = 'image-car block';
      var cd = document.querySelector('#carDesTwo1');
      cd.className = 'image-car none';
      var bcc = document.querySelector('#blockCarColor1');
      bcc.className = 'BlockCar';
      var nam = document.querySelector('#namber1');
      nam.className = 'item-block namber';
      document.getElementById('infoCar1').innerHTML = her2;
    }
  })
  function btnInfoCarTwoo() {
  const dbRefTwo = ref(getDatabase());
  get(child(dbRefTwo, `cars/E423YK/free`)).then((snapshot) => {
    const btnInfoOne = snapshot.val();
    if (btnInfoOne == true){
      const db = getDatabase();
      const her2 = "НЕДОСТУПНА"
      var cdo = document.querySelector('#carDesOne1');
      cdo.className = 'image-car none';
      var cd = document.querySelector('#carDesTwo1');
      cd.className = 'image-car block';
      var bcc = document.querySelector('#blockCarColor1');
      bcc.className = 'BlockCar black';
      var nam = document.querySelector('#namber1');
      nam.className = 'item-block namber text-color';
      document.getElementById('infoCar1').innerHTML = her2;
      set(ref(db, 'cars/E423YK'), {
        carNamber: "E423YK",
        driverName: "Илья",
        free : false,
        model: "Lada Granta синяя",
      });
    } else {
      const db = getDatabase();
      const her2 = "ДОСТУПНА"
      var cdo = document.querySelector('#carDesOne1');
      cdo.className = 'image-car block';
      var cd = document.querySelector('#carDesTwo1');
      cd.className = 'image-car none';
      var bcc = document.querySelector('#blockCarColor1');
      bcc.className = 'BlockCar';
      var nam = document.querySelector('#namber1');
      nam.className = 'item-block namber';
      document.getElementById('infoCar1').innerHTML = her2;
      set(ref(db, 'cars/E423YK'), {
        carNamber: "E423YK",
        driverName: "Илья",
        free : true,
        model: "Lada Granta синяя",
        }); 
      }
    })
  }
  var blocBlac = false;
  function infoBlockCarFree() {
    if (blocBlac == false){
      var bb = document.querySelector('#blockBlack');
      bb.className = 'block-black block';
      var ibc = document.querySelector('#infoBlocCar');
      ibc.className = 'info-bloc-car block';
      blocBlac = true
    } else{
      var bb = document.querySelector('#blockBlack');
      bb.className = 'block-black';
      var ibc = document.querySelector('#infoBlocCar');
      ibc.className = 'info-bloc-car';
      blocBlac = false
    }
  }
     return (
      <div className="rast-blok">
        <div id="blockCarColor1" onClick={infoBlockCarFree} className="BlockCar">
            <div className="block-car-btn">
              <img id="carDesOne1" className="image-car none" src={car} alt="" />
              <img id="carDesTwo1" className="image-car " src={carDesi} alt="" />
              <span id='namber1' className='item-block namber'>K999TA</span>
            </div>
        </div>
        <div onClick={btnInfoCarTwoo} className="filter-status-car">
          <div id="infoCar1" className="item-info"></div>
        </div>
    </div>
    );
  }

export default KallCar;