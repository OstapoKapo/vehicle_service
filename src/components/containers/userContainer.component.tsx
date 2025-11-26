"use client";

import { User } from "@/types/user.type";

interface UserContainerProps {
  user: User;
}

export const UserContainer = ({ user }: UserContainerProps) => {
  return (
    <div className="container mx-auto p-4">
      <div className="card mb-8">
        <h2 className="text-2xl font-bold mb-4">User Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.keys(user).map((key) => (
            <div key={key}>
              <p className="font-semibold">{key}</p>
              <p>{user[key as keyof User]}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="card">
        <h2 className="text-2xl font-bold mb-4">User's Vehicles</h2>
        <div className="text-center p-8 border-2 border-dashed border-gray-400 rounded-lg">
          <p className="text-gray-500">
            Vehicle information will be displayed here.
          </p>
        </div>
      </div>
    </div>
  );
};

