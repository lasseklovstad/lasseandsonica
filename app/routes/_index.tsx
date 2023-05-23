import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Lasse & Sonica" }];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif" }}>
      <h1>Heisann!</h1>
      <p style={{ lineHeight: "1.0" }}>
        Du er litt tidlig ute. Her kommer snart informasjon om bryllupet til
        Lasse & Sonica.
      </p>
    </div>
  );
}
