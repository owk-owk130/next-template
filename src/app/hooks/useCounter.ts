import { counterActions, counterGetters } from "~/store/sample";
import { useCallback } from "react";

export const useCounter = () => {
  const count = counterGetters.useValue();
  const update = counterActions.useSet();

  const UpdateCount = useCallback(() => {
    update(count + 1);
  }, [update, count]);

  return { count, UpdateCount };
};
