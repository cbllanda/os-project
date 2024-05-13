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
      <label className="font-medium">Average Turnaround Time: </label>
      <code
        className={cn(
          `tracking-wide text-primary-500 block w-fit mt-1 sm:inline-block sm:mt-0 bg-primary-600/10 dark:primary-500/20 rounded-[0.75rem] p-1 px-[0.75rem] ${fontMono.className}`,
          fontMono.className
        )}
      >
        {totalTurnaroundTime} / {numberOfProcesses} ={" "}
        {averageTurnaroundTime.toFixed(2)}ms
      </code>
    </div>
  );
}

export default AverageTurnaroundTime;
