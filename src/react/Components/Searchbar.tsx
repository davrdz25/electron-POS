import Style from '../Styles/Searchbar.module.css'
import SearchIcon from '../../Assets/Images/SearchIcon.svg'
import RoundedButton from './RoundedButton'

const Searchbar = () => {
    return (
        <div className={Style.searchBarMenuPanel}>
            <input className={Style.searchInput} placeholder='Search something' />
            <RoundedButton icon={SearchIcon} />
        </div>
    )
}

export default Searchbar