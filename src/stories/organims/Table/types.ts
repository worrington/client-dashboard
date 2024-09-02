
export type TableRowData = Record<string, any>;

export interface TableColumn {
  key: string;
  label: string;
  sortable?: boolean;
  filterable?: boolean;
  options?: {
      value: string;
      label: string;
  }[];
  onFilter?: (filterState: string) => void;
}

export interface TableProps {
  data: TableRowData[];
  columns: TableColumn[];
}
