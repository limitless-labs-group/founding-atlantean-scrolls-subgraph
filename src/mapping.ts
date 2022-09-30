import { Transfer as TransferEvent } from "../generated/AtlantisWorldFoundingAtlanteanScrolls/AtlantisWorldFoundingAtlanteanScrolls";
import { Token, User } from "../generated/schema";

export function handleTransfer(event: TransferEvent): void {
  let token = Token.load(event.params.tokenId.toString());
  if (!token) {
    token = new Token(event.params.tokenId.toString());
    token.tokenId = event.params.tokenId;
  }
  token.owner = event.params.to.toHexString();
  token.ownerId = event.params.to.toHexString();
  token.save();
  let user = User.load(event.params.to.toHexString());
  if (!user) {
    user = new User(event.params.to.toHexString());
    user.save();
  }
}
