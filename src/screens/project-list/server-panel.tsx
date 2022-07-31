import React from "react";
import { Input, Select } from "antd";
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
    <form>
      <div>
        <Input
          type="text"
          value={param.name}
          onChange={(evt) =>
            setParam({
              ...param,
              name: evt.target.value,
            })
          }
        />
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
      </div>
    </form>
  );
};
