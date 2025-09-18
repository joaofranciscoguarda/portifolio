import { createSignal, createEffect, Show, For } from "solid-js";
import { useTranslation } from "@/context/i18n";
import {
    useWallet,
    DONATION_ADDRESS,
    TOKENS,
    type TokenSymbol,
} from "@/utils/wallet";
import { Button } from "@/components/ui/button";
import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerTitle,
    DrawerDescription,
} from "@/components/ui/drawer";
import { Icon } from "@/components/features/icons-factory";
import { breakPoints } from "@/hooks";

interface DonationModalProps {
    isOpen: boolean;
    onClose: () => void;
    onDonationSuccess?: () => void;
}

export function DonationModal(props: DonationModalProps) {
    const { t } = useTranslation();
    const wallet = useWallet();
    const screen = breakPoints;

    const [amount, setAmount] = createSignal("");
    const [isSending, setIsSending] = createSignal(false);
    const [message, setMessage] = createSignal("");
    const [messageType, setMessageType] = createSignal<
        "success" | "error" | ""
    >("");
    const [balance, setBalance] = createSignal("0");
    const [isAddressCopied, setIsAddressCopied] = createSignal(false);
    const [selectedToken, setSelectedToken] =
        createSignal<TokenSymbol>("MATIC");

    // Update balance when wallet is connected or token changes
    createEffect(async () => {
        if (wallet.isConnected()) {
            try {
                const bal = await wallet.getBalance(selectedToken());
                setBalance(bal);
            } catch (err) {
                console.error("Failed to get balance:", err);
            }
        }
    });

    const handleCopyAddress = async () => {
        try {
            await navigator.clipboard.writeText(DONATION_ADDRESS);
            setIsAddressCopied(true);
            setTimeout(() => {
                setIsAddressCopied(false);
            }, 2000);
        } catch (err) {
            console.error("Failed to copy address:", err);
        }
    };

    const handleConnectWallet = async () => {
        if (!wallet.isMetaMaskAvailable()) {
            const errorMsg = t("donation.installMetaMask");
            if (errorMsg) {
                setMessage(errorMsg);
                setMessageType("error");
            }
            return;
        }

        try {
            await wallet.connectWallet();
        } catch (err) {
            const errorMsg = t("donation.error");
            if (errorMsg) {
                setMessage(errorMsg);
                setMessageType("error");
            }
        }
    };

    const handleSendDonation = async () => {
        // Development mode: Test without wallet connection or amount
        const isDev = import.meta.env.DEV;

        if (isDev && !amount()) {
            // Test mode: Just show thank you screen
            setIsSending(true);
            setTimeout(() => {
                setIsSending(false);
                if (props.onDonationSuccess) {
                    props.onDonationSuccess();
                } else {
                    props.onClose();
                }
            }, 1000);
            return;
        }

        if (!wallet.isConnected()) {
            const errorMsg = t("donation.walletNotConnected");
            if (errorMsg) {
                setMessage(errorMsg);
                setMessageType("error");
            }
            return;
        }

        const donationAmount = parseFloat(amount());
        if (!donationAmount || donationAmount <= 0) {
            const errorMsg = t("donation.invalidAmount");
            if (errorMsg) {
                setMessage(errorMsg);
                setMessageType("error");
            }
            return;
        }

        setIsSending(true);
        setMessage("");

        try {
            await wallet.sendDonation(amount(), selectedToken());
            setAmount("");

            // Call the success callback to show thank you screen
            if (props.onDonationSuccess) {
                props.onDonationSuccess();
            } else {
                // Fallback: just close the modal if no callback provided
                props.onClose();
            }

            // Update balance after successful transaction
            setTimeout(async () => {
                try {
                    const bal = await wallet.getBalance(selectedToken());
                    setBalance(bal);
                } catch (err) {
                    console.error("Failed to update balance:", err);
                }
            }, 2000);
        } catch (err: any) {
            console.error("Donation failed:", err);
            const errorMsg = t("donation.error");
            setMessage(err.message || errorMsg || "Failed to send donation");
            setMessageType("error");
        } finally {
            setIsSending(false);
        }
    };

    const formatAddress = (address: string) => {
        if (address.length < 10) return address;
        return `${address.slice(0, 6)}...${address.slice(-4)}`;
    };

    return (
        <Drawer
            open={props.isOpen}
            onOpenChange={(open) => !open && props.onClose()}
        >
            <DrawerContent
                side={screen.md ? "right" : "bottom"}
                class={
                    screen.md
                        ? "max-h-screen overflow-y-auto"
                        : "max-w-md mx-auto"
                }
            >
                <DrawerHeader class={screen.md ? "text-left" : "text-center"}>
                    <DrawerTitle
                        class={`flex items-center gap-2 text-2xl ${screen.md ? "justify-start" : "justify-center"}`}
                    >
                        <Icon icon="coffee" class="w-6 h-6" />
                        {t("donation.title")}
                    </DrawerTitle>
                    <DrawerDescription class="text-muted-foreground">
                        {t("donation.subtitle")}
                    </DrawerDescription>
                </DrawerHeader>

                <div class="px-6 pb-6 space-y-6">
                    {/* Description */}
                    <p
                        class={`text-sm text-muted-foreground ${screen.md ? "text-left" : "text-center"}`}
                    >
                        {t("donation.description")}
                    </p>

                    {/* Wallet Address Section */}
                    <div class="space-y-3">
                        <div class="flex items-center gap-2">
                            <Icon
                                icon="polygon"
                                class="w-5 h-5 text-purple-500"
                            />
                            <span class="font-medium">
                                {t("donation.walletAddress")}
                            </span>
                        </div>

                        <div class="flex items-center gap-2 p-3 bg-muted rounded-lg">
                            <code class="flex-1 text-sm font-mono">
                                {formatAddress(DONATION_ADDRESS)}
                            </code>
                            <Button
                                size="sm"
                                variant="outline"
                                onClick={handleCopyAddress}
                                class={`shrink-0 transition-colors ${
                                    isAddressCopied()
                                        ? "bg-green-50 border-green-200 text-green-700 dark:bg-green-900/20 dark:border-green-800 dark:text-green-300"
                                        : ""
                                }`}
                            >
                                <Show
                                    when={isAddressCopied()}
                                    fallback={t("donation.copyAddress")}
                                >
                                    <Icon icon="check" class="w-4 h-4" />
                                </Show>
                            </Button>
                        </div>
                    </div>

                    {/* Wallet Connection Section */}
                    <div class="space-y-4">
                        <p class="text-sm text-center text-muted-foreground">
                            {t("donation.connectWalletToSend")}
                        </p>

                        <Show
                            when={wallet.isConnected()}
                            fallback={
                                <Button
                                    onClick={handleConnectWallet}
                                    disabled={wallet.isConnecting()}
                                    class="w-full"
                                    size="lg"
                                >
                                    <Icon icon="wallet" class="w-5 h-5 mr-2" />
                                    {wallet.isConnecting()
                                        ? t("donation.connecting")
                                        : t("buttons.connectWallet")}
                                </Button>
                            }
                        >
                            <div class="space-y-4">
                                {/* Connected Wallet Info */}
                                <div class="flex items-center text-background justify-between p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                                    <div class="flex items-center gap-2">
                                        <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                                        <span class="text-sm font-medium">
                                            {formatAddress(
                                                wallet.account() || "",
                                            )}
                                        </span>
                                    </div>
                                    <Button
                                        size="sm"
                                        variant="ghost"
                                        onClick={wallet.disconnectWallet}
                                    >
                                        {t("buttons.disconnect")}
                                    </Button>
                                </div>

                                {/* Token Selector */}
                                <div class="space-y-2">
                                    <label class="text-sm font-medium">
                                        {t("donation.selectToken") ||
                                            "Select Token:"}
                                    </label>
                                    <div class="grid grid-cols-3 gap-2">
                                        <For each={Object.entries(TOKENS)}>
                                            {([symbol, token]) => (
                                                <Button
                                                    variant={
                                                        selectedToken() ===
                                                        symbol
                                                            ? "default"
                                                            : "outline"
                                                    }
                                                    size="sm"
                                                    onClick={() =>
                                                        setSelectedToken(
                                                            symbol as TokenSymbol,
                                                        )
                                                    }
                                                    class="flex items-center gap-2 h-12"
                                                >
                                                    <Icon
                                                        icon={token.icon}
                                                        class="w-4 h-4 text-background"
                                                    />
                                                    <span class="text-xs font-medium">
                                                        {symbol}
                                                    </span>
                                                </Button>
                                            )}
                                        </For>
                                    </div>
                                </div>

                                {/* Balance */}
                                <div class="text-center">
                                    <span class="text-sm text-muted-foreground">
                                        {t("donation.balance")}{" "}
                                        {parseFloat(balance()).toFixed(
                                            selectedToken() === "MATIC" ? 4 : 2,
                                        )}{" "}
                                        {selectedToken()}
                                    </span>
                                </div>

                                {/* Donation Amount Input */}
                                <div class="space-y-2">
                                    <input
                                        type="number"
                                        placeholder={`Amount in ${selectedToken()}`}
                                        value={amount()}
                                        onInput={(e) =>
                                            setAmount(e.currentTarget.value)
                                        }
                                        step="0.001"
                                        min="0"
                                        class="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                                    />
                                </div>

                                {/* Send Button */}
                                <Button
                                    onClick={handleSendDonation}
                                    disabled={
                                        isSending() ||
                                        (!import.meta.env.DEV &&
                                            (!amount() ||
                                                parseFloat(amount()) <= 0))
                                    }
                                    class="w-full"
                                    size="lg"
                                >
                                    {isSending()
                                        ? t("donation.sending")
                                        : import.meta.env.DEV && !amount()
                                          ? "Test Donation 🧪"
                                          : t("buttons.sendDonation")}
                                </Button>

                                {/* Dev Mode Indicator */}
                                <Show when={import.meta.env.DEV}>
                                    <div class="text-xs text-center text-orange-500 bg-orange-50 dark:bg-orange-900/20 p-2 rounded border border-orange-200 dark:border-orange-800">
                                        🧪 Dev Mode: Click "Test Donation"
                                        without amount to test the thank you
                                        screen
                                    </div>
                                </Show>
                            </div>
                        </Show>
                    </div>

                    {/* Message Display */}
                    <Show when={message()}>
                        <div
                            class={`p-3 rounded-lg text-sm text-center ${
                                messageType() === "success"
                                    ? "bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 border border-green-200 dark:border-green-800"
                                    : "bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-800"
                            }`}
                        >
                            {message()}
                        </div>
                    </Show>

                    {/* Close Button */}
                    <Button
                        variant="outline"
                        onClick={props.onClose}
                        class="w-full"
                    >
                        {t("buttons.close")}
                    </Button>
                </div>
            </DrawerContent>
        </Drawer>
    );
}
