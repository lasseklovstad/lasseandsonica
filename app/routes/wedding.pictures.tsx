import { ImageLibrary } from "~/components/ImageLibrary";
import { PageTitle } from "~/components/PageTitle";
import { routes } from "~/types/routes";

const pictures = [
  {
    imageUrl: "Bryllup/5BD31EF8-4641-481B-B3A5-5CDB9601859C_zfwhu2.jpg",
    imageAlt: "Sonica på huske ved akerselva",
  },
  {
    imageUrl: "Bryllup/4605E2E5-E6EC-46C1-B007-D64281228728_velt63.jpg",
    imageAlt: "Sonica og Lasse i hengekøye",
  },
  {
    imageUrl: "Bryllup/A5404738-85F1-4775-ABCD-8688BFCEE3BB_uq8chj.jpg",
    imageAlt: "Sonica med hatt",
  },
  {
    imageUrl: "Bryllup/87FD1159-9544-4062-8895-1B2F2F8D1641_ojhz7u.jpg",
    imageAlt: "Sonica og Lasse på vei til brylupp",
  },
  {
    imageUrl: "Bryllup/1E228DA5-7255-48DE-AEBA-1A38274C04B2_jvtqrn.jpg",
    imageAlt: "Sonica og Lasse i London",
  },
  {
    imageUrl: "Bryllup/4EEE8876-6532-4E27-9176-89F5043CB79E_pxjozc.jpg",
    imageAlt: "Sonica og Lasse i bryllup",
  },
  {
    imageUrl: "Bryllup/991EAE0E-34D6-459F-8315-CED736F78B07_wlkzws_kxoxbf.jpg",
    imageAlt: "Sonica og Lasse med Olivia",
  },
  {
    imageUrl: "Bryllup/6024367F-CF06-44BC-A60A-37FCE41F4114_junxcn.jpg",
    imageAlt: "Sonica og Lasse i Paris",
  },

  {
    imageUrl: "Bryllup/617B8EC1-7A36-401D-91F2-9E2F1DDB3AB3_icnszf.jpg",
    imageAlt: "Sonica og Lasse på tur i Norge et sted",
  },

  {
    imageUrl: "Bryllup/3467CE7B-71AD-462C-A299-A4E502466333_yvwxdd.jpg",
    imageAlt: "Lasse i Baker Street",
  },
  {
    imageUrl: "Bryllup/EDE940EB-52E5-4B0B-BB86-494BE1BBAC33_smlzvg.jpg",
    imageAlt: "Sonica og Lasse i Åndalsnes",
  },
  {
    imageUrl: "Bryllup/DBA9E8B2-A1EC-4742-B439-7C34F7D1D95E_v7spbg_dlls5k.jpg",
    imageAlt: "Sonica og Lasse er kule",
  },
  {
    imageUrl: "Bryllup/5C340B65-FCCC-415F-8EEC-D2EFAB325DD7_x7aykj_ksqr5v.jpg",
    imageAlt: "Sonica og Lasse på hotellrom i Paris",
  },
  {
    imageUrl: "Bryllup/20220714_083137250_iOS_pxpnv8.jpg",
    imageAlt: "Sonica koser seg i teltet på vei til Besseggen",
  },
  {
    imageUrl: "Bryllup/20200816_175136558_iOS_vupcbj.jpg",
    imageAlt: "Lasse på togstasjon med hjemmebrygg",
  },
  {
    imageUrl: "Bryllup/20220714_094700598_iOS_sec5ae.heic",
    imageAlt: "Sonica gjør seg klar til zip line",
  },
  {
    imageUrl: "Bryllup/20210517_145932411_iOS_qo2yjd.heic",
    imageAlt: "Lasse og Sonica på 17.mai",
  },
  {
    imageUrl: "Bryllup/20201106_160216991_iOS_gajej0.heic",
    imageAlt: "Lasse og Sonica er på utsiktspunkt på Grefsenkollen",
  },
  {
    imageUrl: "Bryllup/20211203_133807935_iOS_d4vlsb.heic",
    imageAlt: "Lasse og Sonica i Gøteborg",
  },
  {
    imageUrl: "Bryllup/20220715_072121388_iOS_jqs07y.heic",
    imageAlt: "Sonica på Besseggen",
  },
  {
    imageUrl: "Bryllup/20200723_160347811_iOS_yjnjkj.heic",
    imageAlt: "Sonica på Sipp & Paint",
  },
  {
    imageUrl: "Bryllup/20220417_104704285_iOS_ejdmbg.heic",
    imageAlt: "Sonica og Lasse på orienteringstur i Sandefjord",
  },
];

export default function Pictures() {
  return (
    <div>
      <PageTitle
        title="Bilder av oss"
        nextLink={{
          to: `../${routes.wedding.qa}`,
          name: `Q+A`,
        }}
        backLink={{
          to: `../${routes.wedding.rsvp}`,
          name: `RSVP`,
        }}
        subtitle={[
          "Her ser du bilder av oss gjennom tidene.",
          "Trykk på bildene for å se dem i større størrelse.",
        ]}
      />
      <ImageLibrary pictures={pictures} />
    </div>
  );
}
