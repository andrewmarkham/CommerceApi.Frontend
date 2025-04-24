import React, { FC } from "react";
import CloseButton, { CloseButtonProps } from "../CloseButton";

import "../../../../../dist/components.css";
import { StoryContainer } from "../../../storybook/storyContainer";

const Example: FC<CloseButtonProps> = ({
  title = "Close",
  onClick = () => {},
}) => {
  return (
    <StoryContainer>
      <CloseButton
        title={title}
        onClick={onClick}
      />
    </StoryContainer>
  );
};

export default Example;