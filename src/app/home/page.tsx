
import HomeLayout from './home';


export default function Home({children}: {children: React.ReactNode}) {
  
  return (
    <>
      <HomeLayout /> 
      
      {children}
    </>
  );
}
