import { Code } from "@nextui-org/code";

interface ThroughputProps {
  numberOfProcesses: number;
  totalTime: number;
}

function Throughput({ numberOfProcesses, totalTime }: ThroughputProps) {
  const throughput = numberOfProcesses / totalTime;

  return (
    <div className="my-[0.8rem]">
      <label className="font-medium">Throughput: </label>
      <Code className="tracking-wide" size="md">
        {numberOfProcesses} / {totalTime} = {throughput.toFixed(2)}
      </Code>
    </div>
  );
}

export default Throughput;
