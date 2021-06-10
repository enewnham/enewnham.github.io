import React, { FC } from "react";
import { css } from "@emotion/react";
import { StyledAnchor } from ".";

export const TitleAnchor: FC<{ href: string }> = ({ href, children }) => (
  <p>
    <StyledAnchor
      css={css`
        margin-bottom: 0;
        font-weight: 600;
        letter-spacing: 1.2px;
      `}
      href={href}
    >
      {children}
    </StyledAnchor>
  </p>
);
