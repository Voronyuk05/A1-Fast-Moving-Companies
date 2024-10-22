import ArticleLayout from "./articleLayout";


export default function Location({children}: {children: React.ReactNode}) {
  return (
    <>
      <ArticleLayout />
      {children}
    </>
  );
}
