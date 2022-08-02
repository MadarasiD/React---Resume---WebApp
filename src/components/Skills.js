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
            <div className="col s4">
              <p>HTML</p>
              <div class="preloader-wrapper big active">
                <div class="circle spinner-blue-only">
                  <div class="circle left">
                    <div class="circle"></div>
                  </div>
                  <div class="gap-patch">
                    <div class="circle"></div>
                  </div>
                  <div class="circle right">
                    <div class="circle"></div>
                  </div>
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
