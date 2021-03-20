import React, {useState} from 'react';
import SearchBox from "./components/SearchBox";
import NavBar from "./components/NavBar";
import GitItem from "./components/GitItem";
import GitDetails from "./components/GitDetails";
import {connect} from "react-redux";
import {getGits} from "./redux/Git/git.actions";

function App(props: any) {
    const {gits} = props
    const [term, setTerm] = useState('')
    const [gitId, setGitId] = useState('')
    const renderResult = gits.map((result: any) => <GitItem key={result.id} item={result} setGitId={setGitId}/>)
    let message = null
    if (!term) {
        message = 'This is a Public Git list, Click on Search Button and Enter Username to Search Ex: oifland'
    } else if (!renderResult.length && term) {
        message = 'No results found'
    }
    return (
        <div className="uk-container">
            <NavBar title="Dubizzle Test">
                <SearchBox term={term} setTerm={setTerm}/>
            </NavBar>
            {message && <div className="uk-placeholder uk-text-center">
                {message}
            </div>}
            {renderResult.length > 0 && <div className="uk-flex" uk-grid="true">
              <div className="uk-width-1-3@m">
                <ul className="uk-list uk-list-striped">
                    {renderResult}
                </ul>
              </div>
              <div className="uk-width-2-3@m ">
                <GitDetails gitId={gitId}/>
              </div>
            </div>
            }
        </div>
    );
}

const mapStateToProps = (state: any) => {
    return {...state.git}
}
export default connect(mapStateToProps, {getGits})(App)
