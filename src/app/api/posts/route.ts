import { getPosts } from "@/services/posts";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const products = await getPosts();
  return NextResponse.json(products);
}
