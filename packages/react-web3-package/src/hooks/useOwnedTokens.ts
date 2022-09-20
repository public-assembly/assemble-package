import { ZDK } from '@zoralabs/zdk'
import { useState, useEffect } from 'react'

const zdk = new ZDK({
  endpoint: 'https://api.zora.co/graphql'
})

export type OwnedTokensProps = {
  /**
   * address: ETH address
   */
  address: string
}

export function useOwnedTokens({ address }: OwnedTokensProps) {
  const [tokens, setTokens] = useState<any>()
  
  const zdkArgs = { 
    where: {
      ownerAddresses: [address] 
    }
  };

  useEffect(() => {
    const fetcher = async function () {
      const resp = await zdk.tokens(zdkArgs)
      if (resp) setTokens(resp?.tokens?.nodes)
    }
    fetcher()
  }, [])

  return {
    tokens,
  }
}