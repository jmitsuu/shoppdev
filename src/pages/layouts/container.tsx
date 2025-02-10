interface TypeContainer {
  children: React.ReactNode;
}
export function Container({ children }: TypeContainer) {
  return (
    <section className="min-h-screen w-full mx-auto container my-16">
      {children}
    </section>
  );
}
