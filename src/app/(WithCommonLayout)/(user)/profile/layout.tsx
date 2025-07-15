import { ReactNode } from "react";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <div>
      this is user profile layout
      {children}
    </div>
  );
}
