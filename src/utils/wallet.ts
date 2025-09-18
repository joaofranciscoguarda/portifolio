import { createSignal } from "solid-js";
import {
    createWalletClient,
    createPublicClient,
    custom,
    formatEther,
    parseEther,
    formatUnits,
    parseUnits,
    type WalletClient,
    type PublicClient,
    http,
} from "viem";
import { polygon } from "viem/chains";

// Polygon mainnet configuration
export const POLYGON_MAINNET = polygon;

// Your wallet address for donations (replace with your actual address)
export const DONATION_ADDRESS =
    "0x4075ace7d6e14c498c5f9d2e69ad5902b36cc280" as const; // Add your wallet address here

// Token contracts on Polygon
export const TOKENS = {
    MATIC: {
        symbol: "MATIC",
        name: "Polygon",
        decimals: 18,
        address: null, // Native token
        icon: "polygon",
    },
    USDT: {
        symbol: "USDT",
        name: "Tether USD",
        decimals: 6,
        address: "0xc2132D05D31c914a87C6611C10748AEb04B58e8F" as const,
        icon: "usdt",
    },
    USDC: {
        symbol: "USDC",
        name: "USD Coin",
        decimals: 6,
        address: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174" as const,
        icon: "usdc",
    },
} as const;

export type TokenSymbol = keyof typeof TOKENS;

// Wallet connection state
const [isConnected, setIsConnected] = createSignal(false);
const [account, setAccount] = createSignal<string | null>(null);
const [walletClient, setWalletClient] = createSignal<WalletClient | null>(null);
const [publicClient, setPublicClient] = createSignal<PublicClient | null>(null);
const [isConnecting, setIsConnecting] = createSignal(false);
const [error, setError] = createSignal<string | null>(null);

// Check if MetaMask is available
export const isMetaMaskAvailable = () => {
    return (
        typeof window !== "undefined" && typeof window.ethereum !== "undefined"
    );
};

// Connect wallet function
export const connectWallet = async () => {
    if (!isMetaMaskAvailable()) {
        setError(
            "MetaMask is not installed. Please install MetaMask to connect your wallet.",
        );
        return false;
    }

    setIsConnecting(true);
    setError(null);

    try {
        // Request account access
        const accounts = await window.ethereum!.request({
            method: "eth_requestAccounts",
        });

        if (accounts.length === 0) {
            throw new Error("No accounts found");
        }

        // Create wallet client
        const client = createWalletClient({
            chain: POLYGON_MAINNET,
            transport: custom(window.ethereum!),
        });

        // Create public client for reading data
        const pubClient = createPublicClient({
            chain: POLYGON_MAINNET,
            transport: http(),
        });

        setWalletClient(client);
        setPublicClient(pubClient);
        setAccount(accounts[0]);
        setIsConnected(true);

        // Switch to Polygon network if not already
        await switchToPolygon();

        return true;
    } catch (err: any) {
        console.error("Failed to connect wallet:", err);
        setError(err.message || "Failed to connect wallet");
        return false;
    } finally {
        setIsConnecting(false);
    }
};

// Switch to Polygon network
export const switchToPolygon = async () => {
    if (!window.ethereum) return;

    try {
        await window.ethereum.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: "0x89" }], // Polygon mainnet chain ID
        });
    } catch (switchError: any) {
        // If network doesn't exist, add it
        if (switchError.code === 4902) {
            try {
                await window.ethereum.request({
                    method: "wallet_addEthereumChain",
                    params: [
                        {
                            chainId: "0x89",
                            chainName: "Polygon Mainnet",
                            nativeCurrency: {
                                name: "MATIC",
                                symbol: "MATIC",
                                decimals: 18,
                            },
                            rpcUrls: ["https://polygon-rpc.com/"],
                            blockExplorerUrls: ["https://polygonscan.com/"],
                        },
                    ],
                });
            } catch (addError) {
                console.error("Failed to add Polygon network:", addError);
                throw addError;
            }
        } else {
            throw switchError;
        }
    }
};

// Disconnect wallet
export const disconnectWallet = () => {
    setIsConnected(false);
    setAccount(null);
    setWalletClient(null);
    setPublicClient(null);
    setError(null);
};

// ERC-20 Transfer ABI (minimal)
const ERC20_ABI = [
    {
        name: "transfer",
        type: "function",
        stateMutability: "nonpayable",
        inputs: [
            { name: "to", type: "address" },
            { name: "amount", type: "uint256" },
        ],
        outputs: [{ name: "", type: "bool" }],
    },
    {
        name: "balanceOf",
        type: "function",
        stateMutability: "view",
        inputs: [{ name: "account", type: "address" }],
        outputs: [{ name: "", type: "uint256" }],
    },
] as const;

// Send donation (supports both native MATIC and ERC-20 tokens)
export const sendDonation = async (
    amount: string,
    tokenSymbol: TokenSymbol = "MATIC",
) => {
    if (!walletClient() || !account()) {
        throw new Error("Wallet not connected");
    }

    const client = walletClient()!;
    const token = TOKENS[tokenSymbol];

    try {
        if (token.address === null) {
            // Native MATIC transfer
            const hash = await client.sendTransaction({
                account: account()! as `0x${string}`,
                to: DONATION_ADDRESS,
                value: parseEther(amount),
                chain: POLYGON_MAINNET,
            });
            return hash;
        } else {
            // ERC-20 token transfer
            const hash = await client.writeContract({
                account: account()! as `0x${string}`,
                address: token.address,
                abi: ERC20_ABI,
                functionName: "transfer",
                args: [DONATION_ADDRESS, parseUnits(amount, token.decimals)],
                chain: POLYGON_MAINNET,
            });
            return hash;
        }
    } catch (err: any) {
        console.error("Failed to send donation:", err);
        throw new Error(err.message || "Failed to send donation");
    }
};

// Get wallet balance for specific token
export const getBalance = async (tokenSymbol: TokenSymbol = "MATIC") => {
    if (!publicClient() || !account()) return "0";

    const client = publicClient()!;
    const token = TOKENS[tokenSymbol];

    try {
        if (token.address === null) {
            // Native MATIC balance
            const balance = await client.getBalance({
                address: account()! as `0x${string}`,
            });
            return formatEther(balance);
        } else {
            // ERC-20 token balance
            const balance = await client.readContract({
                address: token.address,
                abi: ERC20_ABI,
                functionName: "balanceOf",
                args: [account()! as `0x${string}`],
            });
            return formatUnits(balance as bigint, token.decimals);
        }
    } catch (err) {
        console.error("Failed to get balance:", err);
        return "0";
    }
};

// Listen for account changes
if (typeof window !== "undefined" && window.ethereum) {
    window.ethereum.on("accountsChanged", (accounts: string[]) => {
        if (accounts.length === 0) {
            disconnectWallet();
        } else {
            setAccount(accounts[0]);
        }
    });

    window.ethereum.on("chainChanged", (chainId: string) => {
        console.log("Chain changed to:", chainId);
        // Don't reload the page - just log the change
        // The wallet connection should persist across network changes
    });
}

// Export reactive signals
export const useWallet = () => ({
    isConnected,
    account,
    isConnecting,
    error,
    connectWallet,
    disconnectWallet,
    sendDonation,
    getBalance,
    switchToPolygon,
    isMetaMaskAvailable,
});

// Types for window.ethereum
declare global {
    interface Window {
        ethereum?: {
            request: (args: { method: string; params?: any[] }) => Promise<any>;
            on: (event: string, callback: (...args: any[]) => void) => void;
            removeListener: (
                event: string,
                callback: (...args: any[]) => void,
            ) => void;
        };
    }
}
