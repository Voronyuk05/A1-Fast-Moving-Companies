
import HomeLayout from './home';

interface PageProps {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

export default function Home({}: PageProps) {
  
  return (
    <>
      <HomeLayout /> 
      
    </>
  );
}
