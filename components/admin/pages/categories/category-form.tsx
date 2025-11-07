'use client'
import React from "react";
import CustomInput from "../../shared/custom-input";
import Button from "../../shared/custom-btn";

interface CategoryFormProps {
  isEditMode: boolean;
  submitButtonLabel: string;
  handleSubmit: (e: React.FormEvent) => void;
  formData: { name: string };
  setFormData: React.Dispatch<React.SetStateAction<{ name: string }>>;
  submitting: boolean;
}

const CategoryForm = ({
  isEditMode,
  submitButtonLabel,
  handleSubmit,
  formData,
  setFormData,
  submitting,
}: CategoryFormProps) => {
  return (
    <div className="mx-auto shadow-lg border border-gray-200 rounded-2xl bg-white">
      <div className="px-8 pt-8">
        <h1 className="text-3xl font-bold text-gray-800">
          {isEditMode ? "Update Category" : "Create Category"}
        </h1>
        <p className="text-gray-500 mt-1">
          {isEditMode
            ? "Update the category name below."
            : "Fill out the details below to add a new category."}
        </p>
      </div>

      <div className="p-8 space-y-10">
        <form onSubmit={handleSubmit} className="space-y-10">
          {/* --- Name --- */}
          <div className="grid md:grid-cols-2 gap-6">
            <CustomInput
              placeholder="Enter category name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              disabled={submitting}
            />
          </div>

          {/* --- Submit --- */}
          <div className="flex justify-end">
            <Button
              label={submitButtonLabel}
              loading={submitting}
              disabled={submitting}
              type="submit"
              loadingLabel={isEditMode ? "Updating..." : "Creating..."}
              style="px-8 py-3 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CategoryForm;