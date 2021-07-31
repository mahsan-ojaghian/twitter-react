import React from "react";
import UseStyles from "./Styles";
function Layout() {
  //styles
  const classes = UseStyles();
  //JSX
  return (
    <div className={classes.root}>
      <div className={classes.leftSidebar}>left sidebar</div>
      <div className={classes.mainPart}>main part</div>
      <div className={classes.rightSidebar}>right sidebar</div>
    </div>
  );
}
export default Layout;
