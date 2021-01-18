import { useReducer } from 'react';

function toggleReducer(state: boolean) {
  return !state;
}

function useToggle(initialValue = false): [boolean, () => void] {
  const [value, toggleValue] = useReducer(toggleReducer, initialValue);

  return [value, toggleValue];
}

export default useToggle;
