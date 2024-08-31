import { TableBodyProps } from "./types";

/**
 * TableBody Component
 * 
 * This is a functional component that represents the body of a table in an HTML structure.
 * The `TableBody` wraps the elements passed as `children` inside a `<tbody>` tag of a table.
 */
const TableBody: React.FC<TableBodyProps> = ({ children }) => {
  return (
    <tbody className="divide-y">
      {children}
    </tbody>
  );
};

export default TableBody;
