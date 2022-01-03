import React, { useMemo } from "react";
import Table from "./Table";

export default function DisplayData(props) {
  const columns = useMemo(
    () => [
      {
        Header: "First Name",
        accessor: "firstName",
      },
      {
        Header: "Last Name",
        accessor: "lastName",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Date of Birth",
        accessor: "dob.seconds",
      },
      {
        Header: "Address",
        accessor: "address",
      },
      {
        Header: "State",
        accessor: "state",
      },
      {
        Header: "Phone Number",
        accessor: "phone",
      },
      {
        Header: "Flavour",
        accessor: "flavour",
      },
      {
        Header: "Size",
        accessor: "Size",
      },
      {
        Header: "Delete",
        id: "delete",
        accessor: (str) => "delete",

        Cell: (tableProps) => (
          <span
            style={{
              cursor: "pointer",
              color: "red",
              textDecoration: "underline",
            }}
            onClick={() => {
              const dataCopy = [...props.data];
              console.log(dataCopy[tableProps.row.index]);
              dataCopy.splice(tableProps.row.index, 1);
              props.changer(dataCopy);
              
            }}
          >
            Delete
          </span>
        ),
      },
    ],
    [props]
  );

  return (
    <div>
      <Table columns={columns} data={props.data} />
    </div>
  );
}
