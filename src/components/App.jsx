import React from "react";
import Card from "./Card";
import tccstyle from "../tccstyle";

function App() {
  return (
    <div>
      <h1 className="courses">COURSES</h1>
      <h1 className="fee">
        REGISTRATION FEE: <strong>N20,000</strong>
      </h1>
      <div className="cont">
        {tccstyle.map((tccstyle) => {
          return (
            <Card
              course={tccstyle.course}
              c1={tccstyle.c1}
              c2={tccstyle.c2}
              c3={tccstyle.c3}
              c4={tccstyle.c4}
              c5={tccstyle.c5}
              c6={tccstyle.c6}
            />
          );
        })}
      </div>
    </div>
  );
}
export default App;
