'use client'
import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
  Button,
} from "@heroui/react";
import { HiOutlineTrash } from "react-icons/hi";
import toast, { Toaster } from "react-hot-toast";
import Pagination from "../../shared/pagination";
import { formatDate } from "@/lib/utils";
import DeleteModal from "../../shared/deletemodal";

const Subscribers = () => {
  const searchParams = useSearchParams();
  const currentPage = parseInt(searchParams.get("page") || "1", 10);
  const [showConfirm, setShowConfirm] = useState(false);
  const [subscriberToDelete, setSubscriberToDelete] = useState<string | null>(null);

  // Static data for subscribers
  const staticData = {
    items: [
      {
        id: "1",
        email: "john.doe@example.com",
        createdAt: "2024-01-15T10:30:00Z",
        status: "active"
      },
      {
        id: "2",
        email: "sarah.wilson@example.com",
        createdAt: "2024-01-14T14:20:00Z",
        status: "active"
      },
      {
        id: "3",
        email: "mike.johnson@example.com",
        createdAt: "2024-01-12T09:15:00Z",
        status: "active"
      },
      {
        id: "4",
        email: "emma.brown@example.com",
        createdAt: "2024-01-10T16:45:00Z",
        status: "active"
      },
      {
        id: "5",
        email: "alex.chen@example.com",
        createdAt: "2024-01-08T11:00:00Z",
        status: "active"
      },
      {
        id: "6",
        email: "lisa.taylor@example.com",
        createdAt: "2024-01-05T13:25:00Z",
        status: "active"
      },
      {
        id: "7",
        email: "david.miller@example.com",
        createdAt: "2024-01-03T08:40:00Z",
        status: "active"
      },
      {
        id: "8",
        email: "jessica.wang@example.com",
        createdAt: "2024-01-01T15:10:00Z",
        status: "active"
      }
    ],
    total: 8,
    limit: 10,
    page: 1
  };

  const handleDelete = (id: string) => {
    setSubscriberToDelete(id);
    setShowConfirm(true);
  };

  const confirmDelete = async () => {
    if (!subscriberToDelete) return;

    const deleteToast = toast.loading("Deleting Subscriber...");
    try {
      // Since we're using static data, just simulate deletion
      console.log("Deleting subscriber:", subscriberToDelete);
      toast.success("Subscriber deleted successfully!", { id: deleteToast });
      // In a real app, you would refresh the data here
    } catch (err: any) {
      toast.error(err.message || "Failed to delete Subscriber", { id: deleteToast });
    } finally {
      setShowConfirm(false);
      setSubscriberToDelete(null);
    }
  };

  const cancelDelete = () => {
    setShowConfirm(false);
    setSubscriberToDelete(null);
  };

  return (
    <div className="w-full bg-gray-50 p-4 sm:p-8">

      {/* Confirmation Modal */}
      {showConfirm && (
        <DeleteModal cancelDelete={cancelDelete} label="Subscriber" confirmDelete={confirmDelete} />
      )}

      <div className="flex items-center justify-between w-full mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold  text-gray-800 tracking-tight">
          Subscribers
        </h1>
        <div className="font-medium text-gray-600">
          Total: {staticData.total} subscribers
        </div>
      </div>
      <div className="mx-auto bg-white rounded-2xl shadow-md border border-gray-100 p-4 sm:p-6 transition-all duration-300 hover:shadow-lg">
        <div className="relative overflow-x-auto max-w-full w-full scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
          <Table
            aria-label="Subscribers table"
            className="w-full rounded-xl border border-gray-200"
            classNames={{
              wrapper: "shadow-sm rounded-xl overflow-hidden bg-white",
              th: "bg-gray-100 text-gray-700 font-semibold text-sm uppercase tracking-wide border-b border-gray-200 text-left px-4 sm:px-6 py-3 align-middle",
              td: "px-4 sm:px-6 py-3 sm:py-4 text-sm text-gray-700 align-middle border-b border-gray-100",
            }}
          >
            <TableHeader>
              <TableColumn className="min-w-[200px]">Email</TableColumn>
              <TableColumn className="min-w-[150px]">Subscription Date</TableColumn>
              <TableColumn className="min-w-[100px]">Status</TableColumn>
              <TableColumn className="min-w-[100px] text-center">Actions</TableColumn>
            </TableHeader>

            <TableBody emptyContent="No subscribers found">
              {staticData.items.map((subscriber: any) => (
                <TableRow
                  key={subscriber.id}
                  className="transition-all duration-200 hover:bg-gray-50"
                >
                  {/* Email */}
                  <TableCell className="font-medium text-gray-900">
                    {subscriber.email}
                  </TableCell>

                  {/* Subscription Date */}
                  <TableCell className="text-gray-600">
                    {formatDate(subscriber.createdAt)}
                  </TableCell>

                  {/* Status */}
                  <TableCell>
                    <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Active
                    </div>
                  </TableCell>

                  {/* Actions */}
                  <TableCell className="text-center">
                    <div className="flex items-center justify-center">
                      <Button
                        isIconOnly
                        color="danger"
                        variant="flat"
                        size="sm"
                        className="transition-transform hover:scale-110"
                        onPress={() => handleDelete(subscriber.id)}
                        aria-label={`Delete ${subscriber.email}`}
                        disabled={subscriberToDelete === subscriber.id}
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

export default Subscribers;