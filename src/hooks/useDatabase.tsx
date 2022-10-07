import { useEffect, useState } from "react";
import { BodyData } from "../../data";
import updateDb from "../utils/updateDb";

export default function useDatabase() {
  const [data, setData] = useState<BodyData[]>();
  const [database, setDatabase] = useState<IDBDatabase>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const request = window.indexedDB.open("candidates", 3);
    request.onerror = () => console.error(request.error);
    request.onupgradeneeded = (event: IDBVersionChangeEvent) => updateDb(event);
    request.onsuccess = (event: any) => {
      const db: IDBDatabase = event?.target.result;
      const transaction = db.transaction(["humans"]);
      const objectStore = transaction.objectStore("humans");
      objectStore.getAll().onsuccess = (event: any) => {
        setData(event.target.result);
        const getAllEvent = new Event("getAll");
        db.dispatchEvent(getAllEvent);
      };
      setDatabase(db);
      setLoading(false);
    };
  }, []);

  const get = (id: string) =>
    database
      ?.transaction(["humans"], "readwrite")
      .objectStore("humans")
      .get(id);
  const put = (data: object) =>
    database
      ?.transaction(["humans"], "readwrite")
      .objectStore("humans")
      .put(data);

  return { data, database, loading, get, put };
}
