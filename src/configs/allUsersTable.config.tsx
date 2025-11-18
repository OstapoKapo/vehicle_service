import { PAGINATION_LIMIT } from "@/constants/app.constants";
import { ColumnConfig } from "@/types/customTable.type";
import { User } from "@/types/user.type";
import Link from "next/link";

interface UserColumnsProps {
    page: number;
    onDelete: (id: string) => void;
    onEdit: (user: User) => void;  
}

export const getUserColumns = ({ page, onDelete, onEdit }: UserColumnsProps): ColumnConfig<User>[] => {
    return [
        { 
            header: '№', 
            render: (_, index) => (
                <span className="text-gray-500 font-mono">
                    {(page - 1) * PAGINATION_LIMIT + index + 1}
                </span>
            ),
            className: "w-12"
        },
        { 
            header: 'Full Name', 
            render: (user) => <span className="font-medium">{user.firstName} {user.lastName}</span> 
        },
        { 
            header: 'Email', 
            render: (user) => <span className="text-blue-600">{user.email}</span> 
        },
        { 
            header: 'Role', 
            render: (user) => (
                <span className={`px-2 py-1 rounded text-xs ${user.isAdmin ? 'bg-purple-100 text-purple-800' : 'bg-gray-100 text-gray-800'}`}>
                    {user.isAdmin ? 'Admin' : 'User'}
                </span>
            ) 
        },
        {
            header: 'Actions',
            render: (user) => (
                <div className="space-x-4">
                    <button 
                        className="text-red-500 hover:underline" 
                        onClick={() => onDelete(user.id)}
                    >
                        Delete
                    </button>
                    
                    <button 
                        className="text-blue-500 hover:underline" 
                        onClick={() => onEdit(user)} 
                    >
                        Edit
                    </button>
                    
                    <Link href={`/users/${user.id}`} className="text-green-500 hover:underline">
                        View
                    </Link>
                </div>
            )
        }
    ];
};