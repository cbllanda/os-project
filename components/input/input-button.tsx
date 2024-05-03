import { Button } from "@nextui-org/button";

interface InputButtonProps {
  isPending: boolean;
}

function InputButton({ isPending }: InputButtonProps) {
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

export default InputButton;
