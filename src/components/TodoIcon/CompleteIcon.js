import React from "react";
import { TodoIcon } from ".";

function CompleteIcon({ completed, onComplete }) {
  return (
    <TodoIcon
      type="check"
      color={completed ? "green" : "black"}
      onClick={onComplete}
    />
  );
}

export { CompleteIcon };
