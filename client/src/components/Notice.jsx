

const Notice = ({ error }) => {
  return (
    <span className="notice">
        {error.map((item) => {
         return <span key={item} className="notice-detail">
          <span className="material-symbols-outlined icon">warning</span>
          <span className="notice-text">{item}</span>
        </span>
        })}
    </span>
  )
}

export default Notice