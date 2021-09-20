import React, { useState } from "react";
import reactDom from "react-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import CustomToolbar from "./components/CustomToolbar/CustomToolbar";

function Editor({ value, setValue }) {
  const modules = {
    toolbar: {
      container: ".toolbar",
    },
  };
  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "color",
  ];
  return (
    <>
      <ReactQuill
        modules={modules}
        formats={formats}
        value={value}
        onChange={setValue}
      />
      <CustomToolbar />
    </>
  );
}

export default Editor;
