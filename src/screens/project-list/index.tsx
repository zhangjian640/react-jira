import React, { useState, useEffect } from "react";
import { SearchPanel } from "./server-panel";
import { List } from "./list";
import { cleanObject, useMount, useDebounce } from "../../utils/index";
import qs from "qs";
const baseUrl = process.env.REACT_APP_API_URL;
export const ProjectListScreen = () => {
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });
  const [list, setList] = useState([]);
  const [users, setUsers] = useState([]);
  const debounceParam = useDebounce(param, 1000);
  useEffect(() => {
    fetch(`${baseUrl}/projects?${qs.stringify(cleanObject(param))}`).then(
      async (response) => {
        if (response.ok) {
          setList(await response.json());
        }
      }
    );
  }, [debounceParam]);
  useMount(() => {
    fetch(`${baseUrl}/users`).then(async (response) => {
      if (response.ok) {
        setUsers(await response.json());
      }
    });
  });
  return (
    <div>
      <SearchPanel param={param} users={users} setParam={setParam} />
      <List users={users} list={list} />
    </div>
  );
};
