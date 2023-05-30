import { useNavigation } from "@remix-run/react";
import { useEffect, useRef } from "react";
import { WeddingLink } from "./WeddingLink";
import { links } from "./links";
import { Menu } from "./icons/Menu";
import { IconButton } from "./IconButton";

export const SideBar = () => {
  const navigation = useNavigation();
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    if (navigation.state === "loading") {
      dialogRef.current?.close();
    }
  }, [navigation.state]);

  return (
    <div className="w-full">
      <IconButton
        onClick={() => dialogRef.current?.showModal()}
        type="button"
        aria-label="Åpne sidemeny"
        className="md:hidden"
      >
        <Menu />
      </IconButton>

      <dialog
        ref={dialogRef}
        className={`fixed top-0 left-0 w-40 h-screen m-0 p-0 max-h-full backdrop:bg-gray-300 backdrop:opacity-50`}
        onClick={(e) => {
          if (!dialogRef.current) return;
          const dialogDimensions = dialogRef.current.getBoundingClientRect();
          if (
            e.clientX < dialogDimensions.left ||
            e.clientX > dialogDimensions.right ||
            e.clientY < dialogDimensions.top ||
            e.clientY > dialogDimensions.bottom
          ) {
            dialogRef.current.close();
          }
        }}
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
    </div>
  );
};
