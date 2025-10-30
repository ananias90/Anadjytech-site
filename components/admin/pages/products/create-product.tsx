"use client";

import React, { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import ProductForm from "./product-form";

const dummyCategories = [
  { id: "1", name: "Electronics" },
  { id: "2", name: "Clothing" },
  { id: "3", name: "Home & Kitchen" },
  { id: "4", name: "Sports" },
  { id: "5", name: "Books" },
];

export default function CreateProductPage() {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [uploading, setUploading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [tagInput, setTagInput] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    categoryId: "",
    description: "",
    quantity: "",
    status: "active",
    features: [] as string[],
  });

  const addFeature = () => {
    if (tagInput.trim() && !formData.features.includes(tagInput.trim())) {
      setFormData({ ...formData, features: [...formData.features, tagInput.trim()] });
      setTagInput("");
    }
  };

  const removeFeature = (tag: string) => {
    setFormData({ ...formData, features: formData.features.filter((t) => t !== tag) });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    // ----- STATIC SUCCESS -----
    await new Promise((res) => setTimeout(res, 800));
    toast.success("Product created successfully!");
    setSubmitting(false);
    router.push("/dashboard/products");
  };

  return (
    <div className="p-4 sm:p-6 bg-gray-50 ">
      <ProductForm
        isEditMode={false}
        submitButtonLabel="Create Product"
        handleSubmit={handleSubmit}
        formData={formData}
        setFormData={setFormData}
        categories={dummyCategories}
        tagInput={tagInput}
        setTagInput={setTagInput}
        addFeature={addFeature}
        removeFeature={removeFeature}
        fileInputRef={fileInputRef as React.RefObject<HTMLInputElement>}
        uploading={uploading}
        submitting={submitting}
        loadingCategories={false}
      />
    </div>
  );
}