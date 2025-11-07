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
  Image,
  Chip,
} from "@heroui/react";
import { HiOutlinePencil, HiOutlineTrash } from "react-icons/hi";
import { Plus } from "lucide-react";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import Pagination from "../../shared/pagination";
import { formatDate } from "@/lib/utils";
import DeleteModal from "../../shared/deletemodal";

const Blogs = () => {
  const searchParams = useSearchParams();
  const currentPage = parseInt(searchParams.get("page") || "1", 10);
  const router = useRouter();
  const [showConfirm, setShowConfirm] = useState(false);
  const [blogToDelete, setBlogToDelete] = useState<string | null>(null);

  // Static data for blogs
  const staticData = {
    items: [
      {
        id: "1",
        title: "Getting Started with Next.js",
        description: "A comprehensive guide to starting with Next.js framework",
        heroImage: "/images/hero-banner.jpeg",
        content: "<p>This is the full content of the blog post about Next.js...</p>",
        status: "published",
        createdAt: "2024-01-15T10:30:00Z",
        updatedAt: "2024-01-16T14:20:00Z"
      },
      {
        id: "2",
        title: "React Best Practices in 2024",
        description: "Learn the latest React patterns and best practices",
        heroImage: "/about-hero-desktop.webp",
        content: "<p>React best practices and patterns for modern development...</p>",
        status: "published",
        createdAt: "2024-01-10T14:20:00Z",
        updatedAt: "2024-01-12T09:15:00Z"
      },
      {
        id: "3",
        title: "TypeScript for JavaScript Developers",
        description: "Transition from JavaScript to TypeScript smoothly",
        heroImage: "/anker-powercore-power-bank.jpg",
        content: "<p>Understanding TypeScript and its benefits for JavaScript developers...</p>",
        status: "draft",
        createdAt: "2024-01-05T09:15:00Z",
        updatedAt: "2024-01-07T11:30:00Z"
      },
      {
        id: "4",
        title: "Building Scalable APIs with Node.js",
        description: "Create robust and scalable APIs using Node.js",
        heroImage: "/about-hero-desktop.webp",
        content: "<p>Learn how to build scalable APIs with Node.js and Express...</p>",
        status: "published",
        createdAt: "2024-01-20T16:45:00Z",
        updatedAt: "2024-01-22T10:10:00Z"
      },
      {
        id: "5",
        title: "Modern CSS Techniques",
        description: "Explore modern CSS features and techniques",
        heroImage: "/images/hero-banner.jpeg",
        content: "<p>Discover the latest CSS features and how to use them effectively...</p>",
        status: "published",
        createdAt: "2024-01-18T11:00:00Z",
        updatedAt: "2024-01-19T13:25:00Z"
      }
    ],
    total: 5,
    limit: 10,
    page: 1
  };

  const handleEdit = (id: any) => {
    router.push(`/dashboard/blogs/${id}`);
  };

  const handleDelete = (id: string) => {
    setBlogToDelete(id);
    setShowConfirm(true);
  };

  const confirmDelete = async () => {
    if (!blogToDelete) return;

    const deleteToast = toast.loading("Deleting Blog...");
    try {
      // Since we're using static data, just simulate deletion
      console.log("Deleting blog:", blogToDelete);
      toast.success("Blog deleted successfully!", { id: deleteToast });
      router.refresh();
    } catch (err: any) {
      toast.error(err.message || "Failed to delete Blog", { id: deleteToast });
    } finally {
      setShowConfirm(false);
      setBlogToDelete(null);
    }
  };

  const cancelDelete = () => {
    setShowConfirm(false);
    setBlogToDelete(null);
  };

  const getStatusStyles = (status: string) => {
    switch (status) {
      case 'published':
        return "bg-green-200 text-green-800";
      case 'draft':
        return "bg-orange-200 text-orange-800";
      case 'archived':
        return "bg-gray-200 text-gray-800";
      default:
        return "bg-gray-200 text-gray-800";
    }
  };

  const truncateDescription = (description: string, maxLength: number = 80) => {
    if (description.length <= maxLength) return description;
    return description.substring(0, maxLength) + '...';
  };

  return (
    <div className="w-full bg-gray-50 p-4 sm:p-8">

      {/* Confirmation Modal */}
      {showConfirm && (
        <DeleteModal cancelDelete={cancelDelete} label="Blog" confirmDelete={confirmDelete} />
      )}

      <div className="flex items-center justify-between mb-6 sm:mb-8 w-full">
        <h1 className="text-2xl sm:text-3xl font-bold  text-gray-800 tracking-tight">
          Blogs
        </h1>
        <Link
          href="/admin/blogs/create"
          className="bg-blue-900 hover:bg-blue-950 text-white flex items-center gap-2 rounded-xl p-3"
        >
          <Plus /> Add Blog
        </Link>
      </div>
      <div className="mx-auto bg-white rounded-2xl shadow-md border border-gray-100 p-4 sm:p-6 transition-all duration-300 hover:shadow-lg">
        <div className="relative overflow-x-auto max-w-full w-full scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
          <Table
            aria-label="Blog table"
            className="xl:min-w-[1200px] min-w-[1500px] w-full rounded-xl border border-gray-200"
            classNames={{
              wrapper: "shadow-sm rounded-xl overflow-hidden bg-white",
              th: "bg-gray-100 text-gray-700 font-semibold text-sm uppercase tracking-wide border-b border-gray-200 text-left px-4 sm:px-6 py-3 align-middle",
              td: "px-4 sm:px-6 py-3 sm:py-4 text-sm text-gray-700 align-middle border-b border-gray-100",
            }}
          >
            <TableHeader>
              <TableColumn className="min-w-[150px]">Title</TableColumn>
              <TableColumn className="min-w-[200px] max-w-[300px]">Description</TableColumn>
              <TableColumn className="min-w-[100px]">Hero Image</TableColumn>
              <TableColumn className="min-w-[100px]">Status</TableColumn>
              <TableColumn className="min-w-[150px]">Created Date</TableColumn>
              <TableColumn className="min-w-[120px] text-center">Actions</TableColumn>
            </TableHeader>

            <TableBody emptyContent="No blogs found">
              {staticData.items.map((blog: any) => (
                <TableRow
                  key={blog.id}
                  className="transition-all duration-200 hover:bg-gray-50"
                >
                  {/* Title */}
                  <TableCell className="font-medium text-gray-900">
                    {blog.title}
                  </TableCell>

                  {/* Description */}
                  <TableCell className="text-gray-600">
                    {truncateDescription(blog.description)}
                  </TableCell>

                  {/* Hero Image */}
                  <TableCell>
                    <div className="w-16 h-12 rounded-lg overflow-hidden border border-gray-200">
                      <Image
                        src={blog.heroImage}
                        alt={blog.title}
                        className="w-full h-full object-cover"
                        width={64}
                        height={48}
                      />
                    </div>
                  </TableCell>

                  {/* Status */}
                  <TableCell>
                    <Chip
                      color="default"
                      variant="solid"
                      size="sm"
                      className={getStatusStyles(blog.status)}
                    >
                      {blog.status.charAt(0).toUpperCase() + blog.status.slice(1)}
                    </Chip>
                  </TableCell>

                  {/* Date */}
                  <TableCell className="text-gray-600">
                    {formatDate(blog.createdAt)}
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
                        onPress={() => handleEdit(blog.id)}
                        aria-label={`Edit ${blog.title}`}
                      >
                        <HiOutlinePencil className="text-lg text-blue-600" />
                      </Button>
                      <Button
                        isIconOnly
                        color="danger"
                        variant="flat"
                        size="sm"
                        className="transition-transform hover:scale-110"
                        onPress={() => handleDelete(blog.id)}
                        aria-label={`Delete ${blog.title}`}
                        disabled={blogToDelete === blog.id}
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
            totalItems={staticData.total}
            itemsPerPage={staticData.limit}
            currentPage={currentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default Blogs;