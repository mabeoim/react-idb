import { BodyData } from "../../data";
import Td from "./Td";
import useDatabase from "../hooks/useDatabase";
import { useCallback } from "react";

type Props = {
  data: BodyData;
};

// interface CEvent extends React.MouseEvent<HTMLTableCellElement> {
//   target: HTMLTableCellElement;
// }

// interface BEvent extends React.FocusEvent<HTMLTableCellElement> {
//   target: HTMLTableCellElement;
// }

const Row = ({ data }: Props) => {
  const { put } = useDatabase();

  const edit = (event: any) => console.log(event);

  const submit = (event: any) => {
    let newValue: string = event.target.innerHTML;
    const { name } = event.target.dataset;
    const content = {
      ...data,
      [name]: newValue,
    };
    const request = put(content);
    request!.onsuccess = (event: any) => console.log(event);
  };

  const cells: string[] = [
    "name",
    "occupation",
    "hair_color",
    "gender",
    "phone",
  ];

  return (
    <tr>
      {cells.map((name: string, index: number) => {
        const key = name as keyof BodyData;
        return (
          <Td
            key={data.phone + index}
            edit={edit}
            name={name}
            submit={submit}
            id={data[key]}
          >
            {data[key]}
          </Td>
        );
      })}
      {/* <Td name="name" submit={submit} id={data.phone}>
        {data.name}
      </Td>
      <Td name="occupation" submit={submit} id={data.phone}>
        {data.occupation}
      </Td>
      <Td name="hair_color" submit={submit} id={data.phone}>
        {data.hair_color}
      </Td>
      <Td name="gender" submit={submit} id={data.phone}>
        {data.gender}
      </Td>
      <Td name="phone" submit={submit} id={data.phone}>
        {data.phone}
      </Td> */}
    </tr>
  );
};

export default Row;
