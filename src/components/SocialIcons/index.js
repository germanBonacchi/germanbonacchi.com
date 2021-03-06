import React from 'react'
import {
 SocialIconsContainer,
 SocialIconLink,
 Icon,
} from './SocialIconsElements'
import { socialList } from './SocialIconsData'

const SocialIcons = ({ component }) => {
 return (
  <SocialIconsContainer component={component}>
   {socialList.map((social) => (
    <SocialIconLink
     key={social.id}
     href={social.href}
     target={social.target}
     aria-label={social.ariaLabel}
    >
     <Icon iconSocial={social.icon} />
    </SocialIconLink>
   ))}
  </SocialIconsContainer>
 )
}

export default SocialIcons
