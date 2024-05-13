import { cn } from "@nextui-org/system";

import { fontMono } from "@/config/fonts";

interface CpuProps {
  totalCpuTime: number;
  totalElapsedTime: number;
}

function CpuUtilization({ totalCpuTime, totalElapsedTime }: CpuProps) {
  const cpuUtilization = (totalCpuTime / totalElapsedTime) * 100;

  return (
    <div className="my-[0.8rem]">
      <label className="font-medium">CPU Utilization: </label>
      <code
        className={cn(
          `tracking-wide text-primary-500 block w-fit mt-1 sm:inline-block sm:mt-0 bg-primary-600/10 dark:primary-500/20 rounded-[0.75rem] p-1 px-[0.75rem] ${fontMono.className}`,
          fontMono.className
        )}
      >
        {totalCpuTime} / {totalElapsedTime} * 100 = {cpuUtilization.toFixed(2)}%
      </code>
    </div>
  );
}

export default CpuUtilization;
