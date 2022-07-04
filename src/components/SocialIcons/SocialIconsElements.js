import styled from 'styled-components'

export const SocialIconsContainer = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: center;
 margin-top: ${({ component }) => (component === 'SideBar' ? '1.2rem' : '')};
 margin-left: ${({ component }) => (component === 'NavBar' ? '20px' : '')};
 width: ${({ component }) => (component === 'Footer' ? '240px' : '120px')};
 justify-self: ${({ component }) => (component === 'SideBar' ? 'center' : '')};
`
export const SocialIconLink = styled.a`
 color: #fff;
 font-size: 24px;
`
export const Icon = ({ iconSocial }) => {
 const TheIcon = iconSocial
 return <TheIcon />
}
