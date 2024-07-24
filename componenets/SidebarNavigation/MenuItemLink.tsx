import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { theme } from "@/styles/theme";
// import { color, space } from "@styles/theme";
// import { colors} from "../../styles/theme";

type MenuItemProps = {
  text: string;
  href?: string;
  iconSrc: string;
  isActive: boolean;
  isCollapsed: boolean;
  // onClick: () => void;
};

const ListItem = styled.li<{ isActive: boolean }>`
  height: 51px;
  display: flex;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing[1]};
  padding: 0 ${({ theme }) => theme.spacing[3]};
  background: ${({ theme, isActive }) =>
    isActive ? theme.colors.gray[700] : "transparent"};

  border-radius: 6px;
  &:first-child {
    margin-top: 0;
  }
`;
const Anchor = styled.div`
  display: flex;
  align-items: center;
  color: #f2f4f7;
  color: ${(props) => props.theme.colors.gray[100]};
  text-decoration: none;
`;
const Icon = styled.img`
  margin-right: ${({ theme }) => theme.spacing[3]};
`;

export function MenuItemLink({
  text,
  href,
  iconSrc,
  isActive,
  isCollapsed,
}: MenuItemProps) {
  return (
    <ListItem isActive={isActive}>
      <div>
        <Anchor>
          <Icon src={iconSrc} alt={`${text} icon`} />
          {!isCollapsed && text}
        </Anchor>
      </div>
    </ListItem>
  );
}
