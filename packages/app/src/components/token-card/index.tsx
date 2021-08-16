import { FC } from "react";
import { Box, Text, Image } from "grommet";

type Props = {
  url: string;
  info: CardInfo;
  apy: number;
};

type CardInfo = {
  description: string;
  stakerAddress: string;
  title: string;
  available: boolean;
  apy: number;
  logo: string;
  bwLogo: string;
  bwTenderLogo: string;
  symbol: string;
};

const TokenCard: FC<Props> = (props) => {
  const { info, apy } = props;
  const logo = require("../../images/" + info.bwTenderLogo);

  return (
    <Box pad="large" style={{ flex: "1" }}>
      <Box align="center" margin={{ vertical: "small" }}>
        <Image src={logo.default} sizes="large" />
        <Text size="xlarge">{info.title}</Text>
      </Box>
      <Box pad={{ horizontal: "large" }} gap="medium">
        <Box direction="column" align="center">
          <Text size="medium" color="light-3">
            Stake
          </Text>
          <Box direction="row" align="center" gap="small">
            <Text size="large" weight="bold">
              {apy}
            </Text>
            <Text size="small" weight="normal" color="light-3">
              % APY
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default TokenCard;
