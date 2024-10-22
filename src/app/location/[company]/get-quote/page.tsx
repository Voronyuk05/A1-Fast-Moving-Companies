import GetQuotesLayout from "./getQuote";


export default function CompanyPage({children}: {children: React.ReactNode}) {
    return (
      <>
        <GetQuotesLayout />
        {children}
      </>
    );
  }
  