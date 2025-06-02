import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Row,
  Section,
} from "@react-email/components";
import { createInstance, type i18n } from "i18next";

import type { rsvps } from "~/database/schema";
import { resources } from "~/utils/i18n.server";

type Props = { rsvp: typeof rsvps.$inferSelect; i18next: i18n };

export const RSVPEmail = ({ rsvp, i18next: { t } }: Props) => {
  const subtitleText =
    rsvp.attending === "yes"
      ? t(`email:excitedToSeeYou${rsvp.fullNameGuest ? "_plural" : ""}`)
      : t(`email:sadYouCannotCome${rsvp.fullNameGuest ? "_plural" : ""}`);

  const tableData = [
    { key: "fullName", label: t("rsvp:fullName"), content: rsvp.fullName },
    { key: "email", label: t("rsvp:email"), content: rsvp.email },
    {
      key: "fullNameGuest",
      label: t("rsvp:fullNameGuest"),
      content: rsvp.fullNameGuest,
      hide: !rsvp.fullNameGuest,
    },
    {
      key: "attendingStatus",
      label: t("rsvp:attending"),
      content: rsvp.attending === "yes" ? t("rsvp:yes") : t("rsvp:no"),
    },
    {
      key: "foodPreferences",
      label: t("rsvp:foodPreferences"),
      content: rsvp.foodPreferences,
    },
    {
      key: "comments",
      label: t("rsvp:comments"),
      content: rsvp.comments,
    },
  ];

  return (
    <Html>
      <Head />
      <Body style={main}>
        <Preview>{subtitleText}</Preview>
        <Container>
          <Section style={logo}>
            <Img
              src={"https://lasseandsonica.com/ringer.png"}
              alt={t("email:ringsAlt")}
              height={64}
              width="64"
            />
          </Section>

          <Section style={content}>
            <Row style={{ ...boxInfos, paddingBottom: "0" }}>
              <Column>
                <Heading
                  style={{
                    fontSize: 32,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  {t("email:greeting", { name: rsvp.fullName })}
                </Heading>
                <Heading
                  as="h2"
                  style={{
                    fontSize: 26,
                    fontWeight: "medium",
                    textAlign: "center",
                  }}
                >
                  {subtitleText}
                </Heading>
                <table>
                  <tbody>
                    {tableData
                      .filter((row) => row.hide !== true)
                      .map((row) => (
                        <tr key={row.key}>
                          <td style={{ textAlign: "left", padding: 6 }}>
                            <b>{row.label}:</b>
                          </td>
                          <td style={{ textAlign: "left", padding: 6 }}>
                            {row.content}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </Column>
            </Row>
            <Row style={{ ...boxInfos, paddingTop: "8" }}>
              <Column style={buttonContainer} colSpan={2}>
                <Button style={button} href="https://lasseandsonica.com">
                  {t("email:goToWebsite")}
                </Button>
              </Column>
            </Row>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

const instance = createInstance({ resources: resources });
void instance.init({ lng: "en", initAsync: false });

RSVPEmail.PreviewProps = {
  rsvp: {
    attending: "no",
    comments: "Vi gleder oss",
    createdAt: new Date(),
    email: "lasse@gmail.com",
    foodPreferences: "Nøtter",
    fullName: "Lasse Testesen",
    fullNameGuest: "Kake",
    id: 1,
  },
  i18next: instance,
} satisfies Props;

export default RSVPEmail;

const main = {
  backgroundColor: "#fff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const logo = {
  padding: "30px 20px",
  width: "24px",
  height: "24px",
};

const buttonContainer = {
  textAlign: "center" as const,
};

const button = {
  backgroundColor: "#155dfc",
  borderRadius: 4,
  color: "white",
  fontWeight: "500",
  cursor: "pointer",
  display: "inline-block",
  padding: "12px 30px",
  textDecoration: "none",
};

const content = {
  border: "1px solid rgb(0,0,0, 0.1)",
  borderRadius: "3px",
  overflow: "hidden",
};

const boxInfos = {
  padding: "20px",
};
