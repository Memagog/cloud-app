import { FC, useState } from "react";
import "./row.css";

export const Row: FC = () => {
  return (
    <form className="row">
      <div className="el" >
        <input className="row-input" type="text" />
      </div>
      <div className="el" >
        <input className="row-input" type="text" />
      </div>
      <div className="el" >
        <input className="row-input" type="text" />
      </div>
      <div className="el" >
        <input className="row-input" type="text" />
      </div>
      <div className="el" >
        <input className="row-input" type="text" />
      </div>
    </form>    
  )
}