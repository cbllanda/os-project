import { Code } from "@nextui-org/code";

interface AverageTurnaroundTimeProps {
  totalTurnaroundTime: number;
  numberOfProcesses: number;
}

function AverageTurnaroundTime({
  totalTurnaroundTime,
  numberOfProcesses,
}: AverageTurnaroundTimeProps) {
  const averageTurnaroundTime = totalTurnaroundTime / numberOfProcesses;

  return (
    <div className="my-[0.8rem]">
      <label className="font-medium">Average Turnaround Time: </label>
      <Code className="tracking-wide" size="md">
        {totalTurnaroundTime} / {numberOfProcesses} ={" "}
        {averageTurnaroundTime.toFixed(2)}ms
      </Code>
    </div>
  );
}

export default AverageTurnaroundTime;
