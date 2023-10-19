

const StatusItem = ({ source, value }) => {
  return (
    <div className="block">
                        <div className="passblock-des">
                            <img src={source} alt="" />
                            <span>Total passwords</span>
                        </div>
                        <h1>{value}</h1>
                    </div>
  )
}

export default StatusItem