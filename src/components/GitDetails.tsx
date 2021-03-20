import React, {FunctionComponent, useEffect, useState} from 'react'; // importing FunctionComponent
import ForkUserDetails from "./ForkUserDetails";
import {connect} from "react-redux";
import {selectGit} from "../redux/Git/git.actions";

type GitDetailsProps = {
    gitId: any;
    selectGit?: any;
    selectedGit?: any
}

const GitDetails: FunctionComponent<GitDetailsProps> = ({gitId, selectGit, selectedGit}) => {

    const [file, setFile] = useState({
        filename: '',
        type: '',
        language: '',
        raw_url: '',
        size: ''
    })
    useEffect(() => {
        const getGit = async () => selectGit(gitId)
        if (gitId)
            getGit();
    }, [gitId])

    useEffect(() => {
        if (selectedGit?.files) {
            const fileData: any = selectedGit.files[Object.keys(selectedGit.files)[0]]
            setFile(fileData)
        }
    }, [selectedGit])

    const {forks} = selectedGit
    if (!gitId) {
        return (
            <div className="uk-placeholder uk-text-center">
                Select Item to See the Details
            </div>
        )
    }
    return (<div className="uk-card uk-card-default uk-card-body">
        <h3 className="uk-card-title">{file.filename}</h3>
        <p>{selectedGit?.description}</p>
        <h4>Language: </h4>
        <p><span className="uk-badge">{file.language}</span></p>
        {forks?.length > 0 &&
        <>
          <h4>Forks:</h4>
            {forks?.slice(0, 3).map((forkUser: any) => {
                return <ForkUserDetails user={forkUser.user}/>
            })}
        </>
        }
    </div>)
}


const mapStateToProps = (state: any) => {
    return {...state.git}
}
export default connect(mapStateToProps, {
    selectGit
})(GitDetails);
