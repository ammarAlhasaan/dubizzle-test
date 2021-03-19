import React, {FunctionComponent} from 'react'; // importing FunctionComponent

type ForkUserDetailsProps = {
    user: any;
}

const ForkUserDetails: FunctionComponent<ForkUserDetailsProps> = ({user}) => {


    return (<div className="uk-grid-medium uk-flex-middle" uk-grid="true">
        <div className="uk-width-auto">
            <img className="uk-comment-avatar" src={user.avatar_url}
                 width="80"
                 height="80" alt=""/>
        </div>
        <div className="uk-width-expand">
            <h4 className="uk-comment-title uk-margin-remove">
                <a className="uk-link-reset" href="#">{user.name}</a></h4>
            <ul className="uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top">
                <li><a href="#"><b>Location: </b> {user.location}</a></li>
                <li><a href="#"><b>Public Gits: </b>{user.public_gists} </a></li>
            </ul>
        </div>
    </div>)
}

export default ForkUserDetails
