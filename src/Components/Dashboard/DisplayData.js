import React, { useMemo, useState} from "react";
import Table from "./Table";

export default function DisplayData(props)
{
    const columns = useMemo(
        () => [
          {
            Header: "First Name",
            accessor: "firstName"
          },
          {
            Header: "Last Name",
            accessor: "lastName"
          },
          {
            Header: "Email",
            accessor: "email"
          },
          {
            Header : "Date of Birth",
            accessor : "dob.seconds"
          },
          {
            Header: "Address",
            accessor: "address"
          },
          {
            Header: "State",
            accessor: "state"
          },
          {
            Header: "Phone Number",
            accessor: "phone"
          },
          {
            Header: "Flavour",
            accessor: "flavour"
          },
          {
            Header: "Size",
            accessor: "Size"
          }
        ],
        []
      );

    return(<div>
      <Table columns={columns} data={props.data} />
    </div>);
}

