import { counterActions, counterGetters } from "~/store/sample";
import { useCallback } from "react";

export const useCounter = () => {
  const value = counterGetters.useValue();
  const update = counterActions.useSet();

  const UpdateCount = useCallback(() => {
    update(value.count + 1);
  }, [value]);

  return { value, UpdateCount };
};
