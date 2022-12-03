import './search.css';

export default function Search(props) {
  return (
    <div className="container">
      <input type="text" name="search" placeholder="Search for your fav music" className="input" onChange={(e) => { props.searchUpdate(e)} }/>

      <a href="dasdas" className="btn">
        <i className="fas fa-search"></i>
      </a>
      </div>
        )
}
