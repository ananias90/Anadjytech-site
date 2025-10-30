'use client'
import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
  Button,
  Chip,
} from "@heroui/react";
import { HiOutlinePencil, HiOutlineTrash } from "react-icons/hi";
import { Plus } from "lucide-react";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import Pagination from "../../shared/pagination";
import { formatDate } from "@/lib/utils";
import DeleteModal from "../../shared/deletemodal";


const data = {
    items: [
      {
        id: "1",
        name: "Electronics",
        productCount: 15,
        createdAt: "2024-01-15T10:30:00Z"
      },
      {
        id: "2",
        name: "Clothing",
        productCount: 23,
        createdAt: "2024-01-10T14:20:00Z"
      },
      {
        id: "3",
        name: "Books",
        productCount: 8,
        createdAt: "2024-01-05T09:15:00Z"
      },
      {
        id: "4",
        name: "Home & Garden",
        productCount: 12,
        createdAt: "2024-01-20T16:45:00Z"
      },
      {
        id: "5",
        name: "Sports",
        productCount: 7,
        createdAt: "2024-01-18T11:00:00Z"
      }
    ],
    total: 5,
    limit: 10,
    page: 1
  };

const Categories = () => {
  const searchParams = useSearchParams();
  const currentPage = parseInt(searchParams.get("page") || "1", 10);
  const router = useRouter();
  const [showConfirm, setShowConfirm] = useState(false);
  const [categoryToDelete, setCategoryToDelete] = useState<string | null>(null);


  const handleEdit = (id: any) => {
    router.push(`/dashboard/categories/${id}`);
  };

  const handleDelete = (id: string) => {
    setCategoryToDelete(id);
    setShowConfirm(true);
  };

  const confirmDelete = async () => {
    if (!categoryToDelete) return;

    toast.success("Category deleted successfully!");

    // const deleteToast = toast.loading("Deleting Category...");
    // try {
    //   const res = await deleteCategory(categoryToDelete);
    //   console.log(res)
    //   toast.success("Category deleted successfully!", { id: deleteToast });
    //   router.refresh();
    // } catch (err: any) {
    //   toast.error(err.message || "Failed to delete Category", { id: deleteToast });
    // } finally {
    //   setShowConfirm(false);
    //   setCategoryToDelete(null);
    // }
  };

  const cancelDelete = () => {
    setShowConfirm(false);
    setCategoryToDelete(null);
  };

  return (
    <div className="w-full bg-gray-50 p-3 sm:p-6">

      {/* Confirmation Modal */}
      {showConfirm && (
        <DeleteModal cancelDelete={cancelDelete} label="Category" confirmDelete={confirmDelete} />
      )}

      <div className="flex items-center justify-between w-full mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold  text-gray-800 tracking-tight">
          Categories
        </h1>
        <Link
          href="/admin/categories/create"
          className="bg-blue-900 hover:bg-blue-950 text-white flex items-center gap-2 rounded-xl p-3"
        >
          <Plus /> Add Category
        </Link>
      </div>
      <div className="mx-auto bg-white rounded-2xl shadow-md border border-gray-100 p-4 sm:p-6 transition-all duration-300 hover:shadow-lg">
        <div className="relative overflow-x-auto max-w-full w-full scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
          <Table
            aria-label="Category table"
            className="xl:min-w-[1200px] min-w-[1500px] w-full rounded-xl border border-gray-200"
            classNames={{
              wrapper: "shadow-sm rounded-xl overflow-hidden bg-white",
              th: "bg-gray-100 text-gray-700 font-semibold text-sm uppercase tracking-wide border-b border-gray-200 text-left px-4 sm:px-6 py-3 align-middle",
              td: "px-4 sm:px-6 py-3 sm:py-4 text-sm text-gray-700 align-middle border-b border-gray-100",
            }}
          >
            <TableHeader>
              <TableColumn className="min-w-[120px]">Name</TableColumn>
              <TableColumn className="min-w-[200px] max-w-[250px]">Products</TableColumn>
              <TableColumn className="min-w-[200px] max-w-[250px]">Date</TableColumn>
              <TableColumn className="min-w-[100px] text-center">Actions</TableColumn>
            </TableHeader>

            <TableBody emptyContent="No products found">
              {data.items.map((category: any) => (
                <TableRow
                  key={category.id}
                  className="transition-all duration-200 hover:bg-gray-50"
                >
                  {/* Name */}
                  <TableCell className="font-medium text-gray-900">
                    {category.name}
                  </TableCell>

                  {/* categories */}
                  <TableCell className="font-medium text-gray-900">
                    {category.productCount}
                  </TableCell>

                  {/* Date */}
                  <TableCell className="font-medium text-gray-900">
                    {formatDate(category.createdAt)}
                  </TableCell>

                  {/* Actions */}
                  <TableCell className="text-center">
                    <div className="flex items-center justify-center gap-3">
                      <Button
                        isIconOnly
                        color="warning"
                        variant="flat"
                        size="sm"
                        className="transition-transform hover:scale-110"
                        onPress={() => handleEdit(category.id)}
                        aria-label={`Edit ${category.name}`}
                      >
                        <HiOutlinePencil className="text-lg text-blue-600" />
                      </Button>
                      <Button
                        isIconOnly
                        color="danger"
                        variant="flat"
                        size="sm"
                        className="transition-transform hover:scale-110"
                        onPress={() => handleDelete(category.id)}
                        aria-label={`Delete ${category.name}`}
                        disabled={categoryToDelete === category.id}
                      >
                        <HiOutlineTrash className="text-lg text-red-600" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="mt-6 sm:mt-8 flex justify-end">
          <Pagination
            totalItems={data.total}
            itemsPerPage={data.limit}
            currentPage={currentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default Categories;
