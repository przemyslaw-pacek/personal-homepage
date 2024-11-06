import { Spinner, Wrapper } from "./styled";
import { Paragraph } from "../../../../common/Paragraph";

export const Loading = () => (
  <Wrapper>
    <Paragraph>Please wait, projects are being loaded…</Paragraph>
    <Spinner />
  </Wrapper>
);
