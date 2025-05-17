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
  Text,
} from "@react-email/components";

import type { rsvps } from "~/database/schema";

type Props = { rsvp: typeof rsvps.$inferSelect };

export const RSVPEmail = ({ rsvp }: Props) => {
  return (
    <Html>
      <Head />
      <Body style={main}>
        <Preview>Yelp recent login</Preview>
        <Container>
          <Section style={logo}>
            <Img
              src={"https://lasseandsonica.com/ringer.png"}
              alt="Ringer"
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
                  Hei {rsvp.fullName},
                </Heading>
                <Heading
                  as="h2"
                  style={{
                    fontSize: 26,
                    fontWeight: "medium",
                    textAlign: "center",
                  }}
                >
                  {rsvp.attending === "yes"
                    ? `Vi gleder oss til å se ${rsvp.fullNameGuest ? "dere" : "deg"} i bryllupet 11.oktober.`
                    : `Det var synd at ${rsvp.fullNameGuest ? "dere" : "du"} ikke kunne komme i vårt bryllup.`}
                </Heading>
                <table>
                  <tbody>
                    {[
                      { label: "Fullt navn", content: rsvp.fullName },
                      { label: "E-post", content: rsvp.email },
                      {
                        label: "Fullt navn partner",
                        content: rsvp.fullNameGuest,
                        hide: !rsvp.fullNameGuest,
                      },
                      {
                        label: "Kommer du?",
                        content: rsvp.attending === "yes" ? "Ja" : "Nei",
                      },
                      {
                        label: "Matpreferanser",
                        content: rsvp.foodPreferences,
                      },
                      {
                        label: "Kommentarer",
                        content: rsvp.comments,
                      },
                    ]
                      .filter((row) => row.hide !== true)
                      .map(({ label, content }) => (
                        <tr key={label}>
                          <td style={{ textAlign: "left", padding: 6 }}>
                            <b>{label}:</b>
                          </td>
                          <td style={{ textAlign: "left", padding: 6 }}>
                            {content}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </Column>
            </Row>
            <Row style={{ ...boxInfos, paddingBottom: "0" }}>
              <Column>
                <Text>
                  Denne informasjonen blir lagret på Cloudflare og slettet inne
                  60 dager etter bryllupet.
                </Text>
              </Column>
            </Row>
            <Row style={{ ...boxInfos, paddingTop: "8" }}>
              <Column style={buttonContainer} colSpan={2}>
                <Button style={button} href="https://lasseandsonica.com">
                  Gå til nettsiden
                </Button>
              </Column>
            </Row>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

RSVPEmail.PreviewProps = {
  rsvp: {
    attending: "no",
    comments: "Vi gleder oss",
    createdAt: new Date(),
    email: "lasse@gmail.com",
    foodPreferences: "Nøtter",
    fullName: "Lasse Testesen",
    fullNameGuest: "",
    id: 1,
  },
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
