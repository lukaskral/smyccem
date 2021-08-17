import Container from "./container";
import cn from "classnames";
import { EXAMPLE_PATH } from "../lib/constants";
import Link from "next/link";
import { NewLineKind } from "typescript";

type Props = {
  preview?: boolean;
};

const Menu = ({ preview }: Props) => {
  return (
    <div
      className={cn("border-b", {
        "bg-accent-7 border-accent-7 text-white": preview,
        "bg-accent-1 border-accent-2": !preview,
      })}
    >
      <Container>
        <div className="py-2 text-center text-sm">
          <Link href="/">
            <a className="hover:underline">O nás</a>
          </Link>
          &nbsp;
          <Link href="/hudba">
            <a className="hover:underline">Hudba</a>
          </Link>
          &nbsp;
          <Link href="/texty">
            <a className="hover:underline">Texty</a>
          </Link>
          {/* &nbsp;
          <Link href="/kde-hrajeme">
            <a className="hover:underline">Kde hrajeme</a>
          </Link> */}
          &nbsp;
          <Link href="/kontakt">
            <a className="hover:underline">Kontakt</a>
          </Link>
          &nbsp;
          <Link href="/blog">
            <a className="hover:underline">Blog</a>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Menu;
