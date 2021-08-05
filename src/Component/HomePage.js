import React from 'react';
import App from './FirstPage';
import ReactDOM from 'react-dom';


function HomePageApp() {

    const getNewPage = () =>{
        ReactDOM.render(
            <React.StrictMode>
              <App />
            </React.StrictMode>,
            document.getElementById('root')
          );
    }
  
    return (
      <div className="AppHome">
        <button  className="buttonHome" onClick={getNewPage} 
        style={{marginLeft: "45%" , marginTop:"20%", height:"50px", width:"230px", borderRadius: "12px" ,fontSize:"20px",backgroundColor : " #008CBA", opacity:"0.8"}}>
            Check weather
        </button>
      </div>
    );
  }
  
  export default HomePageApp;