import { fcfs } from "@/components/algo/fcfs";
import { sjf } from "@/components/algo/sjf";
import { srtf } from "@/components/algo/srtf";
import { rr } from "@/components/algo/rr";
import { npp } from "@/components/algo/npp";
import { AlgoType } from "@/components/input/select-algo";

export const solve = (
  algo: AlgoType,
  arrivalTime: number[],
  burstTime: number[],
  timeQuantum?: number,
  priorities?: number[]
) => {
  switch (algo) {
    case "FCFS":
      return fcfs(burstTime, arrivalTime);
    case "SJF":
      return sjf(burstTime, arrivalTime);
    case "SRTF":
      return srtf(burstTime, arrivalTime);
    case "RR":
      if (timeQuantum) {
        return rr(burstTime, arrivalTime, timeQuantum);
      }
    case "NPP":
      if (priorities) {
        return npp(arrivalTime, burstTime, priorities);
      }
    default:
      break;
  }
};
