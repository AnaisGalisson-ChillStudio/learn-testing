import { ListCheck } from "react-bootstrap-icons";
import style from "./header.module.css";

export function Header() {
  return (
    <div className={style.container}>
      <ListCheck width="40" height="40" fill="cornflowerblue" />
      <h1 className={style.title}>TodoList</h1>
    </div>
  );
}
