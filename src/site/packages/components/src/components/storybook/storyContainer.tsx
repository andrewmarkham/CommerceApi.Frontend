
import { ReactNode } from 'react';

interface StoryContainerProps {
  children: ReactNode;
}

export const StoryContainer = ({ children }: StoryContainerProps) => {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          fontFamily: "Arial, sans-serif",
        }}>
        {children}
      </div>
    );
  };