import { Transfer as TransferEvent } from "../generated/AtlantisWorldFoundingAtlanteanScrolls/AtlantisWorldFoundingAtlanteanScrolls";
import { Token, User, Burn } from "../generated/schema";

export function handleTransfer(event: TransferEvent): void {
  const ADDRESS_ZERO = '0x0000000000000000000000000000000000000000';
  /**
   * params
   */
  const tokenIdBI = event.params.tokenId;
  const tokenId = event.params.tokenId.toString();
  const from = event.params.from.toHexString();
  const to = event.params.to.toHexString();
  const hash = event.transaction.hash.toHexString();

  /**
   * Token entity
   */
  let token = Token.load(tokenId);
  if (!token) {
    token = new Token(tokenId);
    token.tokenId = tokenIdBI;
  }
  token.owner = to;
  token.ownerId = to;
  token.save();

  /**
   * User entity
   */
  let user = User.load(to);
  if (!user) {
    user = new User(to);
    user.save();
  }

  /**
   * Burn entity
   */
  if (to === ADDRESS_ZERO) {
    const burn = new Burn(tokenId);
    burn.hash = hash;
    burn.token = token.id;
    burn.ownerId = from;
    burn.save();
  }
}
