import { useState } from 'react';

type TUseBoolean = readonly [
  boolean,
  {
    readonly setTrue: () => void;
    readonly setFalse: () => void;
    set: (value: boolean | ((prev: boolean) => boolean)) => void;
    readonly toggle: () => void;
  }
];

export default function useBoolean(initialValue = false): TUseBoolean {

  const [bool, setBool] = useState(initialValue);

  const setTrue = (): void => setBool(true);
  const setFalse = (): void => setBool(false);
  const toggle = (): void => setBool(prev => !prev);

  const set = (value: boolean | ((prev: boolean) => boolean)) => {
    if (typeof value === "function") {
      setBool(prev => (value as (prev: boolean) => boolean)(prev));
    } else {
      setBool(value);
    }
  };

  return [bool, { setTrue, setFalse, set, toggle }] as const;

}