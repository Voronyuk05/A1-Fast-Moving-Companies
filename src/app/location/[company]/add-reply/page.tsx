import AddReply from "./addReply";

export default function CompanyPage({children}: {children: React.ReactNode}) {
    return (
      <>
        <AddReply />
        {children}
      </>
    );
  }
  