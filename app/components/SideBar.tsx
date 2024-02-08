import { useNavigation } from "@remix-run/react";
import { useEffect, useRef } from "react";
import { WeddingLink } from "./WeddingLink";
import { Menu } from "./icons/Menu";
import { IconButton } from "./IconButton";
import type { LinkType } from "~/types/link";

export const SideBar = ({ links }: { links: LinkType[] }) => {
  const navigation = useNavigation();
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    if (navigation.state === "loading") {
      dialogRef.current?.close();
    }
  }, [navigation.state]);

  return (
    <>
      <IconButton
        onClick={() => dialogRef.current?.showModal()}
        type="button"
        aria-label="Åpne sidemeny"
        className="md:hidden absolute left-0"
      >
        <Menu />
      </IconButton>

      
      
      <dialog
        ref={dialogRef}
        className={`fixed top-0 left-0 w-40 h-screen m-0 p-0 max-h-full backdrop:bg-gray-300 backdrop:opacity-50`}
        aria-label="Sidebar"
      >
        <div className={`h-full px-3 py-4 overflow-y-auto bg-gray-50`}>
          <ul className="space-y-2">
            {links.map((link) => {
              return (
                <li key={link.to}>
                  <WeddingLink link={link} />
                </li>
              );
            })}
          </ul>
        </div>
      </dialog>
    </>
  );
};
