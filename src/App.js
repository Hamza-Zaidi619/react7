import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import SMNavbar from './components/SMNavbar';

function App() {
  // const[arr,setarr]=useState()
  const arr = [{ name: "Syed Hamza", title: "DELL", imgURL: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bGFwdG9wc3xlbnwwfHwwfHw%3D&w=1000&q=80" },

  {
    name: "Syed Haider", title: "HP", imgURL: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bGFwdG9wc3xlbnwwfHwwfHw%3D&w=1000&q=80"
  },
  {
    name: "Ali", title: "Acer", imgURL: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bGFwdG9wc3xlbnwwfHwwfHw%3D&w=1000&q=80"
  }]

  return (
    <div className='App'>
      <SMNavbar />
      <div className='container'>
        {/* <div className='row'>
        <div className='col-md-4 mt-3'>
          <div className='p-2 rounded-shadow'>
          </div>

        </div>
        <div className='col-md-4 mt-2'>
          <div className='p-2 rounded-shadow'>
            <div>
              <img src='https://media.istockphoto.com/photos/modern-laptop-with-empty-screen-on-white-background-mockup-design-picture-id1182241805?b=1&k=20&m=1182241805&s=612x612&w=0&h=8LGcGIlPCE1pEOKOqrN4WP-UsXobLqc4EnqC71niFrc=' width="100%" alt='product'>
              </img>
            </div>
          </div>
        </div>

      </div> */}

      </div>









      <div className='row mt-3'>

        {
          arr.map((e, i) => <div className='col-md-4'>
            <div className='p-2 shadow-rounded border border-dark rounded-2'>
             
              <img src={e.imgURL} width="50%"></img>
              <p className=''>{e.title}</p>
              <p className=''>{e.name}</p>
            </div>



          </div>)
        }

      </div>








    </div>

  );
}

export default App;


  // const[count,setcount]=useState(0);

  // let upgrade=()=>{
  //   setcount((preVal)=>preVal+1)
  //   setcount((preVal)=>preVal+1)
  // }
    // <div className="App-header">
    //   <p className='p-5 fs-2 fw-bolder m-3 text-success'>{count}</p>
    //  <button className='btn btn-outline-warning px-5 py-2' onClick={upgrade}>+</button>
    // </div>