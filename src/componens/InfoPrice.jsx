import { child, get, getDatabase, ref, set } from "firebase/database";
import edit from '../image/edit_black_24dp.svg'
import ok from '../image/done_black_24dp.svg'
import { useState } from "react";

function InfoPrase(props) {
    let huy = props.post.driverName
    let id = props.post.carNumber
    let id2 = props.post.carNumber + "1"
    let id3 = props.post.carNumber + "2"
    let id4 = props.post.carNumber + "3"
    const [huy2, setInfo2] = useState(huy)
    function her() {
        setInfo2(huy = document.getElementById(id).value)
        const db = getDatabase();
        set(ref(db, 'driver/' + id), {
            driverName: huy,
        }); 
        let her55 = "0"
        get(ref(db, 'cars/' + id + '/free')).then((snapshot) => {
            her55 = snapshot.val();
            console.log(her55)
          })
        setTimeout(() => {
            set(ref(db, 'cars/' + id), {
                carNumber: props.post.carNumber,
                driverName: huy,
                free : her55,
                model: props.post.model,
            }); ;
        }, 1000);
        var bcc = document.querySelector('#'+ id);
        bcc.className = 'driveNam inp-set none';
        var bcc2 = document.querySelector('#'+ id2);
        bcc2.className = 'driveNam';
        var bcc3 = document.querySelector('#'+ id3);
        bcc3.className = 'img-set';
        var bcc4 = document.querySelector('#'+ id4);
        bcc4.className = 'img-set none';
        console.log(huy)
    }
    function her2() {
        var bcc = document.querySelector('#'+ id);
        bcc.className = 'driveNam inp-set';
        var bcc2 = document.querySelector('#'+ id2);
        bcc2.className = 'driveNam none';
        var bcc3 = document.querySelector('#'+ id3);
        bcc3.className = 'img-setnone none';
        var bcc4 = document.querySelector('#'+ id4);
        bcc4.className = 'img-set';
    }

    return (
      <div className='InfoOfCar'>
          <div className="carNum">{props.post.carNumber}</div>
          <div className="carNam">{props.post.model}</div>
          <input id={id} className="driveNam inp-set none"/>
          <div id={id2} className="driveNam">{huy2}</div>
          <img id={id3} className="img-set" src={edit} onClick={her2}/>
          <img id={id4} className="img-set none" src={ok} onClick={her}/>
      </div>
    );
  }

  export default InfoPrase;