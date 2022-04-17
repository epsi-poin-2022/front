import React, { useEffect } from "react";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";

export default function TextEditor({ setState = () => {} }) {
  const { quill, quillRef } = useQuill();

  useEffect(() => {
    if (quill) {
      quill.on("text-change", () => setState(quill.root.innerHTML));
    }
  }, [quill]);

  return (
    <div className="container" id="container" style={{ paddingBottom: 20 }}>
      <div ref={quillRef} />
    </div>
  );
}
