import React, { useState, useEffect } from "react";
import { SearchPanel } from "./server-panel";
import { List } from "./list";
import { cleanObject, useMount, useDebounce } from "../../utils/index";
import { useHttp } from "../../utils/http";

// import qs from "qs";
// const baseUrl = process.env.REACT_APP_API_URL;
export const ProjectListScreen = () => {
  const client = useHttp();
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });
  const [list, setList] = useState([]);
  const [users, setUsers] = useState([]);
  const debounceParam = useDebounce(param, 1000);

  useEffect(() => {
    client("projects", { data: cleanObject(debounceParam) }).then(setList);
    // eslint-disable-next-line
  }, [debounceParam]);

  useMount(() => {
    client("users").then(setUsers);
  });
  return (
    <div>
      <SearchPanel param={param} users={users} setParam={setParam} />
      <List users={users} list={list} />
    </div>
  );
};
