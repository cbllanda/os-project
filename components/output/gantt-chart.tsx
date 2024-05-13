import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Asterisk, Space } from "lucide-react";

interface ganttChartInfoType {
  job: string;
  start: number;
  stop: number;
}

interface GanttChartProps {
  ganttChartInfo: ganttChartInfoType[];
}

function GanttChart({ ganttChartInfo }: GanttChartProps) {
  const renderedItems = ganttChartInfo.reduce(
    (acc: JSX.Element[], info, index) => {
      // Add placeholder card for gap before the first process starts
      if (index === 0 && info.start > 0) {
        acc.push(
          <Card
          key={index}
          className="flex !w-[4.2rem] !h-[4.2rem] bg-[#fafafa] dark:bg-[#27272c]"
          radius="none"
        >
          <CardBody className="flex justify-center items-center overflow-hidden">
            <div className="text-center font-bold mt-2">
              <Asterisk strokeWidth={2.5} />
            </div>
          </CardBody>
          <CardFooter className="flex text-xs text-center">
            <div className="flex justify-center w-full bottom-[0.2rem]">
              <span className="absolute left-2">0</span> {" - "}
              <span className="absolute right-2">{ganttChartInfo[0].start}</span>
            </div>
          </CardFooter>
        </Card>
        );
      }

      acc.push(
        <Card
          key={index}
          className="flex !w-[4.2rem] !h-[4.2rem] bg-[#fafafa] dark:bg-[#27272c]"
          radius="none"
        >
          <CardBody className="flex justify-center items-center overflow-hidden">
            <div className="text-center font-bold mt-2">{info.job}</div>
          </CardBody>
          <CardFooter className="flex text-xs text-center">
            <div className="flex justify-center w-full bottom-[0.2rem]">
              <span className="absolute left-2">{info.start}</span> {" - "}
              <span className="absolute right-2">{info.stop}</span>
            </div>
          </CardFooter>
        </Card>
      );

      // Check for gap
      if (
        index < ganttChartInfo.length - 1 &&
        info.stop < ganttChartInfo[index + 1].start
      ) {
        acc.push(
          <Card
            key={`gap-${index}`}
            className="flex !w-[4.2rem] !h-[4.2rem] bg-[#fafafa] dark:bg-[#27272c]"
            radius="none"
          >
            <CardBody className="flex justify-center items-center overflow-hidden">
              <div className="text-center mt-2">
                <Space strokeWidth={2.5} />
              </div>
            </CardBody>
            <CardFooter className="flex text-xs text-center">
              <div className="flex justify-center w-full bottom-[0.2rem]">
                <span className="absolute left-2">{info.stop}</span> {" - "}
                <span className="absolute right-2">
                  {ganttChartInfo[index + 1].start}
                </span>
              </div>
            </CardFooter>
          </Card>
        );
      }

      return acc;
    },
    []
  );

  return (
    <div className="flex flex-wrap flex-row justify-center gap-1 mt-2">
      {renderedItems}
    </div>
  );
}

export default GanttChart;
