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
