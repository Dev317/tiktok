import { clusterApiUrl, PublicKey } from "@solana/web3.js"
import tiktok from '../utils/tiktok.json'


export const SOLANA_HOST = clusterApiUrl('devnet')

export const TIKTOK_PROGRAM_ID = new PublicKey("5eoRVGSgUh3yDhawHteJkdyow6cat5hynMDysbmXQVWM")

export const TIKTOK_IDL = tiktok

