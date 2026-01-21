import WelcomeLayout from "@/layouts/WelcomeLayout";
import AuthLayout from "@/layouts/AuthLayout";
import { useAuth0 } from "@auth0/auth0-react";

function WelcomePage() {
  const { isAuthenticated } = useAuth0();

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }
  return (
    <WelcomeLayout>
      <AuthLayout />
    </WelcomeLayout>
  );
}

export default WelcomePage;
