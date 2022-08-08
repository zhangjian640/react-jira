import React, { useState } from "react";
import { Typography } from "antd";
import { SearchPanel } from "./server-panel";
import { List } from "./list";
import { useDebounce } from "../../utils/index";
import styled from "@emotion/styled";
import { useProjects } from "utils/project";
import { useUsers } from "utils/users";

export const ProjectListScreen = () => {
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });
  const debounceParam = useDebounce(param, 1000);
  const { isLoading, error, data: list } = useProjects(debounceParam);
  const { data: users } = useUsers();
  const v: any = undefined;
  return (
    <Container>
      {v.anme}
      <h1>项目列表</h1>
      <SearchPanel param={param} users={users || []} setParam={setParam} />
      {error ? (
        <Typography.Text type={"danger"}>{error.message}</Typography.Text>
      ) : null}
      <List loading={isLoading} users={users || []} dataSource={list || []} />
    </Container>
  );
};

const Container = styled.div`
  padding: 3.2rem;
`;
