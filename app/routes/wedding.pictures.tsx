import { CloudinaryImage } from "~/components/CloudinaryImage";
import { PageTitle } from "~/components/PageTitle";

export default function Pictures() {
  return (
    <div>
      <PageTitle
        title="Bilder av oss"
        subtitle={["Her ser du bilder av oss gjennom tidene sammen."]}
      />
      <div className="grid grid-cols-3 md:grid-cols-6 gap-2 items-center">
        <CloudinaryImage
          imageUrl="Bryllup/936C0B28-0267-4512-B66A-E7E30D7CD401_vqta6e.jpg"
          imageAlt="Sonica og Lasse i sofaen"
        />
        <CloudinaryImage
          imageUrl="Bryllup/5BD31EF8-4641-481B-B3A5-5CDB9601859C_zfwhu2.jpg"
          imageAlt="Sonica på huske ved akerselva"
        />
        <CloudinaryImage
          imageUrl="Bryllup/4605E2E5-E6EC-46C1-B007-D64281228728_velt63.jpg"
          imageAlt="Sonica og Lasse i hengekøye"
        />
        <CloudinaryImage
          imageUrl="Bryllup/A5404738-85F1-4775-ABCD-8688BFCEE3BB_uq8chj.jpg"
          imageAlt="Sonica med hatt"
        />
        <CloudinaryImage
          imageUrl="Bryllup/C987F085-ECD0-40DE-AE60-9FA21A561221_rbgj89.jpg"
          imageAlt="Sonica og Lasse på fest"
        />
        <CloudinaryImage
          imageUrl="Bryllup/87FD1159-9544-4062-8895-1B2F2F8D1641_ojhz7u.jpg"
          imageAlt="Sonica og Lasse på vei til brylupp"
        />
        <CloudinaryImage
          imageUrl="Bryllup/1E228DA5-7255-48DE-AEBA-1A38274C04B2_jvtqrn.jpg"
          imageAlt="Sonica og Lasse i London"
        />
        <CloudinaryImage
          imageUrl="Bryllup/4EEE8876-6532-4E27-9176-89F5043CB79E_pxjozc.jpg"
          imageAlt="Sonica og Lasse i bryllup"
        />
        <CloudinaryImage
          imageUrl="Bryllup/991EAE0E-34D6-459F-8315-CED736F78B07_wlkzws.jpg"
          imageAlt="Sonica og Lasse med Olivia"
        />
        <CloudinaryImage
          imageUrl="Bryllup/6024367F-CF06-44BC-A60A-37FCE41F4114_junxcn.jpg"
          imageAlt="Sonica og Lasse i Paris"
        />

        <CloudinaryImage
          imageUrl="Bryllup/5C340B65-FCCC-415F-8EEC-D2EFAB325DD7_x7aykj.jpg"
          imageAlt="Sonica og Lasse på hotellrom i Paris"
        />
        <CloudinaryImage
          imageUrl="Bryllup/617B8EC1-7A36-401D-91F2-9E2F1DDB3AB3_icnszf.jpg"
          imageAlt="Sonica og Lasse på tur i Norge et sted"
        />
        <CloudinaryImage
          imageUrl="Bryllup/DBA9E8B2-A1EC-4742-B439-7C34F7D1D95E_v7spbg.jpg"
          imageAlt="Sonica og Lasse er kule"
        />
        <CloudinaryImage
          imageUrl="Bryllup/3467CE7B-71AD-462C-A299-A4E502466333_yvwxdd.jpg"
          imageAlt="Lasse i Baker Street"
        />
      </div>
    </div>
  );
}
