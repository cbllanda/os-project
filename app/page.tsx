"use client";

import { useState, useRef } from "react";
import domtoimage from "dom-to-image";

import { useDisclosure } from "@nextui-org/react";

import { OptionType, defaultOption } from "@/components/input/select-algo";
import Inputs from "@/components/input/index";
import Output from "@/components/output/index";
import ThemeSwitcher from "@/components/theme-switcher";
import MembersButton from "@/components/members-button";
import MembersModal from "@/components/members-modal";
import DownloadOutput from "@/components/download-output";

export default function Home() {
  const [selectedAlgo, setSelectedAlgo] = useState<OptionType>(defaultOption);
  const [arrivalTime, setArrivalTime] = useState<number[]>([]);
  const [burstTime, setBurstTime] = useState<number[]>([]);
  const [timeQuantum, setTimeQuantum] = useState<number>();
  const [priorities, setPriorities] = useState<number[]>([]);

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const cardRef = useRef<any>();
  const [isDownloading, setIsDownloading] = useState(false);

  const onPress = () => {
    setIsDownloading(true);

    const cardElement = cardRef.current;

    domtoimage
      .toBlob(cardElement)
      .then(function (blob) {
        if (blob) {
          const img = new Image();
          img.src = URL.createObjectURL(blob);

          img.onload = function () {
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");

            canvas.width = img.width * 1.2;
            canvas.height = img.height * 1.2;

            if (ctx) {
              ctx.imageSmoothingQuality = "high";
            }

            ctx?.drawImage(img, 0, 0, canvas.width, canvas.height);

            canvas.toBlob(function (scaledBlob) {
              if (scaledBlob) {
                const link = document.createElement("a");
                link.download = `${new Date().toISOString()}.png`;
                link.href = URL.createObjectURL(scaledBlob);
                link.click();
              } else {
                console.error("Failed to scale the image.");
              }
            });
          };
        } else {
          console.error("Failed to capture the card element as an image.");
        }
        setIsDownloading(false);
      })
      .catch(function (error) {
        console.error("Error:", error);
        setIsDownloading(false);
      });
  };

  return (
    <>
      <main className="flex flex-col lg:flex-row lg:mx-5 gap-6">
        <div className="flex-grow">
          <Output
            selectedAlgo={selectedAlgo}
            burstTime={burstTime}
            arrivalTime={arrivalTime}
            timeQuantum={timeQuantum}
            priorities={priorities}
            cardRef={cardRef}
          />
        </div>
        <div>
          <Inputs
            selectedAlgo={selectedAlgo}
            setSelectedAlgo={setSelectedAlgo}
            setBurstTime={setBurstTime}
            setArrivalTime={setArrivalTime}
            setTimeQuantum={setTimeQuantum}
            setPriorities={setPriorities}
          />
          <div className="flex mt-[0.8rem] justify-between px-[0.75rem] items-center">
            <DownloadOutput
              onPress={onPress}
              isDisabled={!arrivalTime.length && !burstTime.length}
              isDownloading={isDownloading}
            />
            <div className="flex gap-2">
              <MembersButton onOpen={onOpen} />
              <ThemeSwitcher />
            </div>
          </div>
        </div>
      </main>

      <MembersModal isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  );
}
