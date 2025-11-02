import AppProvider from "@/contexts/AppContext";
import HeaderProvider from "@/contexts/HeaderContext";
import NoteProvider from "@/contexts/NoteContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className={`lg:grid grid-cols-[292px_1fr] grid-rows-[auto_1fr] h-full dark:bg-neutral-950 overflow-auto relative`}>
      <AppProvider>
        <NoteProvider>
          <HeaderProvider>
            {children}
          </HeaderProvider>
        </NoteProvider>
      </AppProvider>
    </section>
  );
}