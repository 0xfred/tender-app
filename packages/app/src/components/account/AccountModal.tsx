import { FC } from "react";
import styled from "styled-components";
import { useEthers, useEtherBalance, Rinkeby } from "@usedapp/core";
import { TransactionsList } from "../transactions";
import { formatEther } from "@ethersproject/units";
import { BigNumber } from "ethers";
import { ShareIcon } from "../transactions/Icons";
import { Link } from "../base";
import { Box, Text, Layer, Card, CardHeader, CardBody, Heading } from "grommet";

const formatter = new Intl.NumberFormat("en-us", {
  minimumFractionDigits: 4,
  maximumFractionDigits: 4,
});

const formatBalance = (balance: BigNumber | undefined) =>
  formatter.format(parseFloat(formatEther(balance ?? BigNumber.from("0"))));

type AccountModalProps = {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AccountModal: FC<AccountModalProps> = ({ showModal, setShowModal }) => {
  const { account, chainId } = useEthers();
  const balance = useEtherBalance(account);
  return (
    <>
      {account && chainId && showModal && (
        <Layer
          style={{ overflow: "auto" }}
          animation="fadeIn"
          onEsc={() => setShowModal(false)}
          onClickOutside={() => setShowModal(false)}
        >
          <Card flex={false}>
            <Box pad="medium" gap="medium">
              <CardHeader>
                <Heading level={2} alignSelf="center">
                  Account info
                </Heading>
              </CardHeader>
              <CardBody>
                <Box gap="medium">
                  <Text size="medium" weight="bold">
                    Address: {account}
                  </Text>
                </Box>
                <Box direction="row" justify="between">
                  <Link href={Rinkeby.getExplorerAddressLink("account")} target="_blank" rel="noopener noreferrer">
                    Show on etherscan
                    <LinkIconWrapper>
                      <ShareIcon fill="#FFFFFF" />
                    </LinkIconWrapper>
                  </Link>
                  {window.isSecureContext && (
                    <Link onClick={() => console.log(navigator.clipboard.writeText(account))}>Copy to clipboard</Link>
                  )}
                </Box>
                <Box direction="row" justify="between" margin={{ vertical: "12px" }}>
                  <Text>Balance: </Text>
                  <Text>ETH: {balance && formatBalance(balance)}</Text>
                </Box>
                <Box>
                  <TransactionsList />
                </Box>
              </CardBody>
            </Box>
          </Card>
        </Layer>
      )}
    </>
  );
};

const LinkIconWrapper = styled.div`
  width: 1.2rem;
  height: 1.2rem;
`;
