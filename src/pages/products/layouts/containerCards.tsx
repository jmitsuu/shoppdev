interface TypeContainerCards {
  children: React.ReactNode;
}
export function ContainerCards({ children }: TypeContainerCards) {
  return (
    <div className="md:grid w-full lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 my-20 gap-x-5 justify-center flex flex-wrap items-center mx-auto">
      {children}
    </div>
  );
}
