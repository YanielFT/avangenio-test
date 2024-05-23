import { TopMenu } from "@/components";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <TopMenu />
      <div className="w-full">
        <div className="mx-auto container pt-14 px-2 sm:px-10">{children}</div>
      </div>
    </>
  );
}
