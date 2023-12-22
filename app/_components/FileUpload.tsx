"use client";

import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

interface FileWithPreview extends File {
  preview: string;
}

const FileUpload = () => {
  const [file, setFile] = useState<File>();

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFile(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, multiple: false });

  return (
    <div {...getRootProps()} style={{ border: "2px dashed #ccc", padding: "20px", textAlign: "center" }}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>ファイルをここにドロップ...</p>
      ) : (
        <p>ファイルをドラッグアンドドロップ、またはクリックして選択</p>
      )}
      {file && (
        <aside>
          <h4>アップロードされたファイル:</h4>
          <p>
            {file.name} - {file.size} bytes
          </p>
        </aside>
      )}
    </div>
  );
};

export default FileUpload;
