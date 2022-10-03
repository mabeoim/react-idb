import Header from "./Header";
import Body from "./Body";
import { BodyData } from "../../data";

type Props = {
  data: BodyData[];
};

const Table = ({ data }: Props) => {
  return (
    <table>
      <Header />
      <Body data={data} />
    </table>
  );
};

export default Table;
