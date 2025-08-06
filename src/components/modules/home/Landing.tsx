import { Input } from "@heroui/input";

import { SearchIcon } from "../../../assets/icons";

const Landing = () => {
  return (
    <section className="h-[calc(100vh-64px)] bg-[url('/sunglass-banner.jpg')] bg-cover bg-center">
      <div className="pt-32 max-w-xl flex-1 mx-auto">
        <form className="flex-1">
          <Input
            aria-label="Search"
            className={{ inputWrapper: "bg-default-100", input: "text-sm" }}
            placeholder="Search..."
            size="lg"
            startContent={
              <SearchIcon className="pointer-events-none flex-shrink-0 text-base" />
            }
            type="text"
          />
        </form>
      </div>
    </section>
  );
};

export default Landing;
