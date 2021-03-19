import React, {FunctionComponent, useEffect, useState} from 'react'; // importing FunctionComponent
import axios from "axios";

type SearchBoxProps = {
    term: string;
    results: any[];
    setResults: any;
    setTerm: any
}

const SearchBox: FunctionComponent<SearchBoxProps> = ({term, results, setResults, setTerm}) => {
    const [value, setValue] = useState(term)
    // const [results, setResults] = useState([])
    const search = async () => {
        // /gists/public
        let url = `https://api.github.com/gists/public`

        if (value) {
            url = `https://api.github.com/users/${value}/gists`
        }
        const data: any = await axios.get(url, {
            params: {}
        })
        setResults(data.data)
    }
    useEffect(() => {
        search();
    }, [])

    useEffect(() => {
        if (term && !results.length) {
            search();
        } else {
            const timeoutId = setTimeout(() => {
                if (value) {
                    search();
                }
            }, 1000)
            return () => {
                clearTimeout(timeoutId)
            }
        }

    }, [value])


    return <div>
        <a className="uk-navbar-toggle" uk-search-icon="true" href="#"></a>
        <div className="uk-drop" uk-drop="mode: click; pos: left-center; offset: 0">
            <form className="uk-search uk-search-navbar uk-width-1-1">
                <input
                    value={value}
                    onChange={e => {
                        setValue(e.target.value)
                        setTerm(e.target.value)
                    }}
                    className="uk-search-input"
                    type="search"
                    placeholder="Enter Username Ex: oifland"
                    autoFocus={true}/>
            </form>
        </div>

    </div>
}

export default SearchBox
