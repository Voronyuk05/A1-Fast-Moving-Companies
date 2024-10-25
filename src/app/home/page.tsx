
import HomeLayout from './home';

interface PageProps {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
  children: React.ReactNode
}

export default function Home({children}: PageProps) {
  
  return (
    <>
      <HomeLayout /> 
      
      {children}
    </>
  );
}
