import PopupLayout from "@/layouts/PopupLayout";

function AuthLayout() {
  return (
    <div className="registerButton flex flex-col gap-2">
      <PopupLayout
        welcomeTitle="Create an account"
        classVariant="bg-primary text-primary-foreground hover:bg-primary/90"
        title="Get Started"
        description="Create your account to start your skin analysis journey."
      />
      <PopupLayout
        welcomeTitle="Already have an account?"
        classVariant="bg-secondary text-secondary-foreground hover:bg-secondary/90"
        title="Log In"
        description="Log in to access your personalized skincare routine."
      />
    </div>
  );
}

export default AuthLayout;
