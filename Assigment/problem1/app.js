import React, { useState } from "react";
import "./style.css"
const App = () => {
  const [bmi, setBmi] = useState();
  const [info, setInfo] = useState();
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const handleBmi = () => {
    let val = (
      [Number(weight) / Number(height) / Number(height)] * 10000
    ).toFixed(1);
    setBmi(val);
    if (val < 18.5) {
      setInfo("Under Weight");
    } else if (val > 18.5 && val <= 24.9) {
      setInfo("Healthy");
    } else if (val > 24.9 && val < 30) {
      setInfo("Overweight");
    } else {
      setInfo("Obese");
    }
  };
  return (
    <div className="container-fluid">
    <div className="row">
    <div className="col-md-4 offset-md-4">
    <div className="card">
    <div className="card text-center">
  <div className="card-header">
  <h1>BMI Calculator</h1>
  </div>
  
  <div className="card-body">
    <div className="form-group">
    <label htmlFor="">Enter Height In Cm:</label>
    <input type="text" className="form-contol"
        onChange={(e) => setHeight(e.target.value)}
        placeholder="height in cm"
      />
      </div>
      <div className="form-group">
    <label htmlFor="">Enter Weight In Kg:</label>
    <input type="text" className="form-contol"
        onChange={(e) => setWeight(e.target.value)}
        placeholder="weight in kg"
      />
      </div>
   
   
  </div>
  <div className="card-footer">
  < button className="btn btn-primary" button onClick={handleBmi}>Submit</button>
  </div>
  </div>

    <h1>{bmi}</h1>
      <h2>{info}</h2>
        </div>
    </div>
    </div>
    </div>


      
  );
};

export default App;
