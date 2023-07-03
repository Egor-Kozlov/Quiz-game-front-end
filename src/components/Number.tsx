
import './Number.scss';
import { useEffect, useState } from 'react';



const Number: React.FC = () => {
  const [numbers, setNumbers] = useState<string>('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://quiz-game-dev.cyclic.app/get-key');
      const data = await response.json();
      setNumbers(data.numbers);
    } catch (error) {
      console.error('Ошибка при получении данных:', error);
    }
  };

  return (
    <div className="number-paragraph">
      {numbers}
    </div>
  );
};

export default Number;