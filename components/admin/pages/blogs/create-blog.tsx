"use client";

import React, { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import BlogForm from "./blog-form";

export default function CreateBlogPage() {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement | any>(null);
  const [uploading, setUploading] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    heroImage: "",
    content: "",
    status: "draft" as "draft" | "published",
  });

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData({ ...formData, heroImage: reader.result as string });
      setUploading(false);
    };
    reader.readAsDataURL(file);
  };

  const removeImage = () => {
    setFormData({ ...formData, heroImage: "" });
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title.trim() || !formData.description.trim() || !formData.content.trim()) {
      toast.error("Title, description, and content are required.");
      return;
    }

    setSubmitting(true);
    await new Promise((res) => setTimeout(res, 800)); // simulate API
    toast.success("Blog created successfully!");
    setSubmitting(false);
    router.push("/dashboard/blogs");
  };

  return (
    <div className="p-4 sm:p-6 bg-gray-50 min-h-screen">
      <BlogForm
        isEditMode={false}
        submitButtonLabel="Create Blog"
        handleSubmit={handleSubmit}
        formData={formData}
        setFormData={setFormData}
        fileInputRef={fileInputRef}
        handleImageUpload={handleImageUpload}
        removeImage={removeImage}
        uploading={uploading}
        submitting={submitting}
      />
    </div>
  );
}