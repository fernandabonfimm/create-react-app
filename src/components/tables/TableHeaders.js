import React, { useState, useEffect } from "react";
import "../../styles/components/tables.css";
import moment from "moment";
import { getUuid, getFirstId } from "../../services/routes/apiUuid";
import { useParams } from "react-router";

const TableHeaders = () => {
  const [uuidList, setUuidList] = useState([]);
  // useEffect(() => {
  // const interval = setInterval(() => {
  // loadData();
  // }, 3000); // 300000
  //  return () => clearInterval(interval);
  // }, []); //

  const loadUuidData = async () => {
    try {
      const _result = await getFirstId("360b3eb7-4ab6-4aae-a72c-ebfefbf1bcef");
      if (_result?.response) {
        setUuidList(
          _result?.data?.sort((a, b) => {
            if (a && b) {
              if (moment(a.created_at).unix() < moment(b.created_at).unix()) {
                return 1;
              }
              if (moment(a.created_at).unix() > moment(b.created_at).unix()) {
                return -1;
              }
            }
            return 0;
          })
        );
      } else {
        setUuidList([]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadUuidData();
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
              var _index = index + 1;
              return (
                <tr key={index} role="row" className="odd">
                  <td className="td">
                    {" "}
                    <span className="description-table"></span>
                  </td>
                  <td className="td">
                    {" "}
                    <span className="description-table">{dados._id}</span>
                  </td>
                  <td>
                    {" "}
                    <span className="description-table">{dados?._id} </span>
                  </td>
                  <td className="td">
                    {" "}
                    <span className="description-table"></span>
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
