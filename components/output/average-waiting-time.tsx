import { cn } from "@nextui-org/system";

import { fontMono } from "@/config/fonts";

interface AverageWaitingTimeProps {
  totalWaitingTime: number;
  numberOfProcesses: number;
}

function AverageWaitingTime({
  totalWaitingTime,
  numberOfProcesses,
}: AverageWaitingTimeProps) {
  const averageWaitingTime = totalWaitingTime / numberOfProcesses;

  return (
    <div className="my-[0.8rem]">
      <label className="font-medium">Average Waiting Time: </label>
      <code
        className={cn(
          `tracking-wide text-primary-500 block w-fit mt-1 sm:inline-block sm:mt-0 bg-primary-600/10 dark:primary-500/20 rounded-[0.75rem] p-1 px-[0.75rem] ${fontMono.className}`,
          fontMono.className
        )}
      >
        {totalWaitingTime} / {numberOfProcesses} ={" "}
        {averageWaitingTime.toFixed(2)}ms
      </code>
    </div>
  );
}

export default AverageWaitingTime;
