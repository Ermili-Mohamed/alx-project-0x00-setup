import { ButtonProps } from "@/interfaces";
import { FC } from "react";

const Button:FC<ButtonProps> = ({title, styles})=>{
 return(
  <button className={styles}>{title}</button>
 )
}

export default Button