import { Download, Loader2 } from "lucide-react";

import { Button } from "@nextui-org/button";

interface DownloadOutputProps {
  onPress: () => void;
  isDisabled?: boolean;
  isDownloading?: boolean;
}

function DownloadOutput({ onPress, isDisabled, isDownloading }: DownloadOutputProps) {
  return (
    <Button
      isIconOnly
      className="bg-transparent text-default-500 dark:text-default-600"
      onPress={onPress}
      isDisabled={isDisabled || isDownloading}
    >
      {isDownloading ? (
        <Loader2 className="!w-6 !h-6 animate-spin" />
      ) : (
        <Download />
      )}
    </Button>
  );
}

export default DownloadOutput;
