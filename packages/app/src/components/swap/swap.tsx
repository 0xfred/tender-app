import { ChangeEventHandler, FC, useCallback, useEffect, useRef, useState } from "react";
import { Button, Box, Form, FormField, Image, Text, TextInput, Tip } from "grommet";
import { BigNumberish, utils } from "ethers";
import { contracts, addresses } from "@tender/contracts/src/index";
import { stakers } from "@tender/shared/src/index";
import ApproveToken from "../approve/ApproveToken";
import ConfirmSwapModal from "./ConfirmSwapModal";
import { useIsTokenApproved } from "../approve/useIsTokenApproved";
import { Transaction } from "grommet-icons";
import { withDecimals, weiToEthWithDecimals } from "../../utils/amountFormat";
import { AmountInputFooter } from "../AmountInputFooter";
import { hasValue, isLargerThanMax, isPositive, useBalanceValidation } from "../../utils/inputValidation";
import { useCalculateSwap, useSwapPriceImpact } from "../../utils/tenderSwapHooks";
import { useEthers } from "@usedapp/core";
import { ProtocolName } from "@tender/shared/src/data/stakers";
import { useIsGnosisSafe } from "utils/context";

type Props = {
  protocolName: ProtocolName;
  tokenSymbol: string;
  tokenBalance: BigNumberish;
  tenderTokenBalance: BigNumberish;
  disabled: boolean;
};

