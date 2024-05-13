import { cn } from "@nextui-org/system";

import { fontMono } from "@/config/fonts";

interface ThroughputProps {
  numberOfProcesses: number;
  totalTime: number;
}

function Throughput({ numberOfProcesses, totalTime }: ThroughputProps) {
  const throughput = numberOfProcesses / totalTime;

  return (
    <div className="my-[0.8rem]">
      <label className="font-medium">Throughput: </label>
      <code
        className={cn(
          `tracking-wide text-primary-500 block w-fit mt-1 sm:inline-block sm:mt-0 bg-primary-600/10 dark:primary-500/20 rounded-[0.75rem] p-1 px-[0.75rem] ${fontMono.className}`,
          fontMono.className
        )}
      >
        {numberOfProcesses} / {totalTime} = {throughput.toFixed(2)}
      </code>
    </div>
  );
}

export default Throughput;
