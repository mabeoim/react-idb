import "./App.css";
import Table from "./components/Table";
import useDatabase from "./hooks/useDatabase";

function App() {
  const { data, loading } = useDatabase();

  return (
    <div>
      <h1>Table</h1>
      {loading ? <h1>Loading...</h1> : null}
      {data ? <Table data={data} /> : null}
    </div>
  );
}

export default App;
