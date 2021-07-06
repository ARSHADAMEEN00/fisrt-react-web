// import React from "react";
// import { Link } from "react-router-dom";
// import "./Button.css";

// const STYLES = ["btn--primary", "btn--outline"];
// const SIZES = ["btn--medium", "btn--large"];

// export const Button = ({
//   children,
//   type,
//   onClick,
//   buttonStyle,
//   buttonSize,
// }) => {
//     //  if we don't represent any style then it will automatcaly give the style from the arry of style
//   const checkButtonStyle = STYLES.includes(buttonStyle)
//     ? buttonStyle
//     : STYLES[0];
//    // in the page if we don't represent any sizes then it will automatcaly give the size from the arry of size
//   const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

//   return (
//     //   if we add a button with name/children then that transform like this
//     <Link to="/signup" className="btn-mobile"> 
//       <button
//       className={`btn${checkButtonStyle}${checkButtonSize}`}
//       onClick={onClick}
//       type={type}
//       >{children}</button>
//     </Link>
//   );
// };
