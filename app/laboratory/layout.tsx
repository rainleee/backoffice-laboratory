// import { ApolloWrapper } from '@/core/lib/apollo-provider';
import GNB from "./components/gnb";

export default function LaboratoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        {/* <ApolloWrapper> */}
        <GNB>{children}</GNB>
        {/* </ApolloWrapper> */}
      </body>
    </html>
  );
}
