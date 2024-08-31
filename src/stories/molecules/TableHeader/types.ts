import { TableColumn, TableRowData } from "../../organims/Table/types";

export interface TableHeadProps {
  columns: TableColumn[];
  onSort: (key: keyof TableRowData) => void;
  onFilterChange: (key: keyof TableRowData, value: string) => void;
}