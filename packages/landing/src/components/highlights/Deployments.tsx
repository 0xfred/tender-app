import { FC } from "react";
import { Grid, Box, Heading, Paragraph } from "grommet";
import { HighlightContainer } from "./HighlightContainer";
import TokenCard from "../token-card";
import { ScreenSize, screenToFontSize } from "./helper";
import { useAPYData, useTVLData } from "./hooks";

export const Deployments: FC<{ screenSize: ScreenSize; setVisibleIndex: (v: number) => void; index: number }> = ({
  screenSize,
  setVisibleIndex,
  index,
}) => {
  const { livepeer, audius, graph, matic } = useAPYData();
  const tvl = useTVLData();
  return (
    <HighlightContainer item="deployments" setVisibleIndex={setVisibleIndex} index={index}>
      <Grid columns={["1/2", "1/2"]}>
        <Box
          align="center"
          gap="medium"
          style={{ position: "relative", marginTop: "12%", marginLeft: "175", minHeight: 650 }}
        >
          <Box
            style={{
              position: "relative",
              width: 294.5,
              height: 389,
            }}
          >
            <Box
              style={{
                position: "absolute",
                top: 310,
                left: 50,
              }}
            >
              <TokenCard key={livepeer.path} {...livepeer} tvl={tvl.livepeer.tvl} />
            </Box>
            <Box
              style={{
                position: "absolute",
                top: 20,
                left: 160,
              }}
            >
              <TokenCard key={audius.path} {...audius} tvl={tvl.audius.tvl} />
            </Box>
            <Box
              style={{
                position: "absolute",
                top: 210,
                left: -170,
              }}
            >
              <TokenCard key={graph.path} {...graph} tvl={tvl.graph.tvl} />
            </Box>
            <Box
              style={{
                position: "absolute",
                top: -80,
                left: -70,
              }}
            >
              <TokenCard key={matic.path} {...matic} tvl={tvl.matic.tvl} />
            </Box>
            <Box
              style={{
                position: "absolute",
                top: 150,
                width: 294.5,
                height: 389,
                backgroundImage: `url('/landing/hammer.svg')`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
              }}
            />
          </Box>
        </Box>
        <Box align="start" justify="center">
          <Heading
            style={{
              position: "relative",
              textShadow: "0px 0px 17px rgba(63, 19, 237, 0.88)",
            }}
            size={screenToFontSize(screenSize)}
          >
            Tender Tokens
          </Heading>
          <Paragraph margin={{ top: "medium" }} size={"large"} style={{ fontWeight: 500 }}>
            Liquid staking derivatives pegged 1:1 to your staked assets
          </Paragraph>
          <Paragraph margin={{ top: "small" }} size={"medium"}>
            Your TenderToken balance will increase as Tenderize earns staking rewards so you earn yield simply by
            holding them.
          </Paragraph>
        </Box>
      </Grid>
    </HighlightContainer>
  );
};
