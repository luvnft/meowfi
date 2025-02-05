import { type Network } from "@aptos-labs/ts-sdk";
export const NETWORK = process.env.NEXT_PUBLIC_NETWORK as Network;
export const MONGO_URI = process.env.NEXT_PUBLIC_MONGO_URI as string;
export const ABI_ADDRESS = process.env.NEXT_PUBLIC_ABI_ADDRESS as string;
export const TG_BOT_TOKEN = process.env.NEXT_PUBLIC_TG_BOT_TOKEN as string;
export const TG_CHAT_ID = process.env.NEXT_PUBLIC_TG_CHAT_ID as string;

//REMOVED
export const DISCORD_CLIENT_ID = process.env.NEXT_PUBLIC_DISCORD_CLIENT_ID as string;
export const DISCORD_CLIENT_SECRET = process.env.NEXT_PUBLIC_DISCORD_CLIENT_SECRET as string;
export const DISCORD_REDIRECT_URI = process.env.NEXT_PUBLIC_DISCORD_REDIRECT_URI as string;
export const BOT_TOKEN = process.env.NEXT_PUBLIC_DISCORD_BOT_TOKEN as string;
export const LISTING_CHANNEL_ID = process.env.NEXT_PUBLIC_LISTING_CHANNEL_ID as string;