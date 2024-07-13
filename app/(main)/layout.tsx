import { NavigationSidebar } from "@/components/navigation/navigation-sidebar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full">
      <div className="hidden md:flex flex-col w-[72px] h-full z-30 fixed inset-y-0 ">
        <NavigationSidebar />
      </div>

      <main className="md:pl-[72px] h-full">{children}</main>
    </div>
  );
}
