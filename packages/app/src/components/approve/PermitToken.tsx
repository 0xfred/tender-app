import { FC } from "react";
import { BigNumber, Contract } from "ethers";
import { Box, Button, Tip, Text } from "grommet";
import { signERC2612Permit } from "eth-permit";
import { LoadingButtonContent } from "../LoadingButtonContent";
import { useForceRinkebyFunction } from "utils/forceChainIdOnCall";
import { isPendingTransaction } from "utils/transactions";
import { useContractFunction, useEthers } from "@usedapp/core";
import { getDeadline } from "utils/tenderSwapHooks";

type Props = {
  symbol: string;
  show: boolean;
  spender: string;
  token: Contract;
  amount: BigNumber;
  owner: string | undefined | null;
};

const PermitToken: FC<Props> = ({ symbol, spender, show, token, owner, amount }) => {
  const { state: approveTx, send: permitToken } = useContractFunction(token, "permit", {
    transactionName: `Permit ${symbol}`,
  });

  const { library } = useEthers();

  const { rinkebyForcedFunction: handleApproval, renderError } = useForceRinkebyFunction(async (e) => {
    e.preventDefault();

    if (show) {
      const tenderTokenApproval = await signERC2612Permit(
        library,
        token.address,
        owner ?? "",
        spender,
        amount?.toString(),
        getDeadline()
      );
      await permitToken(
        owner,
        spender,
        amount?.toString(),
        tenderTokenApproval.deadline,
        tenderTokenApproval.v,
        tenderTokenApproval.r,
        tenderTokenApproval.s
      );
    }
  });

  if (!show) {
    return <></>;
  }

  return (
    <>
      <Button
        secondary
        gap="medium"
        fill="horizontal"
        onClick={handleApproval}
        disabled={approveTx.status !== "None" && approveTx.status !== "Success" && approveTx.status !== "Exception"}
        label={
          <>
            <Box justify="center" align="center" direction="row" gap="small" pad={{ horizontal: "xsmall" }}>
              {isPendingTransaction(approveTx) && <LoadingButtonContent />}
              <Text weight="normal">Allow Tenderize to spend {symbol}</Text>
              <Tip
                plain
                dropProps={{
                  round: {
                    size: "20px",
                  },
                  background: "rgba(0,0,0,0.4)",
                  elevation: "none",
                }}
                content={
                  <Box width="medium" elevation="none" pad="medium">
                    <Text color="white">
                      {`You must give the Tenderize smart contracts permission to use your ${symbol}. This will not cost you anything.`}
                    </Text>
                  </Box>
                }
              >
                <span
                  style={{ border: "1px solid white", borderRadius: "50%", paddingLeft: "5px", paddingRight: "5px" }}
                >
                  &#8505;
                </span>
              </Tip>
            </Box>
          </>
        }
      />
      {renderError()}
    </>
  );
};

export default PermitToken;
