import React, {FunctionComponent, useEffect, useState} from 'react';
import ForkUserDetails from "./ForkUserDetails";
import GitApi from "../apis/git.api";

type GitDetailsProps = {
    gitId: any;
}

const GitDetails: FunctionComponent<GitDetailsProps> = ({gitId}) => {
    const [file, setFile] = useState({
        filename: '',
        type: '',
        language: '',
        raw_url: '',
        size: ''
    })
    const init: any = {}
    const [selectedGitData, setSelectedGitData] = useState(init)

    useEffect(() => {
        const search = async () => {
            const {data} = await GitApi.get(`/gists/${gitId}`)
            setSelectedGitData(data)
        }
        search();
    }, [gitId])
    useEffect(() => {
        if (selectedGitData?.files) {
            const fileData: any = selectedGitData.files[Object.keys(selectedGitData.files)[0]]
            setFile(fileData)
        }
    }, [selectedGitData])
    const {forks} = selectedGitData
    return (<div className="uk-card uk-card-default uk-card-body">
        <h3 className="uk-card-title">{file.filename}</h3>
        <p>{selectedGitData.description}</p>
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

export default GitDetails
