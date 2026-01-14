import { ReactNode } from 'react';

interface ServiceLayoutProps {
  children: ReactNode;
}

const ServiceLayout = ({ children }: Readonly<ServiceLayoutProps>) => {
  return (
    <div className="flex min-h-screen flex-col">
      {/* header */}

      <main className="flex flex-1 justify-center bg-white">
        <div className="flex max-w-360 flex-col p-10">{children}</div>
      </main>
    </div>
  );
};

export default ServiceLayout;
