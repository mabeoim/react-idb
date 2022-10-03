import Table from "./components/Table";
import "./App.css";
import { useEffect, useState } from "react";
import updateDb from "./utils/updateDb";
import { BodyData } from "../data";

function App() {
  const [data, setData] = useState<BodyData[]>();
  const [database, setDb] = useState<IDBDatabase>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const request = window.indexedDB.open("candidates", 3);
    request.onerror = () => console.error(request.error);
    request.onupgradeneeded = (event: any) => updateDb(event);
    request.onsuccess = (event: any) => {
      const db: IDBDatabase = event.target.result;
      const transaction = db.transaction(["humans"]);
      const objectStore = transaction.objectStore("humans");
      objectStore.getAll().onsuccess = (event: any) => {
        setData(event.target.result);
        const getAllEvent = new Event("getAll");
        db.dispatchEvent(getAllEvent);
      };
      setLoading(false);
      setDb(db);
    };
  }, []);

  return (
    <div>
      <h1>Table</h1>
      {/* <button onClick={update}>Update</button> */}
      {loading ? <h1>Loading...</h1> : null}
      {data ? <Table data={data} /> : null}
    </div>
  );
}

export default App;
