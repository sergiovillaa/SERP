import { Outlet } from 'react-router-dom';

export function AuthLayout() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-surface">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[6%] top-[8%] h-[32rem] w-[32rem] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-[5%] right-[4%] h-[24rem] w-[24rem] rounded-full bg-secondary/10 blur-3xl" />
      </div>
      <div className="relative z-10">
        <Outlet />
      </div>
    </div>
  );
}
