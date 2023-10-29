import ScaleLoader from "react-spinners/ScaleLoader";

const Loader = () => {
  return (
    <div className='dashboard-loader'>
        <ScaleLoader
        color={'#fff'}
        size={7}
      />
      <p className="wait-text">Please wait a moment...</p>
    </div>
  )
}

export default Loader