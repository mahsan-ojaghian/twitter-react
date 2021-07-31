import React from "react";
import UseStyles from "./Styles";
function Layout() {
  //styles
  const classes = UseStyles();
  //JSX
  return (
    <div>
      <div className={classes.root}>left sidebar</div>
      <div>main part</div>
      <div>right sidebar</div>
    </div>
  );
}
export default Layout;
