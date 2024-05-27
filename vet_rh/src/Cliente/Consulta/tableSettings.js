import React from "react";

const tableHeaders = (resultado) => {
    return[
        {
            Header: "Responsável",
            accessor: ""
        },
        {
            Header: "Animal",
            accessor: ""
        },
        {
            Header: "Raça",
            accessor: ""
        },
        {
            Header: "Situação",
            accessor: ""
        }
    ]
}

export { tableHeaders }