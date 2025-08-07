import ChakraProvider from './_providers/chakra-provider';
import ReactQueryProvider from './_providers/react-query-provider';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ChakraProvider>
          <ReactQueryProvider>{children}</ReactQueryProvider>
        </ChakraProvider>
      </body>
    </html>
  );
}
