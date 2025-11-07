"use client";

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
import { PencilIcon, Plus, TrashIcon } from "lucide-react";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
// import { deleteProduct } from "@/app/actions/products";
import Pagination from "../../shared/pagination";
import DeleteModal from "../../shared/deletemodal";

const dummyProducts = [
  {
    id: "1",
    name: "Wireless Bluetooth Headphones",
    category: { name: "Electronics" },
    description: "High-quality wireless headphones with noise cancellation and 30-hour battery life.",
    quantity: 45,
    status: "active",
    features: ["wireless", "audio", "bluetooth"]
  },
  {
    id: "2",
    name: "Organic Cotton T-Shirt",
    category: { name: "Clothing" },
    description: "Comfortable organic cotton t-shirt available in multiple colors and sizes.",
    quantity: 0,
    status: "inactive",
    features: ["organic", "cotton", "sustainable"]
  },
  {
    id: "3",
    name: "Stainless Steel Water Bottle",
    category: { name: "Home & Kitchen" },
    description: "Insulated stainless steel water bottle that keeps drinks cold for 24 hours or hot for 12 hours.",
    quantity: 23,
    status: "active",
    features: ["eco-friendly", "insulated", "bpa-free"]
  },
  {
    id: "4",
    name: "Yoga Mat Premium",
    category: { name: "Sports" },
    description: "Non-slip yoga mat with extra cushioning for comfort during workouts and meditation.",
    quantity: 15,
    status: "active",
    features: ["fitness", "yoga", "exercise"]
  },
  {
    id: "5",
    name: "Programming Book Bundle",
    category: { name: "Books" },
    description: "Complete set of programming books covering JavaScript, React, and Node.js for beginners to advanced developers.",
    quantity: 8,
    status: "active",
    features: ["programming", "education", "books"]
  },
  {
    id: "6",
    name: "Smart Fitness Watch",
    category: { name: "Electronics" },
    description: "Advanced fitness tracker with heart rate monitoring, GPS, and smartphone connectivity.",
    quantity: 0,
    status: "inactive",
    features: ["smartwatch", "fitness", "tracker", "heart-rate", "gps", "waterproof"]
  }
];

// Dummy data structure to match your expected format
const data = {
  items: dummyProducts,
  total: dummyProducts.length,
  limit: 10,
  currentPage: 1
};



