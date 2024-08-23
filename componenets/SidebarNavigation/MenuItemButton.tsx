// import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { Button as UnstyledButton } from "../Button";
type MenuItemProps = {
  className?: string;
  text: string;
  iconSrc: string;
  onClick: () => void;
  isCollapsed: boolean;
};

const ListItem = styled.li`
  padding: ${({ theme }) => `${theme.spacing[2]} ${theme.spacing[3]}`};
`;
const Button = styled(UnstyledButton)`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.gray[100]};
  text-decoration: none;
`;
const Icon = styled.img`
  margin-right: ${({ theme }) => theme.spacing[3]};
`;

export function MenuItemButton({
  className,
  text,
  onClick,
  iconSrc,
  isCollapsed,
}: MenuItemProps) {
  return (
    <ListItem className={className}>
      {/* Use a div instead of a Link */}
      <div>
        <Button onClick={onClick}>
          <Icon src={iconSrc} alt={`${text} icon`} />
          {!isCollapsed && text}
        </Button>
      </div>
    </ListItem>
  );
}
