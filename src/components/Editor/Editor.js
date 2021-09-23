import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import CustomToolbar from "./components/CustomToolbar/CustomToolbar";

function Editor({ id, value, setValue, add }) {
  const modules = {
    toolbar: {
      container: "#toolbar" + id,
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
        id={"editor" + id}
        modules={modules}
        formats={formats}
        value={value}
        onKeyDown={(e) => {
          if (e.code === "Enter") {
            add();
          }
        }}
        onChange={setValue}
      />
      <CustomToolbar id={"toolbar" + id} />
    </>
  );
}

export default Editor;