const Products = () => {
  const searchParams = useSearchParams();
  const currentPage = parseInt(searchParams.get("page") || "1", 10);
  const router = useRouter();
  const [showConfirm, setShowConfirm] = useState(false);
  const [productToDelete, setProductToDelete] = useState<string | null>(null);
  

  const handleEdit = (id: any) => {
    router.push(`/dashboard/products/${id}`);
  };

  const handleDelete = (id: string) => {
    setProductToDelete(id);
    setShowConfirm(true);
  };

  const confirmDelete = async () => {
    if (!productToDelete) return;

    toast.success("Product deleted successfully!")

    // const deleteToast = toast.loading("Deleting product...");
    // try {
    //   const res = await deleteProduct(productToDelete);
    //   console.log(res)
    //   toast.success("Product deleted successfully!", { id: deleteToast });
    //   router.refresh();
    // } catch (err: any) {
    //   toast.error(err.message || "Failed to delete product", { id: deleteToast });
    // } finally {
    //   setShowConfirm(false);
    //   setProductToDelete(null);
    // }
  };

  const cancelDelete = () => {
    setShowConfirm(false);
    setProductToDelete(null);
  };

  // Function to truncate feature text if too long
  const truncateFeature = (feature: string, maxLength: number = 12) => {
    if (feature.length <= maxLength) return feature;
    return feature.substring(0, maxLength) + '...';
  };

  return (
    <div className="w-full bg-gray-50 p-3 sm:p-6">

      {/* Confirmation Modal */}
      {showConfirm && (
        <DeleteModal label="Product" cancelDelete={cancelDelete} confirmDelete={confirmDelete} />
      )}

      <div className="flex items-center justify-between w-full mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold  text-gray-800 tracking-tight">
          Products
        </h1>
        <Link
          href="/admin/products/create"
          className="bg-blue-900 hover:bg-blue-950 text-white flex items-center gap-2 rounded-xl p-3"
        >
          <Plus /> Add Product
        </Link>
      </div>
      <div className="mx-auto bg-white rounded-2xl shadow-md border border-gray-100 p-4 sm:p-6 transition-all duration-300 hover:shadow-lg">
        <div className="relative overflow-x-auto max-w-full w-full scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
          <Table
            aria-label="Products table"
            className="xl:min-w-[1200px] min-w-[1500px] w-full rounded-xl border border-gray-200"
            classNames={{
              wrapper: "shadow-sm rounded-xl overflow-hidden bg-white",
              th: "bg-gray-100 text-gray-700 font-semibold text-sm uppercase tracking-wide border-b border-gray-200 text-left px-4 sm:px-6 py-3 align-middle",
              td: "px-4 sm:px-6 py-3 sm:py-4 text-sm text-gray-700 align-middle border-b border-gray-100",
            }}
          >
            <TableHeader>
              <TableColumn className="min-w-[120px]">Name</TableColumn>
              <TableColumn className="min-w-[150px] whitespace-nowrap">Category</TableColumn>
              <TableColumn className="min-w-[200px] max-w-[250px]">Description</TableColumn>
              <TableColumn className="min-w-[80px] text-center">Quantity</TableColumn>
              <TableColumn className="min-w-[80px] text-center">Status</TableColumn>
              <TableColumn className="min-w-[100px] text-center">Features</TableColumn>
              <TableColumn className="min-w-[100px] text-center">Actions</TableColumn>
            </TableHeader>

            <TableBody emptyContent="No products found">
              {data.items.map((product: any) => (
                <TableRow
                  key={product.id}
                  className="transition-all duration-200 hover:bg-gray-50"
                >
                  {/* Name */}
                  <TableCell className="font-medium text-gray-900">
                    {product.name}
                  </TableCell>

                  {/* Category + Subcategory */}
                  <TableCell>
                    <div className="flex flex-wrap gap-2">
                      {product.category?.name && (
                        <Chip
                          color="default"
                          variant="solid"
                          size="sm"
                          className="bg-orange-200 text-orange-800"
                        >
                          {product.category.name.trim()}
                        </Chip>
                      )}
                      {product.subcategorie?.name && (
                        <Chip
                          color="default"
                          variant="solid"
                          size="sm"
                          className="bg-blue-200 text-blue-800"
                        >
                          {product.subcategorie.name.trim()}
                        </Chip>
                      )}
                    </div>
                  </TableCell>

                  {/* Description */}
                  <TableCell className="text-gray-600 truncate max-w-[250px]">
                    {product.description}
                  </TableCell>

                 

                  {/* Quantity */}
                  <TableCell className="text-center">
                    {product.quantity}
                  </TableCell>

                  {/* Status */}
                  <TableCell className="text-center">
                    <Chip
                      color="default"
                      variant="solid"
                      className={`capitalize font-medium text-white ${product.status === "active" ? "bg-green-600" : "bg-red-600"
                        }`}
                    >
                      {product.status}
                    </Chip>
                  </TableCell>

                  {/* Features */}
                  <TableCell className="text-center">
                    <div className="flex justify-center flex-wrap gap-1">
                      {product.features?.length > 0 ? (
                        <>
                          {/* Show first 3 features */}
                          {product.features.slice(0, 3).map((feature: any, index: any) => (
                            <Chip
                              key={index}
                              size="sm"
                              color="default"
                              variant="solid"
                              className="text-xs p-0.5 bg-gray-200 text-gray-800 max-w-[80px] truncate"
                              title={feature} // Show full text on hover
                            >
                              {truncateFeature(feature)}
                            </Chip>
                          ))}
                          {/* Show +X indicator if there are more than 3 features */}
                          {product.features.length > 3 && (
                            <Chip
                              size="sm"
                              color="default"
                              variant="solid"
                              className="text-xs p-0.5 bg-blue-200 text-blue-800"
                              title={`Additional features: ${product.features.slice(3).join(', ')}`}
                            >
                              +{product.features.length - 3}
                            </Chip>
                          )}
                        </>
                      ) : (
                        <span className="text-gray-400 text-sm">—</span>
                      )}
                    </div>
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
                        onPress={() => handleEdit(product.id)}
                        aria-label={`Edit ${product.name}`}
                      >
                        <PencilIcon className="text-lg text-blue-600" />
                      </Button>
                      <Button
                        isIconOnly
                        color="danger"
                        variant="flat"
                        size="sm"
                        className="transition-transform hover:scale-110"
                        onPress={() => handleDelete(product.id)}
                        aria-label={`Delete ${product.name}`}
                        disabled={productToDelete === product.id}
                      >
                        <TrashIcon className="text-lg text-red-600" />
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

export default Products;