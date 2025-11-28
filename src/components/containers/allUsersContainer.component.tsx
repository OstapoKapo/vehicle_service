"use client";

import { GetAllUsersRes, User } from "@/types/user.type";
import { CustomTable } from "../custom/customTable.component";
import { useEffect, useMemo, useState } from "react";
import {
  useDeleteUserMutation,
  useUpdateUserMutation,
} from "@/api/user/user.mutation";
import { EditUserModal } from "../ui/editUserModal.component";
import { getUserColumns } from "@/configs/allUsersTable.config";
import { useGetAllUsersQuery } from "@/api/user/user.query";
import { Vehicle } from "@/types/vehicles.type";

interface AllUsersContainerProps {
  initialData: GetAllUsersRes;
}

export const AllUsersContainer = ({ initialData }: AllUsersContainerProps) => {
  const [page, setPage] = useState(1);

  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const deleteMutation = useDeleteUserMutation();
  const updateMutation = useUpdateUserMutation();

  const { data, isLoading } = useGetAllUsersQuery(page, initialData);

  const handleEditClick = (user: User) => {
    setEditingUser(user);
    setIsModalOpen(true);
  };

  const handleSaveChanges = (id: string, updatedData: Partial<User> | Partial<Vehicle>) => {
    updateMutation.mutate(
      { id, data: updatedData as Partial<User> },
      {
        onSuccess: () => {
          setIsModalOpen(false);
          setEditingUser(null);
        },
      },
    );
  };

  const userColumns = useMemo(
    () =>
      getUserColumns({
        page,
        onDelete: (id) => deleteMutation.mutate(id),
        onEdit: (user) => handleEditClick(user),
      }),
    [page, deleteMutation, handleEditClick],
  );

  useEffect(() => {
    if (!isLoading && data?.users?.length === 0 && page > 1) {
      setPage((prev) => prev - 1);
    }
  }, [data, isLoading, page]);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Користувачі</h1>
      <CustomTable
        data={data?.users || []}
        columns={userColumns}
        isLoading={false}
        currentPage={page}
        totalPages={data?.totalPages || 1}
        onPageChange={(newPage) => setPage(newPage)}
      />

      <EditUserModal
        type = "user"
        isOpen={isModalOpen}
        user={editingUser}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveChanges}
        isLoading={updateMutation.isPending}
      />
    </div>
  );
};

