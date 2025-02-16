import { Link } from "react-router";
import { routes } from "~/types/routes";
import { Typography } from "./Typography";
import type { PropsWithChildren } from "react";

export type QaAccordionId = "ceremony" | "dresscode" | "gift" | "location";

export const LinkToQa = ({
  children,
  open,
}: PropsWithChildren<{
  open: QaAccordionId;
}>) => (
  <Typography
    as={Link}
    variant="body-small"
    to={`../${routes.wedding.qa}?open=${open}`}
    className="underline"
  >
    {children}
  </Typography>
);
