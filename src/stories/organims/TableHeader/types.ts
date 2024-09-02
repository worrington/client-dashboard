import { TableColumn, TableRowData } from "../Table/types";

export interface TableHeadProps {
  columns: TableColumn[];
  onSort: (key: keyof TableRowData) => void;
  onFilterChange?: (key: keyof TableRowData, value: string) => void;
  sortKey?: string | null;
  sortOrder?: "asc" | "desc"
}

export interface FilterOption {
  value: string;
  label: string;
}