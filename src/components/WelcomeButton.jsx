import { DrawerTrigger } from "./ui/drawer";

function WelcomeButton({ children, variant, rounded = "rounded-full" }) {
  return (
    <DrawerTrigger
      className={`${rounded} ${variant} py-4 w-full font-medium text-xl`}
    >
      {children}
    </DrawerTrigger>
  );
}

export default WelcomeButton;
