import { toast } from "sonner";
import { BadgeAlert, BadgeCheck, BadgeInfo, X } from "lucide-react";
import { cva } from "class-variance-authority";

import { cn, type VariantProps } from "@nextui-org/react";
import { Button } from "@nextui-org/button";
import { Card, CardBody } from "@nextui-org/card";

const toastVariants = cva("text-sm", {
  variants: {
    variant: {
      default: "text-black dark:text-white/80",
      info: "text-primary-600 dark:text-primary-500",
      success: "text-success-600 dark:text-success-500",
      error: "text-danger-600 dark:text-danger-500",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface CustomToastProps extends VariantProps<typeof toastVariants> {}

function CustomToast(title: string, { variant }: CustomToastProps) {
  const colorFormatMap: Record<string, string> = {
    default: "text-black dark:text-white/80",
    info: "text-primary",
    success: "text-success",
    error: "text-danger",
  };

  const colorFormat = variant && colorFormatMap[variant];

  const iconMap: Record<string, React.ReactNode> = {
    default: null,
    info: <BadgeInfo className="text-primary" />,
    success: <BadgeCheck className="text-success" />,
    error: <BadgeAlert className="text-danger" />,
  };

  const icon = variant && iconMap[variant];

  const isDefaultVariant = variant === "default";

  return toast.custom((t) => (
    <Card
      className="w-[min(100%, 22rem)] w-[22rem] h-full bg-default-100 dark:bg-default-900 border-zinc-600 dark:border-white/80 self-center"
      isPressable
      onPress={() => toast.dismiss(t)}
    >
      <CardBody>
        <div className="my-2">
          <div className="flex items-center gap-x-2 w-[92%]">
            {!isDefaultVariant && (
              <>
                <span className={cn(colorFormat)}>{icon}</span>
                <p className={cn(toastVariants({ variant }))}>{title}</p>
              </>
            )}
            {isDefaultVariant && (
              <p className={cn(toastVariants({ variant }))}>{title}</p>
            )}
          </div>
        </div>
        <Button
          isIconOnly
          size="sm"
          variant="light"
          className="absolute top-2 right-2"
          onPress={() => toast.dismiss(t)}
        >
          <X className={cn("!w-[1rem] !h-[1rem] text-default-600 dark:text-white ")} />
        </Button>
      </CardBody>
    </Card>
  ));
}

export default CustomToast;
