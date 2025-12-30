import { Button } from "@/components/ui/button";

function PopupButton({
  children,
  classVariant = "bg-primary text-primary-foreground hover:bg-primary/90",
  onClick,
  type,
}) {
  return (
    <Button
      onClick={onClick}
      type={type}
      className={`rounded-sm ${classVariant} py-7 w-full font-medium text-lg`}
    >
      {children}
    </Button>
  );
}

export default PopupButton;
