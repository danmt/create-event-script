import * as anchor from '@heavy-duty/anchor';
import {
  Connection,
  Keypair,
  LAMPORTS_PER_SOL,
  PublicKey,
} from '@solana/web3.js';
import { Program } from '@heavy-duty/anchor';
import { Decidooor, IDL } from './types/decidooor';
import { createMint } from './utils';

const main = async () => {
  const connection = new Connection('http://localhost:8899');
  const PROGRAM_ID = new PublicKey(
    'C7EcdBmywF3p1CwMJntzFN81PNyaf92yKZbkseoPck8D',
  );
  const authority = Keypair.generate();
  const provider = new anchor.Provider(
    connection,
    new anchor.Wallet(authority),
    {},
  );
  const signature = await connection.requestAirdrop(
    authority.publicKey,
    5 * LAMPORTS_PER_SOL,
  );
  await connection.confirmTransaction(signature);

  anchor.setProvider(provider);
  const program = new Program<Decidooor>(IDL, PROGRAM_ID);
  const eventKeypair = anchor.web3.Keypair.generate();
  const eventStateSize = 1000;
  const eventCapacity = new anchor.BN(200);
  const eventRedeemDate = new anchor.BN(Math.floor(Date.now() / 1000));
  const acceptedMintPublicKey = await createMint(program.provider);

  await program.methods
    .createEvent(eventRedeemDate, new anchor.BN(eventCapacity), eventStateSize)
    .accounts({
      authority: program.provider.wallet.publicKey,
      acceptedMint: acceptedMintPublicKey,
      event: eventKeypair.publicKey,
    })
    .signers([eventKeypair])
    .rpc();

  console.log(`Event created: ${eventKeypair.publicKey.toBase58()}`);
};

main();
