'use client';

import { ChevronDown } from 'lucide-react';

import { toastMessage } from '@/shared/utils/ui';

import PrimaryButton from '@/components/buttons/PrimaryButton';

import useOrder from '@/features/order/hooks/useOrder';
import CurrencyChoiceButton from '@/features/order/components/CurrencyChoiceButton';
import OrderTypeSelector from '@/features/order/components/OrderTypeSelector';
import OrderInput from '@/features/order/components/OrderInput';
import CalculatedAmountCard from '@/features/order/components/CalculatedAmountCard';
import AppliedExchangeRateRow from '@/features/order/components/AppliedExchangeRateRow';

const OrderSection = () => {
  const { mutate: order, isPending } = useOrder({
    onSuccess: () => toastMessage('환전되었습니다.'),
  });

  return (
    <section className="flex min-w-157 flex-1 flex-col gap-8 rounded-xl border border-gray-300 bg-gray-50 px-8 py-6">
      <CurrencyChoiceButton />

      <div className="flex flex-col gap-8">
        <OrderTypeSelector />

        <div className="flex flex-col gap-4">
          <OrderInput label="매수 금액" name="amount" placeholder="0" />

          <div className="flex items-center justify-center">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-300">
              <ChevronDown className="text-white" size={28} />
            </span>
          </div>
        </div>

        <CalculatedAmountCard />
      </div>

      <div className="mt-auto flex flex-col items-center justify-between gap-8 border-t border-gray-300 pt-8">
        <AppliedExchangeRateRow />

        <PrimaryButton
          label="환전하기"
          type="button"
          disabled={isPending}
          onClick={() => order()}
        />
      </div>
    </section>
  );
};

export default OrderSection;
