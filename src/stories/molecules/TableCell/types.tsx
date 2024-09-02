export interface TableCellProps extends React.HTMLAttributes<HTMLTableCellElement> {
   /** The content to display inside the table cell. */
  children: React.ReactNode;
  colSpan?: number,
}