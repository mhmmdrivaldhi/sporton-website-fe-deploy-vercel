"use client";

import { useRef, useState } from "react";
import { FiImage, FiTrash2, FiUploadCloud } from "react-icons/fi";

type TFileUploadProps = {
    onFileSelect?: (file: File | null) => void;
}


const FileUpload = ({onFileSelect}: TFileUploadProps) => {
    const [file, setFile] = useState<File | null>(null);
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const HandleFileChange =  (selectedFile?: File) => {
        if(!selectedFile) return;

        setFile(selectedFile);
        onFileSelect?.(selectedFile)
    }

    const removeFile = (e : React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        setFile(null);
        onFileSelect?.(null);
    }

    return (
        <div
         onClick={() => fileInputRef.current?.click()}
         onDragOver={(e) => e.preventDefault()}
         onDrop={(e) => {
            e.preventDefault();
            HandleFileChange(e.dataTransfer.files?.[0])
         }}
         className="flex flex-col justify-center items-center w-full py-6 border border-dashed border-primary bg-primary-light">
            <input type="file" className="hidden" ref={fileInputRef} accept="image/*" onChange={(e) => HandleFileChange(e.target.files?.[0])}/>
            {
                !file ? (
                    <div className="text-center cursor-pointer">
                        <FiUploadCloud className="text-primary mx-auto mb-2" size={24}/>
                        <p className="text-xs">Upload Your Payment Receipt here</p>
                    </div>
                ) : (
                    <div className="text-center">
                        <FiImage className="text-primary mx-auto"/>
                        <p className="text-sm text-primary">{file.name}</p>
                        <p className="text-sm text-gray-400">
                            {( file.size / 1024 ).toFixed(1)} KB
                        </p>
                        <button onClick={removeFile} className="flex gap-2 bg-primary/70 text-white mx-auto rounded-full py-2 px-4 mt-4 cursor-pointer hover:bg-primary duration-200">
                            <FiTrash2 size={24} className="self-center"/> Remove 
                        </button>
                    </div>
                )
            }
        </div>
    )
}

export default FileUpload;