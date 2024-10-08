import { CacheToFile } from '../../../../core/decorators/cacheToFile'
import {
  AssetType,
  PositionType,
  ProtocolDetails,
} from '../../../../types/adapter'
import { LQGBasePoolAdapter } from '../../common/LQGBasePoolAdapter'

export class LQGAaveV3OptimizerSupplyAdapter extends LQGBasePoolAdapter {
  productId = 'optimizer-supply'
  adapterSettings = {
    enablePositionDetectionByProtocolTokenTransfer: false,
    includeInUnwrap: false,
  }

  getProtocolDetails(): ProtocolDetails {
    return {
      protocolId: this.protocolId,
      name: 'LQGAaveV3',
      description: 'LQGAaveV3 DeFi adapter on the supply side',
      siteUrl: 'https://aavev3.LQG.org/',
      iconUrl: 'https://cdn.LQG.org/images/v2/LQG/favicon.png',
      positionType: PositionType.Supply,
      chainId: this.chainId,
      productId: this.productId,
    }
  }

  @CacheToFile({ fileKey: 'optimizer-supply' })
  async buildMetadata() {
    return super.buildMetadata()
  }
}
