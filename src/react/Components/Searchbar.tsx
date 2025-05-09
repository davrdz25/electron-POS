import Style from '../Styles/Searchbar.module.css'
import SearchIcon from '../../Assets/Images/SearchIcon.svg'

const Searchbar = () => {
    return (
        <div className={Style.searchBarMenuPanel}>
            <input className={Style.searchInput} placeholder='Search something' />
            <button className={Style.buttonSearch}>
                <img src={SearchIcon} alt='Search icon' className={Style.searchIcon} />
            </button>
        </div>
    )
}

export default Searchbar