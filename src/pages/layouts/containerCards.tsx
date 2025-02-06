interface TypeContainerCards {
  children: React.ReactNode;
  styleDiv?: string;
}
export function ContainerCards({ children, styleDiv }: TypeContainerCards) {
  return (
    <div className="w-full flex  justify-center items-center mt-20 ">
      <div className={` ${styleDiv} gap-5`}>{children}</div>
    </div>
  );
}
