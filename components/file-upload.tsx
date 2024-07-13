"use client";

import { X } from "lucide-react";
import Image from "next/image";

import { UploadDropzone } from "@/lib/uploadthing";

interface FileUploadProps {
  endpoint: "serverImage" | "messageFile";
  value: string;
  onChange: (url?: string) => void;
}

export const FileUpload = ({ endpoint, value, onChange }: FileUploadProps) => {
  const fileType = value?.split(".").pop();

  if (value && fileType !== "pdf") {
    return (
      <div className="size-20 relative">
        <Image
          fill
          sizes="20"
          src={value}
          alt="Upload"
          className="rounded-full object-cover"
        />
        <button
          type="button"
          onClick={() => onChange("")}
          className="bg-rose-500 text-white rounded-full shadow-sm absolute top-0 right-0 p-1"
        >
          <X className="size-4" />
        </button>
      </div>
    );
  }

  return (
    <UploadDropzone
      endpoint={endpoint}
      onClientUploadComplete={(res) => {
        onChange(res?.[0].url);
      }}
      onUploadError={(error) => {
        console.log(error);
      }}
    />
  );
};
