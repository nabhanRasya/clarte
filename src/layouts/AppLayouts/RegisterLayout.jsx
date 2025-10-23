import WelcomeButton from "@/components/WelcomeButton";
import RegisterButton from "@/components/RegisterButtom";
import LogoColor from "@/assets/logo-color.svg";
import { AnimatedGroup } from "@/components/motion-primitives/animated-group";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";

function RegisterLayout({ welcomeTitle, title, description, variant }) {
  return (
    <Drawer>
      <WelcomeButton variant={`${variant}`}>{welcomeTitle}</WelcomeButton>
      <DrawerContent className="max-w-full">
        <AnimatedGroup
          className="flex flex-col w-full"
          variants={{
            container: {
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.05,
                },
              },
            },
            item: {
              hidden: { opacity: 0, y: 40, filter: "blur(4px)" },
              visible: {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                transition: {
                  duration: 1.2,
                  type: "spring",
                  bounce: 0.3,
                },
              },
            },
          }}
        >
          <DrawerHeader className="space-y-2">
            <DrawerTitle className="w-fit">
              <div className="p-4 bg-gray-200 rounded-full">
                <img src={LogoColor} alt="Logo" className="w-10 h-10" />
              </div>
            </DrawerTitle>
            <DrawerTitle className="mt-2 text-3xl text-start font-bold text-foreground">
              {title}
              {/* Get Started */}
            </DrawerTitle>
            <DrawerDescription className="text-md">
              {description}
              {/* Create your account to start your skin analysis journey. */}
            </DrawerDescription>
          </DrawerHeader>
          <div className="flex flex-col w-full gap-3 mb-12 mt-4 p-3">
            <div className="w-full">
              <RegisterButton rounded="rounded-xl">
                Continue with Email
              </RegisterButton>
            </div>
            <div className="w-full">
              <RegisterButton
                variant="bg-secondary text-secondary-foreground hover:bg-secondary/80"
                rounded="rounded-xl"
              >
                Continue with Phone
              </RegisterButton>
            </div>
            <div className="flex w-full gap-3">
              <div className="w-full">
                <RegisterButton
                  className="w-full"
                  variant="bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  rounded="rounded-xl"
                  size="icon"
                >
                  <i className="bi bi-google"></i>
                </RegisterButton>
              </div>
              <div className="w-full">
                <RegisterButton
                  className="w-full"
                  variant="bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  rounded="rounded-xl"
                  size="icon"
                >
                  <i className="bi bi-apple text-2xl"></i>
                </RegisterButton>
              </div>
            </div>
          </div>
        </AnimatedGroup>
      </DrawerContent>
    </Drawer>
  );
}

export default RegisterLayout;
