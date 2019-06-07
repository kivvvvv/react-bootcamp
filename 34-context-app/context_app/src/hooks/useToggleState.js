import { useState } from "react";

export default function useToggle(initialValue = false) {
  // call useState, "reserve piece of state"
  const [state, setState] = useState(initialValue);

  const toggle = () => setState(!state);

  return [state, toggle];
}
