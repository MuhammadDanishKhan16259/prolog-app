// import Link from "next/link";
import React from "react";
import styled from "styled-components";
type MenuItemProps = {
  text: string;
  // href?: string;
  iconSrc: string;
  onClick: () => void;
  isCollapsed: boolean;
};

const ListItem = styled.li`
  /* padding: 8px 12px; */

  padding: ${({ theme }) => `${theme.spacing[2]} ${theme.spacing[3]}`};
`;
const Button = styled.div`
  display: flex;
  align-items: center;
  /* color: #f2f4f7; */
  color: ${({ theme }) => theme.colors.gray[100]};
  text-decoration: none;
`;
const Icon = styled.img`
  /* margin-right: 12px; */
  margin-right: ${({ theme }) => theme.spacing[3]};
`;

export function MenuItemButton({
  text,
  onClick,
  iconSrc,
  isCollapsed,
}: MenuItemProps) {
  return (
    <ListItem>
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
