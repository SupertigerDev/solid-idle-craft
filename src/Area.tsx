import { JSXElement } from "solid-js";
import style from "./Area.module.css";


export const Area = (props: {title: string, children: JSXElement}) => {
  return (
    <div class={style.area}>
      <div class={style.title}>{props.title}</div>
      <div class={style.areaInner}>
        {props.children}
      </div>
    </div>
  );
};
