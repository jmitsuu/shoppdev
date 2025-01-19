interface TypeContainer {
  children: React.ReactNode;
}
export function Container({ children }: TypeContainer) {
  return (
    <section className="min-h-full w-full mx-auto container my-40">
      {children}
    </section>
  );
}
