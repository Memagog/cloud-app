import { FC } from "react";
import { Row } from "../el/Row";
import "./container.css";
const arr = ['', '', '', '', '', ''];
export function Container() {
  return (
    <div className="container">
      {arr.map(() => <Row />)}
    </div>
  )    
}