import { BodyData } from "../../data";
import Row from "./Row";

type Props = {
  data: BodyData[];
};

const Body = ({ data }: Props) => {
  return (
    <tbody>
      {data.map((row: BodyData, i: number) => (
        <Row key={i} data={row} />
      ))}
    </tbody>
  );
};

export default Body;
