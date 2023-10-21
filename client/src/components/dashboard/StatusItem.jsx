

const StatusItem = ({ source, value, text }) => {
  return (
    <div className="block">
                        <div className="passblock-des">
                            <img src={source} alt="" />
                            <span>{text}</span>
                        </div>
                        <h1>{value}</h1>
                    </div>
  )
}

export default StatusItem