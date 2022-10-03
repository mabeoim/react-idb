import tableData from "../../data";

export default function updateDb(event: any) {
  console.log("updating DB");
  const db = event.target.result;

  // Create an objectStore to hold information about our customers. We're
  // going to use "ssn" as our key path because it's guaranteed to be
  // unique - or at least that's what I was told during the kickoff meeting.
  const objectStore = db.createObjectStore("humans", {
    keyPath: "phone",
  });

  // Create an index to search customers by name. We may have duplicates
  // so we can't use a unique index.
  objectStore.createIndex("name", "name", { unique: false });

  // Create an index to search customers by email. We want to ensure that
  // no two customers have the same email, so use a unique index.
  objectStore.createIndex("occupation", "occupation", { unique: false });

  // Use transaction oncomplete to make sure the objectStore creation is
  // finished before adding data into it.
  objectStore.transaction.oncomplete = (event: any) => {
    // Store values in the newly created objectStore.
    const candidateObjectStore = db
      .transaction("humans", "readwrite")
      .objectStore("humans");
    tableData().body.forEach((candidate) => {
      candidateObjectStore.add(candidate);
    });
  };
}
