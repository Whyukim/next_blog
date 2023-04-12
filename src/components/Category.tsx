import { MouseEvent } from "react";

interface ICategory {
  categorys: string[];
  select: string;
  handleCategory: (e: MouseEvent<HTMLDivElement>) => void;
}

function Category({ categorys, select, handleCategory }: ICategory) {
  return (
    <article className="flex flex-col p-3 items-center gap-2">
      <h3 className="border-blue-400 border-b-2">Category</h3>
      {categorys.map((category, index) => (
        <div
          key={category + index}
          className={`cursor-pointer transition hover:text-sky-500 ${
            select === category ? "text-sky-500" : ""
          }`}
          onClick={handleCategory}
        >
          {category}
        </div>
      ))}
    </article>
  );
}

export default Category;
