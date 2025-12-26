import { useAuth0 } from "@auth0/auth0-react";
import PopupButton from "@/components/PopupButton";
import LogoColor from "@/assets/logo-color.svg";
import { AnimatedGroup } from "@/components/motion-primitives/animated-group";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

function PopupLayout({ welcomeTitle, title, description, classVariant }) {
  const { isLoading, error, loginWithRedirect: login } = useAuth0();

  switch (login === "Get Started") {
    case value:
      
      break;
  
    default:
      break;
  }

  return (
    <Drawer>
      <DrawerTrigger
        className={`rounded-3xl ${classVariant} py-3 w-full font-medium text-md`}
      >
        {welcomeTitle}
      </DrawerTrigger>
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
          <DrawerHeader className="pt-8">
            <DrawerTitle className="w-fit">
              <div className="p-3 bg-[#e9d8fd] rounded-full">
                <img src={LogoColor} alt="Logo" className="w-10 h-10" />
              </div>
            </DrawerTitle>
            <DrawerTitle className="mt-3 text-2xl text-start font-bold text-foreground">
              {title}
              {/* Get Started */}
            </DrawerTitle>
            <DrawerDescription className="text-md">
              {description}
              {/* Create your account to start your skin analysis journey. */}
            </DrawerDescription>
          </DrawerHeader>
          <div className="flex flex-col w-full gap-2 mb-12 p-2">
            <div className="w-full">
              <PopupButton>Continue with Email</PopupButton>
            </div>
            <div className="w-full">
              <PopupButton classVariant="bg-secondary text-secondary-foreground hover:bg-secondary/80">
                Continue with Phone
              </PopupButton>
            </div>
            <div className="flex w-full gap-2">
              <div className="w-full">
                <PopupButton
                  className="w-full"
                  classVariant="bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  size="icon"
                >
                  <i className="bi bi-google text-xl"></i>
                </PopupButton>
              </div>
              <div className="w-full">
                <PopupButton
                  className="w-full"
                  classVariant="bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  size="icon"
                >
                  <i className="bi bi-apple text-2xl"></i>
                </PopupButton>
              </div>
            </div>
          </div>
        </AnimatedGroup>
      </DrawerContent>
    </Drawer>
  );
}

export default PopupLayout;
