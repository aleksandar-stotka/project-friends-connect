import React from "react";

const paginate = (documents) => {
  const itemsPerPage = 2;
  const page = Math.ceil(documents.length / itemsPerPage);
  console.log(page, "pages");

  const newDocuments = Array.from({ length: page }, (_, index) => {
    const start = index * itemsPerPage;
    console.log(start, "start");
    return documents.slice(start, start + itemsPerPage);
  });
  return newDocuments;
};

export default paginate;
