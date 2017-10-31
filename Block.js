module.exports = class Block {
  static get genesis () {
    return new Block(
      0,
      '0',
      1501122600,
      'Our first block!',
      '00005bafdac2270f199b9dc112db574de5c47c090618fdaf130e50329097c7bd',
      47403
    )
  }

  constructor (
    index = 0,
    previousHash = '0',
    timestamp = new Date().getTime() / 1000,
    data = 'none',
    hash = '',
    nonce = 0
  ) {
    this.index = index
    this.previousHash = previousHash.toString()
    this.timestamp = timestamp
    this.data = data
    this.hash = hash.toString()
    this.nonce = nonce
  }
}