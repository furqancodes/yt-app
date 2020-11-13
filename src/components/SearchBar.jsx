import React,{useState} from 'react'
const SearchBar=({onSearchSubmit})=>{
  const [term, setTerm] = useState("");
  const onFormSubmit=(e)=>{
    e.preventDefault()
    onSearchSubmit(term)
  }
  const inputChange=(e)=>{
    setTerm(e.target.value)
  }
  return (
            <div className="ui segment" style={{backgroundColor:"#303030"}}>
              <form onSubmit={onFormSubmit} className="ui form">
                <div className="field">
                  <label style={{color:"#e2e2e2",fontSize:"larger"}}>Video Search</label>
                  <input
                    type="text"
                    className="prompt"
                    value={term}
                    onChange={inputChange}
                    style={{backgroundColor:"#121212",color:"#e2e2e2",fontSize:"larger"}}
                  />
                </div>
              </form>
            </div>
         )

}
export default SearchBar
