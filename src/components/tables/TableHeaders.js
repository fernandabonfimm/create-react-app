import React, { useState, useEffect } from "react";
import "../../styles/components/tables.css";
import { getUuid, getFirstId } from "../../services/apiUuid";

const TableHeaders = () => {
  const [uuidList, setUuidList] = useState([]);

  useEffect(() => {
    (async () => {
      const _data = await getUuid();
      const { data } = await getFirstId(_data);
      setUuidList(data);
      console.log("", _data);
    })();
  }, []);

  return (
    <>
      <div style={{ overflowX: "auto" }}>
        {" "}
        <table className="table">
          <thead>
            <tr>
              <th className="th">
                <span className="title-table">Host</span>
              </th>
              <th className="th">
                <span className="title-table">Postman Token</span>
              </th>
              <th className="th">
                <span className="title-table">User-Agent</span>
              </th>
              <th className="th">
                <span className="title-table">Content-Type</span>
              </th>
              <th className="th">
                <span className="title-table">Connection</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {uuidList.map((dados, index) => {
              return (
                <tr id={index} role="row" className="odd">
                  <td className="td">
                    <span className="description-table">
                      {dados.header.Host}
                    </span>
                  </td>
                  <td className="td">
                    <span className="description-table">{""}</span>
                  </td>
                  <td className="td">
                    <span className="description-table">{""}</span>
                  </td>
                  <td className="td">
                    <span className="description-table">{""}</span>
                  </td>
                  <td className="td">
                    <span className="description-table">{dados.header.Connection}</span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default TableHeaders;
