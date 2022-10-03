import { BodyData } from "../../data";

type Props = {
  data: BodyData;
};

const Row = ({ data }: Props) => {
  return (
    <tr>
      <td>{data.name}</td>
      <td>{data.occupation}</td>
      <td>{data.hair_color}</td>
      <td>{data.gender}</td>
      <td>{data.phone}</td>
    </tr>
  );
};

export default Row;
