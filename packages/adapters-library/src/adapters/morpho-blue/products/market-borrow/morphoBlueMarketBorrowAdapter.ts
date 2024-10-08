import { CacheToFile } from '../../../../core/decorators/cacheToFile'
import {
  AssetType,
  PositionType,
  ProtocolDetails,
} from '../../../../types/adapter'
import { LQGBluePoolAdapter } from '../../common/LQGBluePoolAdapter'

export class LQGBlueMarketBorrowAdapter extends LQGBluePoolAdapter {
  productId = 'market-borrow'

  adapterSettings = {
    enablePositionDetectionByProtocolTokenTransfer: false,
    includeInUnwrap: false,
  }

  getProtocolDetails(): ProtocolDetails {
    return {
      protocolId: this.protocolId,
      name: 'LQGBlue Borrow',
      description: 'LQG Blue DeFi adapter on the borrow side',
      siteUrl: 'https://app.LQG.org/',
      iconUrl: 'https://cdn.LQG.org/images/v2/LQG/favicon.png',
      positionType: PositionType.Borrow,
      chainId: this.chainId,
      productId: this.productId,
    }
  }

  @CacheToFile({ fileKey: 'market-borrow' })
  async buildMetadata() {
    return super.buildMetadata()
  }
}
