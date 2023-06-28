import './Number.scss'


const Numbers = () => {
  const numbers = [1, 2, 3]
  return (
    <div className="number-paragraph">
      <p>
        {numbers.map((number, index) => (
          <span key={index}>{number}</span>
        ))}
      </p>
    </div>

  )
}

export default Numbers