import { useEffect } from "react";
import { User } from "screens/project-list/server-panel";
import { useAsync } from "./use-async";
import { useHttp } from "./http";
import { cleanObject } from "utils";

export const useUsers = (param?: Partial<User>) => {
  const client = useHttp();
  const { run, ...result } = useAsync<User[]>();

  useEffect(() => {
    run(client("users", { data: cleanObject(param || {}) }));
    // eslint-disable-next-line
  }, [param]);

  return result;
};
