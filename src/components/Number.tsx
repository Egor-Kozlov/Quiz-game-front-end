import './Number.scss'


const Numbers = () => {
  const numbers = [1, 2, 3, 4, 5]
  return (
    <div className="number-paragraph">
      <p>
        {numbers.map((number, index) => (
          <span key={index}>{number}</span>
        ))}
        123
      </p>
    </div>

  )
}

export default Numbers