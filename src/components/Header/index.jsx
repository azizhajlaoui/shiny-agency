import {Link} from 'react-router-dom'

function Header() {
    return (
        <nav>
            <Link to="/">Accueil</Link>
            <Link to="/survey/42">Questionnaire</Link>
            <link to="./freelance">Freelance</link>
        </nav>
    )
}
export default Header 