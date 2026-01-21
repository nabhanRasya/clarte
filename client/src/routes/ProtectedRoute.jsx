import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";
import { Spinner } from "@/components/ui/spinner";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div className="w-full min-h-screen flex justify-center items-center">
        <Spinner />
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/authentication" replace />;
  }

  return children;
};

export default ProtectedRoute;
