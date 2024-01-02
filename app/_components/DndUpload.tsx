"use client";

import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { z } from "zod";

const Message = z.object({ message: z.string() });

const DndUpload = () => {
  const [pdfFile, setPdfFile] = useState<string | null>(null);

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    // Filter for PDF files
    const pdf = acceptedFiles.find((file) => file.type === "application/pdf");
    if (pdf) {
      setPdfFile(URL.createObjectURL(pdf));
    }

    // API Test
    const response = await fetch("/api/hello");
    const { message } = Message.parse(await response.json());
    console.log(message);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: { "application/pdf": [".pdf"] },
  });

  return (
    <div>
      <div {...getRootProps()} style={{ border: "1px dashed black", padding: "20px", textAlign: "center" }}>
        <input {...getInputProps()} />
        <p>PDFをアップロードしてください</p>
      </div>
      {pdfFile && <iframe src={pdfFile} style={{ width: "100%", height: "500px" }} title="PDF Preview"></iframe>}
    </div>
  );
};

export default DndUpload;
