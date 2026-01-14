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
import { useEffect, useState } from "react";
import { Spinner } from "@/components/ui/spinner";

function PopupLayout({ welcomeTitle, title, description, classVariant }) {
  const { error, loginWithRedirect: login } = useAuth0();
  const [status, setStatus] = useState("idle");
  const [isLoading, setIsLoading] = useState("");

  const EmailLogin = (e) => {
    setIsLoading(e.target.textContent);
    login({
      authorizationParams: {
        connection: "Username-Password-Authentication",
      },
    });
  };

  const EmailSignup = (e) => {
    setIsLoading(e.target.textContent);
    login({
      authorizationParams: {
        connection: "Username-Password-Authentication",
        screen_hint: "signup",
      },
    });
  };

  const ContinueWithGoogle = (e) => {
    setIsLoading(e.target.className.includes("google"));
    login({
      authorizationParams: {
        connection: "google-oauth2",
      },
    });
  };

  const ContinueWithMicrosoft = (e) => {
    setIsLoading(e.target.tagName === "I");
    login({
      authorizationParams: {
        connection: "windowslive",
      },
    });
  };

  useEffect(() => {
    if (error) {
      setStatus("error");
    }
  }, [error]);

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
          <div className="pt-5">
            <DrawerHeader className="flex gap-y-2">
              <DrawerTitle className="text-3xl text-start font-bold text-foreground">
                {title}
              </DrawerTitle>
              <DrawerDescription className="text-md">
                {description}
              </DrawerDescription>
            </DrawerHeader>
            {status === "idle" && (
              <div className="flex flex-col w-full gap-2 mb-12 p-2">
                <div className="w-full">
                  <PopupButton
                    onClick={title === "Log In" ? EmailLogin : EmailSignup}
                  >
                    {isLoading == "Continue With Email" ? (
                      <Spinner />
                    ) : (
                      "Continue With Email"
                    )}
                  </PopupButton>
                </div>
                <div className="flex w-full gap-2.5">
                  <div className="w-full">
                    <PopupButton
                      onClick={() => ContinueWithGoogle()}
                      className="w-full google"
                      classVariant="bg-secondary text-secondary-foreground hover:bg-secondary/80"
                      size="icon"
                    >
                      {isLoading === "google" ? (
                        <Spinner />
                      ) : (
                        <i className="bi bi-google text-xl"></i>
                      )}
                    </PopupButton>
                  </div>
                  <div className="w-full">
                    <PopupButton
                      onClick={() => ContinueWithMicrosoft()}
                      className="w-full"
                      classVariant="bg-secondary text-secondary-foreground hover:bg-secondary/80"
                      size="icon"
                    >
                      <i className="bi bi-microsoft text-xl"></i>
                    </PopupButton>
                  </div>
                </div>
              </div>
            )}

            {status === "error" && (
              <div className="flex h-[11.5rem] w-full items-center justify-center bg-gray-100">
                <p>{error.message}</p>
              </div>
            )}
          </div>
        </AnimatedGroup>
      </DrawerContent>
    </Drawer>
  );
}

export default PopupLayout;
