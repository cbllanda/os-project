import { Code } from "@nextui-org/code";

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
      <Code className="tracking-wide" size="md">
        {totalWaitingTime} / {numberOfProcesses} ={" "}
        {averageWaitingTime.toFixed(2)}ms
      </Code>
    </div>
  );
}

export default AverageWaitingTime;
