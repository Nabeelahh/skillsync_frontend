export default function MentorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <header>
        <h1>Mentor Layout</h1>
      </header>
      <main>{children}</main>
    </div>
  );
}
