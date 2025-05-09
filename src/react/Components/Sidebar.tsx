import SidebarStyle from '../Styles/Sidebar.module.css'
import UserIcon from '../../Assets/Images/Useriicon.png'
import CloseButton from '../../Assets/Images/CloseIcon.svg'
import POSIcon from '../../Assets/Images/POSIcon.svg'
import LogoutIcon from '../../Assets/Images/LogoutIcon.svg'
import ActivityIcon from '../../Assets/Images/ActivityIcon.svg'
import ChartIcon from '../../Assets/Images/ChartIcon.svg'
import InventoryIcon from '../../Assets/Images/InventoryIcon.svg'
import TeamIcon from '../../Assets/Images/TeamIcon.svg'
import SettingsIcon from '../../Assets/Images/SettingsIcon.svg'

import { TSidebar } from '../Types'

const Sidebar = ({isOpen, onClose}: TSidebar) => {
  return (
    <div className={isOpen ? SidebarStyle.sideBar : SidebarStyle.sideBarHidden}>
      <div className={SidebarStyle.header}>
        <div className={SidebarStyle.userProfile}>
          <div className={SidebarStyle.icon}>
            <img src={UserIcon} className={SidebarStyle.imgProfile} alt='User icon' />
          </div>
          <div className={SidebarStyle.userData}>
            <span className={SidebarStyle.userName}>User test</span>
            <span className={SidebarStyle.userRole}>Role</span>
          </div>
        </div>
        <button className={SidebarStyle.iconContainer} onClick={onClose}>
          <img className={SidebarStyle.iconbtn} src={CloseButton} alt='Close button' />
        </button>
      </div>
      <div className={SidebarStyle.listContainer}>
        <div className={SidebarStyle.listElementSelected}>
          <div className={SidebarStyle.listIconContainerSelected}>
            <img className={SidebarStyle.listIconSelected} src={POSIcon} alt="POS Icon" />
          </div>
          <span className={SidebarStyle.listLabelSelected}>Point of sale</span>
        </div>
        <div className={SidebarStyle.listElement}>
          <div className={SidebarStyle.listIconContainer}>
            <img className={SidebarStyle.listIcon} src={ActivityIcon} alt="Activity Icon" />
          </div>
          <span className={SidebarStyle.listLabel}>Activity</span>
        </div>
        <div className={SidebarStyle.listElement}>
          <div className={SidebarStyle.listIconContainer}>
            <img className={SidebarStyle.listIcon} src={ChartIcon} alt="Reports Icon" />
          </div>
          <span className={SidebarStyle.listLabel}>Reports</span>
        </div>
        <div className={SidebarStyle.listElement}>
          <div className={SidebarStyle.listIconContainer}>
            <img className={SidebarStyle.listIcon} src={InventoryIcon} alt="Reports Icon" />
          </div>
          <span className={SidebarStyle.listLabel}>Inventory</span>
        </div>
        <div className={SidebarStyle.listElement}>
          <div className={SidebarStyle.listIconContainer}>
            <img className={SidebarStyle.listIcon} src={TeamIcon} alt="Reports Icon" />
          </div>
          <span className={SidebarStyle.listLabel}>Teams</span>
        </div>
        <div className={SidebarStyle.listElement}>
          <div className={SidebarStyle.listIconContainer}>
            <img className={SidebarStyle.listIcon} src={SettingsIcon} alt="Reports Icon" />
          </div>
          <span className={SidebarStyle.listLabel}>Settings</span>
        </div>
      </div>
      <div className={SidebarStyle.logOutContainer}>
        <span className={SidebarStyle.logoutLabel}>Log out</span>
        <div className={SidebarStyle.logOutIcon}>
          <img className={SidebarStyle.logoutImg} src={LogoutIcon} alt='Logout icon' />
        </div>
      </div>
    </div>
  )
}

export default Sidebar