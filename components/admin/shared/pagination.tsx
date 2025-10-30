"use client";

import React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Pagination as HeroPagination } from '@heroui/react';

const Pagination = ({ totalItems, itemsPerPage, currentPage }: any) => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const handlePageChange = (page: any) => {
        const newParams = new URLSearchParams(searchParams);
        newParams.set('page', page.toString());
        router.push(`/products?${newParams.toString()}`);
    };

    return (
        <HeroPagination
            total={totalPages}
            page={currentPage}
            onChange={handlePageChange}
            showControls
            color="secondary"
            classNames={{
                wrapper: 'gap-2',
                item: 'bg-white',
                cursor: 'bg-indigo-600 text-white',
            }}
        />
    );
};

export default Pagination;