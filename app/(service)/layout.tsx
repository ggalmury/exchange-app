import { ReactNode } from 'react';

import Header from '@/components/layouts/Header';

interface ServiceLayoutProps {
  children: ReactNode;
}

const ServiceLayout = ({ children }: Readonly<ServiceLayoutProps>) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex flex-1 justify-center">
        <div className="flex w-full max-w-360 flex-col p-10">{children}</div>
      </main>
    </div>
  );
};

export default ServiceLayout;
