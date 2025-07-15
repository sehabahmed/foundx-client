import { ReactNode } from "react";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <h2>This is admin layout.</h2>
      {children}
    </div>
  );
}
