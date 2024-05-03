import { Code } from "@nextui-org/code";
import { cn } from "@nextui-org/system";

import { fontMono } from "@/config/fonts";

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
      <label className="font-semibold">Average Turnaround Time: </label>
      <Code className={cn("tracking-wide text-primary block w-fit mt-1 sm:inline-block sm:mt-0", fontMono.className)} size="md">
        {totalTurnaroundTime} / {numberOfProcesses} ={" "}
        {averageTurnaroundTime.toFixed(2)}ms
      </Code>
    </div>
  );
}

export default AverageTurnaroundTime;
