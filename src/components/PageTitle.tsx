interface PageTitleProps {
  title: string;
  subTitle: string;
}

const PageTitle = ({ title, subTitle }: PageTitleProps) => {
  return (
    <div className="flex flex-col">
      <p className="text-[2.5rem] font-bold text-gray-800">{title}</p>

      <p className="text-xl text-gray-700">{subTitle}</p>
    </div>
  );
};

export default PageTitle;
