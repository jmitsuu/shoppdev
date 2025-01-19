type TypeText = {
  title: string;
  subTitle: string;
  styleTitle?: string;
  styleSubtitle?: string;
};
export function Title({
  title,
  subTitle,
  styleTitle,
  styleSubtitle,
}: TypeText) {
  return (
    <div className={`w-full flex flex-col justify-center items-center`}>
      <h1 className={`font-bold text-6xl ${styleTitle}`}>{title}</h1>
      <h3 className={`text-gray-600 text-xl ${styleSubtitle}`}>{subTitle}</h3>
    </div>
  );
}
