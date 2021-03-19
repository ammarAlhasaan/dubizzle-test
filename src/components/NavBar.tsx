import React, {FunctionComponent} from 'react'; // importing FunctionComponent

type NavBarProps = {
    title: string,
}

const NavBar: FunctionComponent<NavBarProps> = ({title, children}) => <nav
    className="uk-navbar-container uk-margin" uk-navbar="true">
    <div className="uk-navbar-left">

        <a className="uk-navbar-item uk-logo" href="#">{title}</a>

    </div>
    <div className="uk-navbar-right">
        {children}
    </div>
</nav>

export default NavBar
