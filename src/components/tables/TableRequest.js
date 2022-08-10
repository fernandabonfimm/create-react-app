import React, { useState } from "react";
import "../../styles/components/tables.css";
import { Tag } from "antd";

const TableRequest = () => {
  return (
    <>
      <div style={{overflowX: "auto"}}>
        {" "}
        <table className="table">
          <thead>
            <tr>
              <th className="th">
                <Tag className="tag-table">Post</Tag>
              </th>
              <th className="th">
                <span className="title-table">Host</span>
              </th>
              <th className="th">
                <span className="title-table">Date</span>
              </th>
              <th className="th">
                <span className="title-table">Size</span>
              </th>
              <th className="th">
                <span className="title-table">ID</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr role="col" className="odd">
              <td className="td">
                <span className="description-table">
                  https://everhooks.site/uuidgenerate
                </span>
              </td>
              <td className="td">
                {" "}
                <span className="description-table">131.100.73.196</span>
              </td>
              <td className="td">
                {" "}
                <span className="description-table">
                  08/04/2022
                </span>
              </td>
              <td>
                {" "}
                <span className="description-table">1011 bytes</span>
              </td>
              <td className="td">
                {" " }
                <span className="description-table">
                  ef4b3d84-f56f-4d02-8a4d-745ee8e7a649
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
export default TableRequest;
