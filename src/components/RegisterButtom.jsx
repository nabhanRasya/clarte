import { Button } from "@/components/ui/button";

function RegisterButton({
  children,
  variant = "bg-primary text-primary-foreground hover:bg-primary/90",
  rounded = "rounded-full",
}) {
  return (
    <Button className={`${rounded} ${variant} py-6 w-full font-medium text-xl`}>
      {children}
    </Button>
  );
}

export default RegisterButton;
