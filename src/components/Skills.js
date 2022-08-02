import React from "react";


const Skills = () => {
  return (
    <div>
        
      <div className="card">
        <div className="card-content">
          <h6>
            <u>Szakmai készségek:</u>
          </h6>
          <div className="row mt-top">
            <div className="col s6">
                <p>HTML - HyperText Markup Language</p>
                <div className="progress grey lighten-1">
                    <div 
                    className="determinate blue"
                    style={{ width: '80%'}} >
                        
                    </div>

                </div>
            </div>

            <div className="col s6">
                <p>Css - Cascading Style Sheets</p>
                <div className="progress grey lighten-1">
                    <div 
                    className="determinate blue"
                    style={{ width: '80%'}} >
                        
                    </div>

                </div>
              </div>
              
            </div>
          </div>
        </div>
      
    </div>
  );
};

export default Skills;
