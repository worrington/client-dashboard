
export type TableRowData = Record<string, any>;

export interface TableColumn {
  key: string;
  label: string;
  sortable?: boolean;
  filterable?: boolean;
}

export interface TableProps {
  data: TableRowData[];
  columns: TableColumn[];
}
