import React, { ChangeEvent } from "react";

interface BEvent extends React.FocusEvent<HTMLTableCellElement> {
  target: HTMLTableCellElement;
}

type Props = {
  children: string;
  id: string;
  submit: (event: BEvent) => void;
  name: string;
  edit: (event: ChangeEvent<HTMLInputElement>) => void;
};

const Td = React.memo(({ children, id, submit, name, edit }: Props) => {
  return (
    <td data-name={name} onBlur={submit} id={id}>
      <input onChange={edit} name={name} type="text" value={children} />
    </td>
  );
});

export default Td;
