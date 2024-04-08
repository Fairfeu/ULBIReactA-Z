import classes from "./MyInput.module.css";
import React from "react";
// eslint-disable-next-line react/display-name
const MyInput = React.forwardRef((props, ref) => {
  return <input {...props} className={classes.MyInp} ref={ref} />;
});
export default MyInput;
