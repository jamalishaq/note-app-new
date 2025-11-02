export default function AuthLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <section className={`bg-neutral-100 h-full flex justify-center items-center border dark:bg-neutral-700`}>{children}</section>
    );
  }