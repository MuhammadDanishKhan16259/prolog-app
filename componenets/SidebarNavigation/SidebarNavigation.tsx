import styled, { css } from "styled-components";
import { MenuItemLink } from "./MenuItemLink";
import { MenuItemButton } from "./MenuItemButton";
import { Routes } from "../../config/routes";
import { useRouter } from "next/router";
import common from "mocha/lib/interfaces/common";
import { useContext, useState } from "react";
import { NavigationContext } from "../../contexts/Navigation";
import { Button } from "../Button";
const menuItems = [
  {
    text: "Projects",
    iconSrc: "/icons/projects.svg",
    href: Routes.projects,
  },
  {
    text: "Issues",
    iconSrc: "/icons/issues.svg",
    href: Routes.issues,
  },

  {
    text: "Alerts",
    iconSrc: "/icons/alert.svg",
    href: Routes.alerts,
  },
  {
    text: "Users",
    iconSrc: "/icons/users.svg",
    href: Routes.users,
  },
  {
    text: "Settings",
    iconSrc: "/icons/settings.svg",
    href: Routes.settings,
  },
];
const HEADER_HEIGHT = "64px";
const Container = styled.div<{ isCollapsed: boolean }>`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  ${(props) =>
    props.isCollapsed &&
    css`
      /* ${Header} {
        width: 50px;
      }
      ${Nav} {
        width: 50px;
      } */
      width: 83px;

      ${Logo} {
        width: 23px;
    `};
  @media (min-width: 768px) {
    width: 280px;
  }
`;
const Header = styled.header`
  /* width: calc(100% - 2 * ${({ theme }) => theme.spacing[4]}); */
  /* width: 100%; */
  width: calc(100% - 2 * ${({ theme }) => theme.spacing[4]});
  height: ${HEADER_HEIGHT};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${({ theme }) => theme.spacing[4]};
  background: ${({ theme }) => theme.colors.gray[900]};
  position: relative;
  z-index: 1080;

  @media (min-width: 768px) {
    height: unset;
    width: 248px;
    padding: ${({ theme }) =>
      `${theme.spacing[8]} ${theme.spacing[4]} ${theme.spacing[6]}`};
  }
`;
const Logo = styled.img<{ isCollapsed: boolean }>`
  width: 118px;
  @media (min-width: 768px) {
    margin: 0 ${({ theme }) => `${theme.spacing[3]} `};
  }
`;
const MenuButton = styled(Button)`
  @media (min-width: 768px) {
    display: none;
  }
`;

const MenuIcon = styled.img`
  display: block;
`;
const MenuOverlay = styled.nav<{ isMobileMenuOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.gray[700]};
  z-index: 999;
  opacity: ${({ isMobileMenuOpen }) => (isMobileMenuOpen ? "60%" : "0%")};
  transform: translateX(
    ${({ isMobileMenuOpen }) => (isMobileMenuOpen ? "0%" : "100%")}
  );
  transition:
    opacity 300ms,
    transform 0s
      ${({ isMobileMenuOpen }) => (isMobileMenuOpen ? "0s" : "300ms")};
  @media (min-width: 768px) {
    display: none;
  }
`;

const Nav = styled.nav<{ isMobileMenuOpen: boolean }>`
  /* width: calc(100% - ${({ theme }) => theme.spacing[8]}); */
  width: 312px;
  /* height: calc(100vh - ${HEADER_HEIGHT} - ${({ theme }) =>
    theme.spacing[8]}); */
  padding: ${({ theme }) => `0 ${theme.spacing[2]} ${theme.spacing[8]}`};
  flex: 1;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.gray[900]};
  position: relative;
  z-index: 1080;
  transform: ${({ isMobileMenuOpen }) =>
    isMobileMenuOpen ? " translateX(0)" : " translateX(-100%)"};
  transition: transform 300ms;
  @media (min-width: 768px) {
    width: calc(100% - ${({ theme }) => theme.spacing[8]});
    padding: ${({ theme }) => `0 ${theme.spacing[4]} ${theme.spacing[8]}`};
    transform: none;
  }
`;
const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const LinkList = styled(List)`
  flex: 1;
`;
export function SidebarNavigation() {
  const router = useRouter();
  const { isSidebarCollapsed, toggleSidebar } = useContext(NavigationContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <Container isCollapsed={isSidebarCollapsed}>
      <Header>
        <Logo
          src={
            isSidebarCollapsed
              ? "/icons/logo-small.svg"
              : "/icons/logo-large.svg"
          }
          isCollapsed={isSidebarCollapsed}
          alt="logo"
        />
        <MenuButton onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <MenuIcon
            src={isMobileMenuOpen ? "/icons/close.svg" : "/icons/menu.svg"}
            alt="open menu"
          />
        </MenuButton>
      </Header>
      <MenuOverlay isMobileMenuOpen={isMobileMenuOpen} />
      <Nav isMobileMenuOpen={isMobileMenuOpen}>
        <LinkList>
          {menuItems.map((menuItem, index) => (
            <MenuItemLink
              key={index}
              {...menuItem}
              isCollapsed={isSidebarCollapsed}
              isActive={router.pathname === menuItem.href}
            />
          ))}
        </LinkList>
        <List>
          <MenuItemButton
            text="Support"
            iconSrc="/icons/support.svg"
            isCollapsed={isSidebarCollapsed}
            onClick={() => alert("Support")}
          />
          <MenuItemButton
            text="Collapse"
            iconSrc="/icons/arrow-left.svg"
            isCollapsed={isSidebarCollapsed}
            onClick={() => toggleSidebar()}
          />
        </List>
      </Nav>
    </Container>
  );
}
