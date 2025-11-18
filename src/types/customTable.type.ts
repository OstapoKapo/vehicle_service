import { ReactNode } from "react";

export interface ColumnConfig<T> {
  header: string;
  render: (item: T, index: number) => ReactNode; 
  className?: string; 
}

export interface CustomTableProps<T> {
  data: T[];
  columns: ColumnConfig<T>[];
  isLoading?: boolean;
  currentPage: number;
  totalPages: number;
  onPageChange: (newPage: number) => void;
}