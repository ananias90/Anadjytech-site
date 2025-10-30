import DashboardLayout from '@/components/admin/layout/admin-layout';
import React, { ReactNode } from 'react'

interface LayoutProps {
    children: ReactNode;
}

const layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <DashboardLayout>
            {children}
        </DashboardLayout>
    )
}

export default layout;
