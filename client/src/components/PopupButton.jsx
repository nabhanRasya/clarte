import { Button } from "@/components/ui/button";

function PopupButton({
  children,
  classVariant = "bg-primary text-primary-foreground hover:bg-primary/90",
  onClick,
}) {
  return (
    <Button
      onClick={onClick}
      className={`rounded-xl ${classVariant} py-7 w-full font-medium text-lg`}
    >
      {children}
    </Button>
  );
}

export default PopupButton;
