
import './Number.scss';
import { useEffect, useState } from 'react';

const Number: React.FC = () => {
  const [numbers, setNumbers] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch('https://quiz-game-dev.cyclic.app/get-key');
      const data = await response.json();
      setNumbers(data.value);
    } catch (error) {
      console.error('Ошибка при получении данных:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="number-paragraph">
      {isLoading ? <div>Loading...</div> : numbers}
    </div>
  );
};

export default Number;