'use client';

import { User } from "@/types/user.type";
import { CustomForm } from "../custom/customForm.component";
import { CustomBtn } from "../custom/customBtn.component";
import { FormField } from "@/types/customForm.type";
import { updateUserConfig } from "@/configs/updateUser.config";
import { Vehicle } from "@/types/vehicles.type";
import { updateVehicleConfig } from "@/configs/updateVehicle.config";

interface EditUserModalProps {
  user?: User | null;
  vehicle?: Vehicle | null;
  type: 'user' | 'vehicle';
  isOpen: boolean;
  onClose: () => void;
  onSave: (id: string, data: Partial<User | Vehicle>) => void;
  isLoading: boolean;
}

export const EditUserModal = ({ user, vehicle, isOpen, onClose, onSave, isLoading, type }: EditUserModalProps) => {
  if (!isOpen || (type === 'user' ? !user : !vehicle)) return null;

  const fields = type === 'user' ? updateUserConfig(user!) : updateVehicleConfig(vehicle!);

  const handleSubmit = (data: Partial<User>) => {
    type === 'user' ? onSave(user!.id, data) : onSave(vehicle!.id, data);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className=" p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4">Edit User</h2>
        <CustomForm<Partial<User>>
          fields={fields}
          onSubmit={handleSubmit}
          submitText={isLoading ? 'Saving...' : 'Save Changes'}
        />
        <div className="flex justify-end gap-2 mt-4">
          <CustomBtn
            type="button"
            onClick={onClose}
            style="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            label="Cancel"
          />
        </div>
      </div>
    </div>
  );
};
