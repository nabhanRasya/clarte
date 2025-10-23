import WelcomeLayout from "@/layouts/AppLayouts/WelcomeLayout";
import RegisterLayout from "@/layouts/AppLayouts/RegisterLayout";
import Logo from "@/assets/logo.svg";
import { TextLoop } from "@/components/motion-primitives/text-loop";

function WelcomePage() {
  return (
    <WelcomeLayout>
      <div className="title mb-12 flex flex-col items-start gap-2">
        <div className="flex justify-center">
          <span className="text-5xl font-extrabold text-gray-200">clarte</span>
          <img src={Logo} alt="Logo" className="w-5 h-5" />
        </div>
        <TextLoop className="text-lg flex justify-center text-secondary font-semibold">
          <span>Analyze my skin</span>
          <span>Recommend skincare routine</span>
          <span>Track my skin progress</span>
          <span>Suggest the right product</span>
        </TextLoop>

        {/* <h1 className="text-2xl text-secondary font-bold">
          <span>Analyze my skin Lorem ipsum dolor sit. Lorem, ipsum.</span>
        </h1> */}
      </div>
      <div className="registerButton flex flex-col gap-2.5">
        <RegisterLayout
          welcomeTitle="Create an account"
          variant="bg-primary text-primary-foreground hover:bg-primary/90"
          title="Get Started"
          description="Create your account to start your skin analysis journey."
        />
        <RegisterLayout
          welcomeTitle="Already have an account?"
          variant="bg-secondary text-secondary-foreground hover:bg-secondary/90"
          title="Log In"
          description="Log in to access your personalized skincare routine."
        />
      </div>
    </WelcomeLayout>
  );
}

export default WelcomePage;
