import { toast } from 'react-toastify';

import { getErrorMessage } from '@/shared/utils/error';

export const toastMessage = (message: string): void => {
  toast.success(message);
};

export const toastError = (error: Error): void => {
  const message = getErrorMessage(error);

  toast.error(message);
};
