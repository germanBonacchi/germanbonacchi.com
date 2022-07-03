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
     href={social.href}
     target={social.target}
     aria-label={social.ariaLabel}
    >
     <Icon icon={social.icon} />
    </SocialIconLink>
   ))}
  </SocialIconsContainer>
 )
}

export default SocialIcons