const Swap: FC<Props> = ({ tokenSymbol, tokenBalance, tenderTokenBalance, protocolName, disabled }) => {
  const logo = `/${stakers[protocolName].bwLogo}`;
  const tenderLogo = `/${stakers[protocolName].bwTenderLogo}`;

  // whether supported asset (e.g. LPT) has ERC20 permit support
  const hasPermit = stakers[protocolName].hasPermit;

  const [showConfirm, setShowConfirm] = useState(false);
  const [isSendingToken, setIsSendingToken] = useState(false);
  const [sendTokenAmount, setSendTokenAmount] = useState("");
  const [receiveTokenAmount, setReceiveTokenAmount] = useState("");
  const [slippage, setSlippage] = useState(2);
  const { account } = useEthers();

  const tenderTokenSymbol = `t${tokenSymbol}`;
  const sendTokenSymbol = isSendingToken ? tokenSymbol : tenderTokenSymbol;
  const sendTokenLogo = isSendingToken ? logo : tenderLogo;
  const tokenReceivedSymbol = isSendingToken ? tenderTokenSymbol : tokenSymbol;
  const tokenReceivedLogo = isSendingToken ? tenderLogo : logo;
  const sendTokenBalance = isSendingToken ? tokenBalance : tenderTokenBalance;
  const sendTokenAddress = isSendingToken ? addresses[protocolName].token : addresses[protocolName].tenderToken;

  const isTokenApproved = useIsTokenApproved(
    sendTokenAddress,
    account,
    addresses[protocolName].tenderSwap,
    sendTokenAmount
  );

  const sendInputRef = useRef<HTMLInputElement | null>(null);

  const isSafeContext = useIsGnosisSafe();

  const showApprove = (): boolean => {
    if (disabled) return false;
    if (isSafeContext && !isTokenApproved) return true;
    if (isSendingToken && !hasPermit && !isTokenApproved) return true;
    return false;
  };

  const calcOutGivenIn = useCalculateSwap(
    addresses[protocolName].tenderSwap,
    sendTokenAddress,
    utils.parseEther(sendTokenAmount || "0")
  );

  const { priceImpact } = useSwapPriceImpact(
    isSendingToken,
    addresses[protocolName].tenderSwap,
    sendTokenAmount,
    calcOutGivenIn
  );
  const usePermit = (): boolean => {
    if (isSafeContext) return false;
    // if underlying token check if it has permit support
    if (isSendingToken) return hasPermit && !isTokenApproved;
    // tender tokens always have permit support, check only if sufficient allowance
    return !isTokenApproved;
  };

  const handleSendTokenInput: ChangeEventHandler<HTMLInputElement> = useCallback((e) => {
    setSendTokenAmount(e.target.value);
  }, []);

  useEffect(() => {
    setReceiveTokenAmount(utils.formatEther(calcOutGivenIn || "0"));
  }, [calcOutGivenIn]);

  const { validationMessage } = useBalanceValidation(sendTokenAmount, sendTokenBalance, sendTokenSymbol);

  return (
    <Box>
      <Form>
        <Box align="center" justify="center">
          <Box direction="row" gap="small">
            <FormField disabled={disabled} name="sendAmount" label={`Send`}>
              <Box width="medium">
                <TextInput
                  disabled={disabled}
                  ref={sendInputRef}
                  id="formSwapSend"
                  type="number"
                  icon={
                    <Box pad="xsmall" direction="row" align="center" gap="small">
                      <Image height="35" src={sendTokenLogo} />
                      <Text>{sendTokenSymbol}</Text>
                    </Box>
                  }
                  value={sendTokenAmount}
                  style={{ textAlign: "right", padding: "20px 50px" }}
                  placeholder={"0"}
                  onChange={handleSendTokenInput}
                  required={true}
                />
                <Text color="red">{validationMessage}</Text>
                <AmountInputFooter
                  label={`Balance: ${weiToEthWithDecimals(sendTokenBalance, 6)} ${sendTokenSymbol}`}
                  onClick={() => {
                    setSendTokenAmount(utils.formatEther(sendTokenBalance.toString() ?? "0"));
                    sendInputRef.current?.focus();
                  }}
                />
              </Box>
            </FormField>
            <Button
              plain
              color="none"
              icon={<Transaction color="white" />}
              onClick={() => setIsSendingToken(!isSendingToken)}
            />
            <Tip
              plain
              dropProps={{
                stretch: "align",
                align: { bottom: "top" },
                round: {
                  size: "20px",
                },
                margin: "none",
                background: "rgba(0,0,0,0.6)",
                elevation: "none",
              }}
              content={
                hasValue(sendTokenAmount) && (
                  <Box width="medium" elevation="none" pad="medium">
                    <Text color="white">{receiveTokenAmount}</Text>
                  </Box>
                )
              }
            >
              <FormField label={`Receive`}>
                <Box width="medium">
                  <TextInput
                    id="formSwapReceive"
                    type="number"
                    placeholder={"0"}
                    icon={
                      <Box pad="xsmall" direction="row" align="center" gap="small">
                        <Image height="35" src={tokenReceivedLogo} />
                        <Text>{tokenReceivedSymbol}</Text>
                      </Box>
                    }
                    disabled
                    style={{ textAlign: "right", padding: "20px 50px" }}
                    value={withDecimals(receiveTokenAmount, 8)}
                  />
                </Box>
              </FormField>
            </Tip>
          </Box>
          <Box width="490px" direction="column" gap="small">
            <ApproveToken
              symbol={sendTokenSymbol}
              spender={addresses[protocolName].tenderSwap}
              token={isSendingToken ? contracts[protocolName].token : contracts[protocolName].tenderToken}
              show={showApprove()}
              chainId={stakers[protocolName].chainId}
            />
            <Button
              primary
              disabled={
                disabled ||
                (!isTokenApproved && isSendingToken && !hasPermit) ||
                !isPositive(sendTokenAmount) ||
                isLargerThanMax(sendTokenAmount, sendTokenBalance) ||
                utils.parseEther(sendTokenAmount).isZero()
              }
              onClick={() => setShowConfirm(true)}
              label="Trade"
            />
          </Box>
        </Box>
      </Form>
      <ConfirmSwapModal
        show={showConfirm}
        onDismiss={() => {
          setShowConfirm(false);
          setSendTokenAmount("");
        }}
        tokenSendedSymbol={sendTokenSymbol}
        sendTokenBalance={sendTokenBalance}
        sendTokenAmount={sendTokenAmount}
        setSendTokenAmount={setSendTokenAmount}
        tokenReceiveAmount={calcOutGivenIn}
        tokenReceivedSymbol={tokenReceivedSymbol}
        tokenAddress={sendTokenAddress}
        priceImpact={priceImpact}
        protocolName={protocolName}
        usePermit={usePermit()}
        owner={account}
        slippage={slippage}
        setSlippage={setSlippage}
      />
    </Box>
  );
};

export default Swap;
