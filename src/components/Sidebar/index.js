import React from 'react'
import {
 SidebarContainer,
 Icon,
 CloseIcon,
 SidebarWrapper,
 SidebarMenu,
 SidebarLink,
} from './SidebarElements'

import SocialIcons from '../SocialIcons'
import LanguageSwitcher from '../LanguageSwitcher'

const Sidebar = ({ isOpen, toggle }) => {
 return (
  <SidebarContainer isOpen={isOpen}>
   <Icon onClick={toggle}>
    <CloseIcon />
   </Icon>
   <SidebarWrapper>
    <SidebarMenu>
     <SidebarLink to="about" onClick={toggle}>
      About
     </SidebarLink>
     <SidebarLink to="skills" onClick={toggle}>
      Skills
     </SidebarLink>
     <SidebarLink to="trainings" onClick={toggle}>
      Trainings
     </SidebarLink>
     <SidebarLink to="contact" onClick={toggle}>
      Contact
     </SidebarLink>
     <SocialIcons component="SideBar" />
     <LanguageSwitcher component="SideBar" toggle={toggle} sidebarIsOpen={isOpen}/>
    </SidebarMenu>
   </SidebarWrapper>
  </SidebarContainer>
 )
}

export default Sidebar
