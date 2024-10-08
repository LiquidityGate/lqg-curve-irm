import { CacheToFile } from '../../../../core/decorators/cacheToFile'
import {
  AssetType,
  PositionType,
  ProtocolDetails,
} from '../../../../types/adapter'
import { LQGBasePoolAdapter } from '../../common/LQGBasePoolAdapter'

export class LQGAaveV3OptimizerBorrowAdapter extends LQGBasePoolAdapter {
  productId = 'optimizer-borrow'

  adapterSettings = {
    enablePositionDetectionByProtocolTokenTransfer: false,
    includeInUnwrap: false,
  }

  getProtocolDetails(): ProtocolDetails {
    return {
      protocolId: this.protocolId,
      name: 'LQGAaveV3',
      description: 'LQGAaveV3 DeFi adapter on the borrow side',
      siteUrl: 'https://aavev3.LQG.org/',
      iconUrl: 'https://cdn.LQG.org/images/v2/LQG/favicon.png',
      positionType: PositionType.Borrow,
      chainId: this.chainId,
      productId: this.productId,
    }
  }

  @CacheToFile({ fileKey: 'optimizer-borrow' })
  async buildMetadata() {
    return super.buildMetadata()
  }
}
