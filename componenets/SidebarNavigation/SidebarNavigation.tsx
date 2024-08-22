import styled, { css } from "styled-components";
import { MenuItemLink } from "./MenuItemLink";
import { MenuItemButton } from "./MenuItemButton";
import { Routes } from "../../config/routes";
import { useRouter } from "next/router";
import common from "mocha/lib/interfaces/common";
import { useContext, useState } from "react";
import { NavigationContext } from "../../contexts/Navigation";
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
const Container = styled.div<{ isCollapsed: boolean }>`
  ${(props) =>
    props.isCollapsed &&
    css`
      ${Header} {
        width: 50px;
      }
      ${Nav} {
        width: 50px;
      }
      ${Logo} {
        width: 23px;
    `};
`;
const Header = styled.header`
  width: 100%;
  height: 64px;
  display: flex;
  align-items: center;
  padding: 0 ${({ theme }) => theme.spacing[4]};
  background: ${({ theme }) => theme.colors.gray[900]};
  @media (min-width: 768px) {
    width: 248px;
    padding: ${({ theme }) =>
      `${theme.spacing[8]} ${theme.spacing[4]} ${theme.spacing[6]}`};
  }
`;
const Nav = styled.nav`
  width: 248px;
  height: calc(100vh - 2 * ${({ theme }) => theme.spacing[8]});
  padding: ${({ theme }) => `0 ${theme.spacing[4]} ${theme.spacing[8]}`};
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.gray[900]};
`;
const Logo = styled.img<{ isCollapsed: boolean }>`
  width: 118px;
  @media (min-width: 768px) {
    margin: 0 ${({ theme }) => `${theme.spacing[3]} `};
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
        />
      </Header>
      <Nav>
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
