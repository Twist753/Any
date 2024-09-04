import React from "react";

export default function Alert(prop) {
  return (
    prop.alert && (
      <div className={`alert alert-${prop.alert.type}`} role="alert">
        {prop.alert.type[0].toUpperCase() + prop.alert.type.slice(1)} -{" "}
        {prop.alert.message}
      </div>
    )
  );
}
