import FXModal from "./FXModal";
import { Button } from "@heroui/button";
import Link from "next/link";

interface IProps {
  id: string;
}

export default function AuthenticationModal({ id }: IProps) {
  return (
    <FXModal
      buttonText="Claim Item"
      title="Authentication"
      buttonClassName="flex-1"
    >
      <div>
        You are not currently logged in. please log in first to continue.
      </div>
      <div className="mb-2 mt-4 flex gap-2">
        <Link className="flex-1" href={`/login?redirect=found-items/${id}`}>
          <Button className="w-full">Login</Button>
        </Link>
        <Link className="flex-1" href={`/register?redirect=found-items/${id}`}>
          <Button className="w-full">Register</Button>
        </Link>
      </div>
    </FXModal>
  );
}
