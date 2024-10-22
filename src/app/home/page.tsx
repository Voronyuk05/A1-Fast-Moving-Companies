import dynamic from 'next/dynamic';
const HomeLayout = dynamic(() => import('./home'))


export default function Home({children}: {children: React.ReactNode}) {
  
  return (
    <>
      <HomeLayout /> 
      
      {children}
    </>
  );
}
