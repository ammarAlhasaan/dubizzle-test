import React, {FunctionComponent, useEffect, useState} from 'react'; // importing FunctionComponent

type GitItemProps = {
    item: any;
    setGitId: any;
}

const GitItem: FunctionComponent<GitItemProps> = ({item, setGitId}) => {
    const [file, setFile] = useState({
        filename: '',
        type: '',
        language: '',
        raw_url: '',
        size: ''
    })
    useEffect(() => {
        const fileData: any = item.files[Object.keys(item.files)[0]]
        setFile(fileData)
    }, [])

    return (<li key={item.id}>
        <a onClick={() => setGitId(item.id)} className='GitItem'>
            <b className='SmallName'>{file.filename}</b>
            {file.language && <span className="uk-badge">{file.language}</span>}
            <span uk-icon="chevron-right"></span>

        </a>
    </li>)
}

export default GitItem
