'use client';

import { User } from "@/types/user.type";
import { useState, useEffect } from "react";
import { CustomBtn } from "../custom/customBtn.component";

interface EditUserModalProps {
    user: User | null;
    isOpen: boolean;
    onClose: () => void;
    onSave: (id: string, data: Partial<User>) => void;
    isLoading: boolean;
}

export const EditUserModal = ({ user, isOpen, onClose, onSave, isLoading }: EditUserModalProps) => {
    const [formData, setFormData] = useState<Partial<User>>({});

    useEffect(() => {
        if (user) {
            setFormData({
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
            });
        }
    }, [user]);

    if (!isOpen || !user) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave(user.id, formData);
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-xl font-bold mb-4 text-black">Edit User</h2>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    
                    <div>
                        <label className="block text-sm font-medium text-gray-700">First Name</label>
                        <input type="text" value={formData.firstName || ''}onChange={(e) => setFormData({...formData, firstName: e.target.value})}className="mt-1 text-black block w-full border rounded-md p-2"/>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Last Name</label>
                        <input type="text" value={formData.lastName || ''}onChange={(e) => setFormData({...formData, lastName: e.target.value})}className="mt-1 block w-full border text-black rounded-md p-2"/>
                    </div>

                     <div>
                        <label className="block text-sm font-medium text-gray-700">Last Name</label>
                        <input type="text" value={formData.email || ''}onChange={(e) => setFormData({...formData, email: e.target.value})}className="mt-1 block w-full border text-black rounded-md p-2"/>
                    </div>

                    <div className="flex justify-end gap-2 mt-4">
                        <CustomBtn type="button" onClick={onClose} style="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400" label="Cancel"/>
                        <CustomBtn type="submit" disabled={isLoading} style="px-4 py-2 bg-blue-600   rounded hover:bg-blue-700 disabled:opacity-50" label={isLoading ? 'Saving...' : 'Save Changes'}/>
                    </div>
                </form>
            </div>
        </div>
    );
};