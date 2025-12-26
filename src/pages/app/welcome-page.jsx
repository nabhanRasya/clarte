import WelcomeLayout from "@/layouts/WelcomeLayout";
import AuthLayout from "@/layouts/AuthLayout";

function WelcomePage() {
  return (
    <WelcomeLayout>
      <AuthLayout />
    </WelcomeLayout>
  );
}

export default WelcomePage;
