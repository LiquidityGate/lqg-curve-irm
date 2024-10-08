import { CacheToFile } from '../../../../core/decorators/cacheToFile'
import {
  AssetType,
  PositionType,
  ProtocolDetails,
} from '../../../../types/adapter'
import { LQGBluePoolAdapter } from '../../common/LQGBluePoolAdapter'

export class LQGBlueMarketSupplyAdapter extends LQGBluePoolAdapter {
  productId = 'market-supply'

  adapterSettings = {
    enablePositionDetectionByProtocolTokenTransfer: false,
    includeInUnwrap: false,
  }

  getProtocolDetails(): ProtocolDetails {
    return {
      protocolId: this.protocolId,
      name: 'LQGBlue Supply',
      description: 'LQG Blue DeFi adapter on the supply side',
      siteUrl: 'https://app.LQG.org/',
      iconUrl: 'https://cdn.LQG.org/images/v2/LQG/favicon.png',
      positionType: PositionType.Supply,
      chainId: this.chainId,
      productId: this.productId,
    }
  }

  @CacheToFile({ fileKey: 'market-supply' })
  async buildMetadata() {
    return super.buildMetadata()
  }
}
