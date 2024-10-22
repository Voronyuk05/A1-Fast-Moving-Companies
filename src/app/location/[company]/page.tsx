
import CompanyLayout from './companyLayout';



export default function CompanyPage({children}: {children: React.ReactNode}) {
    return (
      <>
        <CompanyLayout />
        {children}
      </>
    );
  }
  