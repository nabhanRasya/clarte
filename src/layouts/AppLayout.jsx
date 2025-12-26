import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
      <main className="max-w-[810px] min-h-[100dvh] mx-auto">
        <Outlet />
      </main>
    </>
  );
}
