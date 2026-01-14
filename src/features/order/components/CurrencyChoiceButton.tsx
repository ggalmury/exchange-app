'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

import useOrderStore from '@/features/order/stores/useOrderStore';
import CurrencyChoiceMenu from '@/features/order/components/CurrencyChoiceMenu';

const CurrencyChoiceButton = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const currency = useOrderStore((state) => state.currency);

  const toggleMenu = (): void => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="relative">
      <button className="flex items-center gap-2" type="button" onClick={toggleMenu}>
        <p className="text-2xl font-extrabold text-gray-800">
          {currency ? `${currency} 환전하기` : '통화를 선택해 주세요.'}
        </p>

        <ChevronDown size={28} />
      </button>

      {isMenuOpen && (
        <div className="absolute top-10 left-0">
          <CurrencyChoiceMenu onChoice={() => setIsMenuOpen(false)} />
        </div>
      )}
    </div>
  );
};

export default CurrencyChoiceButton;
