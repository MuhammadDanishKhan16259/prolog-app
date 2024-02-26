import Link from "next/link";
import React from "react";
import styled from "styled-components";
type MenuItemProps = {
  text: string;
  href?: string;
  iconSrc: string;
  // onClick: () => void;
};

const ListItem = styled.li`
  padding: 8px 12px;
`;
// const Anchor = styled.a`
//   display: flex;
//   align-items: center;
//   color: #f2f4f7;
//   text-decoration: none;
// `;

const Anchor = styled.div`
  display: flex;
  align-items: center;
  color: #f2f4f7;
  text-decoration: none;
`;
const Icon = styled.img`
  margin-right: 12px;
`;

export function MenuItemLink({ text, href, iconSrc }: MenuItemProps) {
  return (
    <ListItem>
      {/* Use a div instead of a Link */}
      <div>
        <Anchor>
          <Icon src={iconSrc} alt={`${text} icon`} />
          {text}
        </Anchor>
      </div>
    </ListItem>
  );
}
// export function MenuItem({ text, href, iconSrc }: MenuItemProps) {
//   return (
//     <ListItem>
//       <Link href={href} passHref>
//         <Anchor>
//           <Icon src={iconSrc} alt={`${text} icon`} />
//           {text}
//         </Anchor>
//       </Link>
//     </ListItem>
//   );
// }
{
  /* <Icon src={iconSrc} alt={`${text} icon`} />
{text} */
}
// <li href={index}>
// <Link href={href}>{text}</Link>
// </li>
