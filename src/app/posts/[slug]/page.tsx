interface IpostsDetail {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

function postsDetail({ params, searchParams }: IpostsDetail) {
  console.log(123, params, searchParams);
  return <p>Post1231:</p>;
}

export default postsDetail;
