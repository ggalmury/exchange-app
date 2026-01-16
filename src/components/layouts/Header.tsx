import LogoButton from '@/components/buttons/LogoButton';
import NavigationButton from '@/components/buttons/NavigationButton';

import LogoutButton from '@/features/auth/components/LogoutButton';

const Header = () => {
  return (
    <header className="flex h-18.75 justify-center border-b border-gray-300">
      <div className="flex h-full w-full max-w-360 items-center justify-between p-10">
        <LogoButton />

        <div className="flex gap-6">
          <div className="flex gap-2">
            <NavigationButton label="환전하기" to="/" />

            <NavigationButton label="환전내역" to="/orders" />
          </div>

          <LogoutButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
