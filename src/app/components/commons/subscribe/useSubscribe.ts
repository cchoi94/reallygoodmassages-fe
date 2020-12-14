import { useState } from 'react';
import axios from 'app/requests/axiosInstance';

export const useSubscribe = ({ onSuccess }: any) => {
  const [email, setEmail] = useState<string>('');
  const [error, setError] = useState();
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setLoading] = useState<boolean>(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const bodyFormData = new FormData();
    bodyFormData.append('email', email);
    setLoading(true);
    try {
      await axios.post(
        `https://buttondown.email/api/emails/embed-subscribe/Aladar`,
        bodyFormData
      );
      if (onSuccess) {
        onSuccess(true);
      }
      setEmail('');
      setIsSuccess(true);
    } catch (err) {
      setError(err.response.data);
    } finally {
      setLoading(false);
    }
  };

  return { email, setEmail, error, isLoading, onSubmit, isSuccess };
};
