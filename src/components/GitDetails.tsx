import React, {FunctionComponent, useEffect, useState} from 'react'; // importing FunctionComponent
import axios from "axios";
import ForkUserDetails from "./ForkUserDetails";

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

            const data: any = await axios.get(`https://api.github.com/gists/${gitId}`, {
                params: {}
            })
            setSelectedGitData(data.data)
        }
        search();
    }, [gitId])
    useEffect(() => {
        if (selectedGitData?.files) {
            const fileData: any = selectedGitData.files[Object.keys(selectedGitData.files)[0]]
            setFile(fileData)
        }
    }, [selectedGitData])

    return (<div className="uk-card uk-card-default uk-card-body">
        <h3 className="uk-card-title">{file.filename}</h3>
        <p>{selectedGitData.description}</p>
        <h4>Language: </h4>
        <p><span className="uk-badge">{file.language}</span></p>
        <h4>Forks:</h4>
        {selectedGitData?.forks?.slice(0, 3).map((forkUser: any) => {
            return <ForkUserDetails user={forkUser.user}/>
        })}
    </div>)
}

export default GitDetails
