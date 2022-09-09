import React, { FC } from "react";
import styles from "./Svg.module.scss";

type Props = {
  el?: any;
  className?: string;
  style?: any;
  svg?: any;
};

export const Svg: FC<Props> = ({ el = "span", svg, className, style }) => {
  const Element = el;
  const trim = styles.root.split("_");
  const pop = trim.shift();

  // console.log({
  //   root: styles.root,
  //   trim,
  //   remove: styles.root.replace("Svg_", ""),
  //   pop,
  //   unite: trim.shift()?.concat("_"),
  // });
  // const classNameAux =
  //   `svg-container ${styles.root.replace("Svg_", "")}` +
  //   (className ? ` ${className}` : "");

  // console.log({ classNameAux });

  return (
    <Element
      style={style}
      className={className}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
};

// Svg.defaultProps = {
//   el: "span",
// };
