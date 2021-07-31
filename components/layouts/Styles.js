import { makeStyles } from "@material-ui/core/styles";
const UseStyles = makeStyles({
  root: {
    display: "flex",
    height: "100vh",
    width: "100%",
    overflow: "hidden"
  },
  rightSidebar: {
    backgroundColor: "#bdc3c7",
    width: "18%"
  },
  leftSidebar: {
    backgroundColor: "#bdc3c7",
    width: "25%"
  },
  mainPart: {
    backgroundColor: "#bdc3c7",
    flex: 1
  }
});
export default UseStyles;
