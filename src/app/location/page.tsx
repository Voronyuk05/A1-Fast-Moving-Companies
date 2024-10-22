
import LocationLayout from './location';


export default function Location({children}: {children: React.ReactNode}) {
  
  return (
    <>
      <LocationLayout />
      {children}
    </>
  );
}
