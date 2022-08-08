import React from "react";
import { Form, Input, Select } from "antd";
const { Option } = Select;
export interface User {
  id: string;
  name: string;
  email: string;
  title: string;
  organization: string;
  token: string;
}

interface SearchpanelProps {
  users: User[];
  param: {
    name: string;
    personId: string;
  };
  setParam: (param: SearchpanelProps["param"]) => void;
}

export const SearchPanel = ({ param, setParam, users }: SearchpanelProps) => {
  return (
    <Form style={{ marginBottom: "2rem" }} layout={"inline"}>
      <Form.Item>
        <Input
          type="text"
          value={param.name}
          placeholder={"项目名"}
          onChange={(evt) =>
            setParam({
              ...param,
              name: evt.target.value,
            })
          }
        />
      </Form.Item>
      <Form.Item>
        <Select
          value={param.personId}
          onChange={(value) =>
            setParam({
              ...param,
              personId: value,
            })
          }
        >
          <option value={""}>负责人</option>
          {users.map((user) => (
            <Option value={user.id} key={user.id}>
              {user.name}
            </Option>
          ))}
        </Select>
      </Form.Item>
    </Form>
  );
};
