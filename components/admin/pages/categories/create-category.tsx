"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import CategoryForm from "./category-form";

export default function CreateCategoryPage() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      toast.error("Category name is required.");
      return;
    }

    setSubmitting(true);
    await new Promise((res) => setTimeout(res, 800)); // simulate API
    toast.success("Category created successfully!");
    setSubmitting(false);
    router.push("/dashboard/categories");
  };

  return (
    <div className="p-4 sm:p-6 bg-gray-50 min-h-screen">
      <CategoryForm
        isEditMode={false}
        submitButtonLabel="Create Category"
        handleSubmit={handleSubmit}
        formData={formData}
        setFormData={setFormData}
        submitting={submitting}
      />
    </div>
  );
}