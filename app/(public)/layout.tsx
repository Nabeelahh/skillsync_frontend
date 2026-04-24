export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <header>
        <h1>Public Layout</h1>
      </header>
      <main>{children}</main>
    </div>
  );
}
