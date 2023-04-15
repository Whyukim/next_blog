import path from "path";
import { promises as fs } from "fs";
import { IPosts } from "./@types";

export async function getPosts(
  search?: string
): Promise<[IPosts[], IPosts[]] | IPosts[]> {
  const filePath = path.join(process.cwd(), "data", "posts.json");
  const data = await fs.readFile(filePath, "utf-8");

  if (search === "main") {
    let searchData = JSON.parse(data);
    return [searchData.filter((item: any) => !!item.main), JSON.parse(data)];
  }

  return JSON.parse(data);
}

export async function getCategory(): Promise<string[]> {
  const filePath = path.join(process.cwd(), "data", "posts.json");
  const json = await fs.readFile(filePath, "utf-8");
  let data = JSON.parse(json);
  const uniqueCategories: string[] = [
    ...new Set<string>(data.flatMap((item: any) => item.category)),
  ];

  return ["All Posts", ...uniqueCategories];
}

export async function getPost(id: string): Promise<string> {
  const filePath = path.join(process.cwd(), "data/posts", `${id}.md`);
  const data = await fs.readFile(filePath, "utf-8");

  return data;
}

// export async function getProduct(id: string) {
//   const products = await getProducts();
//   return products.find((product) => product.id === id);
// }
