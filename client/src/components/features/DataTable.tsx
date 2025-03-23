import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";

interface DataColumn {
  id: string;
  title: string;
  isNumeric?: boolean;
}

interface DataTableProps {
  columns: DataColumn[];
  data: any[];
  isEditing?: boolean;
  onDataChange?: (rowIndex: number, columnId: string, value: any) => void;
}

const DataTable = ({ 
  columns, 
  data, 
  isEditing = false,
  onDataChange
}: DataTableProps) => {
  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            {columns.map((column) => (
              <TableHead 
                key={column.id}
                className={column.isNumeric ? "text-right" : ""}
              >
                {column.title}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              {columns.map((column) => (
                <TableCell 
                  key={`${rowIndex}-${column.id}`}
                  className={column.isNumeric ? "text-right" : ""}
                >
                  {isEditing ? (
                    <Input
                      value={row[column.id]}
                      onChange={(e) => {
                        if (onDataChange) {
                          const value = column.isNumeric 
                            ? parseFloat(e.target.value) 
                            : e.target.value;
                          onDataChange(rowIndex, column.id, value);
                        }
                      }}
                      type={column.isNumeric ? "number" : "text"}
                      step={column.isNumeric ? "0.01" : undefined}
                      className="h-7 py-1 px-2 text-sm"
                    />
                  ) : column.isNumeric && typeof row[column.id] === 'number' ? (
                    <span className={row[column.id] >= 0 ? "text-success" : ""}>
                      {row[column.id] >= 0 ? "+" : ""}${Math.abs(row[column.id]).toFixed(2)}
                    </span>
                  ) : (
                    row[column.id]
                  )}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default DataTable;
