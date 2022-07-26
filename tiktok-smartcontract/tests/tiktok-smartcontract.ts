import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { TiktokSmartcontract } from "../target/types/tiktok_smartcontract";

describe("tiktok-smartcontract", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.TiktokSmartcontract as Program<TiktokSmartcontract>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
