declare global {
  interface LayoutProps {
    children: React.ReactNode;
    params: Promise<{ [key: string]: string }>;
  }

  interface PageProps {
    params: Promise<{ [key: string]: string }>;
    searchParams: Promise<{ [key: string]: string | undefined }>;
  }
}

export {};
