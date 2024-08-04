// TODO: BlockHash 파일로 가서 먼저 코드를 작성해주세요.
import BlockHash from "./BlockHash";

export default class BlockChainAddLink {
  constructor() {
    const genesisBlock = new BlockHash("hello");
    this.chain = [genesisBlock];
    this.previousHash;
  }

  // TODO: 새로운 블록을 추가하기 전에 이전 블록의 해시값을 previousHash에 추가해주세요.
  addBlock(block) {
    const currentBlockHash = this.chain[this.chain.length - 1].toHash();
    block.previousHash = currentBlockHash;
    this.chain.push(block);
  }
}
