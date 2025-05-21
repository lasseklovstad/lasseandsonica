import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useNavigation } from "react-router";

import type { LinkType } from "~/types/link";

import { IconButton } from "./IconButton";
import { Menu } from "./icons/Menu";
import { WeddingLink } from "./WeddingLink";

export const SideBar = ({ links }: { links: LinkType[] }) => {
  const navigation = useNavigation();
  const { t } = useTranslation("common");
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
        aria-label={t("openNavigationMenu")}
        className="absolute left-0 md:hidden"
      >
        <Menu />
      </IconButton>

      <dialog
        ref={dialogRef}
        className={`fixed top-0 left-0 m-0 h-screen max-h-full w-40 p-0 backdrop:bg-gray-300 backdrop:opacity-50`}
        aria-label="Sidebar"
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
      >
        <div className={`h-full overflow-y-auto bg-gray-50 px-3 py-4`}>
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
