interface TypeContainerCards {
  children: React.ReactNode;
}
export function ContainerCards({ children }: TypeContainerCards) {
  return (
    <div className="md:space-x-5 my-20 gap-x-5 justify-center flex flex-wrap items-center mx-auto">
      {children}
    </div>
  );
}
