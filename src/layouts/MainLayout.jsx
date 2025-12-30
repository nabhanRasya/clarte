import { Outlet } from "react-router-dom";
import { useNavigation } from "react-router-dom";

export default function MainLayout() {
  const navigation = useNavigation();
  return (
    <>
      <main className="max-w-[810px] min-h-[100dvh] mx-auto">
        {navigation.state === "loading" && (
          <div className="flex min-h-screen w-full items-center justify-center bg-gray-100">
            <Loader2 className="h-14 w-14 animate-spin text-primary" />
          </div>
        )}
        <Outlet />
      </main>
    </>
  );
}
