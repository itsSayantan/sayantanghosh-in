import Head from "next/head";

import { utils } from "../../constants";
import { MetaProps } from "../../types/props";

const Meta = (props: MetaProps) => {
  return (
    <Head>
      <title>{props.title ? props.title : utils.meta.title}</title>
      <meta
        name="description"
        content={props.description ? props.description : utils.meta.description}
      />
      <meta
        name="keywords"
        content={props.keywords ? props.keywords : utils.meta.keywords}
      />
    </Head>
  );
};

export default Meta;
