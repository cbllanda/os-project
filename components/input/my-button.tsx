import { Button } from "@nextui-org/button";

interface MyButtonProps {
  isPending: boolean;
}

function MyButton({ isPending }: MyButtonProps) {
  return (
    <Button
      type="submit"
      color="primary"
      className="mt-2 h-[2.75rem] lg:h-[2.5rem]"
      isDisabled={isPending}
    >
      Calculate
    </Button>

    
  );
}

export default MyButton;
