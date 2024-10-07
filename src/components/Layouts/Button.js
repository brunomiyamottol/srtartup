import React from "react";
import { makeStyles } from "@material-ui/core";

const useButtonStyles = makeStyles({
  formButton: {
    fontFamily: '"Nunito", -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, sans-serif',
    outline: "0",
    width: "40%",
    border: "0",
    padding: "10px",
    color: "#FFFFFF",
    fontSize: 13,
    transition: "all 0.3 ease",
    borderRadius: "5px",
    cursor: "pointer",
    margin: 5,
  },
  formButtonDisabled: {
    fontFamily: '"Nunito", -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, sans-serif',
    outline: "0",
    width: "40%",
    height: "20%",
    border: "0",
    padding: "10px",
    color: "#FFFFFF",
    fontSize: 13,
    transition: "all 0.3 ease",
    borderRadius: "5px",
    marginBottom: "20px",
    opacity: "0.7",
  },
});

export default function Button(props) {
  const styles = useButtonStyles();
  function getBgColor(bgColorType) {
    let bgColor = "00AEEF";
    if (bgColorType === "secondary") {
      bgColor = "0078A6";
    }
    return bgColor;
  }
  const bgColorButton = getBgColor(props.bgColorType);

  return (
    <button
      id={props.id}
      name={props.name}
      className={props.disabled ? styles.formButtonDisabled : styles.formButton}
      style={{ background: `#${bgColorButton}`, ...props.styles }}
      type={props.type || "button"}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.text}
    </button>
  );
}
