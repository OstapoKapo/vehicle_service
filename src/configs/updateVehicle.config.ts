import { FormField } from "@/types/customForm.type";
import { Vehicle } from "@/types/vehicles.type";

export const updateVehicleConfig = (vehicle: Vehicle): FormField[] => {
  return [
    {
      name: "make",
      label: "Make",
      type: "text",
      defaultValue: vehicle.make,
      rules: {
        required: "This field is required",
      },
    },
    {
      name: "model",
      label: "Model",
      type: "text",
      defaultValue: vehicle.model,
      rules: {
        required: "This field is required",
      },
    },
    {
      name: "year",
      label: "Year",           
      type: "number",
      defaultValue: vehicle.year,
      rules: {
        required: "This field is required",
      },
    },
    {
      name: "vin",
      label: "VIN",
      type: "text",
      defaultValue: vehicle.vin,
      rules: {
        required: "This field is required",
      },
    },
  ];
};