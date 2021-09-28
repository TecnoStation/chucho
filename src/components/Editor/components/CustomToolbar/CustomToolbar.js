import React from "react";
import { MdTextFields } from "react-icons/md";
import { Upload } from "antd";
import { Link } from "react-router-dom";
import { FiUpload } from "react-icons/fi";
import "./CustomToolbar.scss";

function CustomToolbar({ id }) {
  return (
    <>
      {id === "4" ? (
        <div id={"toolbar" + id}>
          <button className="ql-header">
            <MdTextFields className="iconsize2" />
          </button>
          <button className="ql-bold"></button>
          <button className="ql-italic"></button>
          <button className="ql-underline"></button>
          <select className="ql-color">
            <option value="red"></option>
            <option value="green"></option>
            <option value="blue"></option>
            <option value="orange"></option>
            <option value="violet"></option>
            <option value="#d0d1d2"></option>
            <option selected></option>
          </select>
          <div style={{ textAlign: "right" }}>
            <Upload>
              <Link
                style={{ marginLeft: "28px" }}
                className="iconsize iconBlue"
                to="#"
              >
                <FiUpload />
                <span className="link"> Adjuntar</span>
              </Link>
            </Upload>
          </div>
        </div>
      ) : (
        <div id={"toolbar" + id}>
          <button className="ql-header">
            <MdTextFields className="iconsize2" />
          </button>
          <button className="ql-bold"></button>
          <button className="ql-italic"></button>
          <button className="ql-underline"></button>
          <select className="ql-color">
            <option value="red"></option>
            <option value="green"></option>
            <option value="blue"></option>
            <option value="orange"></option>
            <option value="violet"></option>
            <option value="#d0d1d2"></option>
            <option selected></option>
          </select>
          <div style={{ textAlign: "right" }}>
            <Upload>
              <Link
                style={{ marginLeft: "28px" }}
                className="iconsize iconBlue"
                to="#"
              >
                <FiUpload />
                <span> Adjuntar evidencia</span>
              </Link>
            </Upload>
          </div>
        </div>
      )}
    </>
  );
}

export default CustomToolbar;
