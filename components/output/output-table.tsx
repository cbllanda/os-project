import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@nextui-org/table";

interface ProcessInfo {
  job: string;
  bt: number;
  at: number;
  ft: number;
  tat: number;
  wat: number;
}

interface OutputTableProps {
  solvedProcessesInfo?: ProcessInfo[];
}

function OutputTable({ solvedProcessesInfo = [] }: OutputTableProps) {
  const columns = [
    { name: "P", uid: "process" },
    { name: "BT", uid: "burstTime" },
    { name: "AT", uid: "arrivalTime" },
    { name: "FT", uid: "finishTime" },
    { name: "TAT", uid: "turnaroundTime" },
    { name: "WT", uid: "waitingTime" },
  ];
  
  return (
    <div className="my-[0.8rem]">
      <Table
        className="w-full mt-2"
        isStriped
        isHeaderSticky
        color="primary"
        classNames={{
          wrapper: "m-0 p-0",
          table: "w-full",
          th: "text-center p-[1rem] font-bold",
          td: "text-center p-[1rem]",
        }}
      >
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn key={column.uid} align="center">
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody emptyContent={"No items found."} items={solvedProcessesInfo}>
          {solvedProcessesInfo.map((process, index) => (
            <TableRow key={`table-row-${process.job}`}>
              <TableCell>{process.job}</TableCell>
              <TableCell>{process.bt}</TableCell>
              <TableCell>{process.at}</TableCell>
              <TableCell>{process.ft}</TableCell>
              <TableCell>{process.tat}</TableCell>
              <TableCell>{process.wat}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default OutputTable;
