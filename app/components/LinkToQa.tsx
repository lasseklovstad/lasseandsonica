import type { PropsWithChildren } from "react";
import { href, Link } from "react-router";

import { Typography } from "./Typography";

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
    to={`${href("/wedding/qa")}?open=${open}`}
    className="underline"
  >
    {children}
  </Typography>
);
