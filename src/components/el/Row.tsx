import { FC, useState } from "react";
import "./row.css";

export const Row: FC = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="row">
      <div className="el" onPointerEnter={() => setShow(!show)} onPointerLeave={() => setShow(!show)} >
        {show? <h1 style={{ color: 'black', backgroundColor: "aliceblue" }}>W</h1>: null}
      </div>
      <div className="el" onPointerEnter={() => setShow(!show)} onPointerLeave={() => setShow(!show)} >
        {show? <h1 style={{ color: 'black', backgroundColor: "aliceblue" }}>I</h1>: null}
      </div>
      <div className="el" onPointerEnter={() => setShow(!show)} onPointerLeave={() => setShow(!show)} >
        {show? <h1 style={{ color: 'black', backgroundColor: "aliceblue" }}>N</h1>: null}
      </div>
      <div className="el" onPointerEnter={() => setShow(!show)} onPointerLeave={() => setShow(!show)} >
        {show? <h1 style={{ color: 'black', backgroundColor: "aliceblue" }}>E</h1>: null}
      </div>
      <div className="el" onPointerEnter={() => setShow(!show)} onPointerLeave={() => setShow(!show)} >
        {show? <h1 style={{ color: 'black', backgroundColor: "aliceblue" }}>R</h1>: null}
      </div>
    </div>
    
  )
}