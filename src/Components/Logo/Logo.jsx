import './logo.css';

function Logo(props) {
  return (
    <div className='logo'>
      <img src="./images/musicapp-logo.png" style={props.style} alt="logo"/>
      </div>
  )
}

export default Logo