import { useContext } from 'react'
import { JhooseCommerceContext } from '../providers/JhooseCommerceProvider/jhooseCommerceProvider'
import { AuthenticationContextType, JhooseCommerceClient, MarketContextType } from '@jhoose-commerce/core'
import { MarketContext } from '../providers/MarketProvider/marketProvider'

interface useJhooseCommerceProps {
  hasValidAuthcontext: boolean,
  authContext: AuthenticationContextType
  marketContext: MarketContextType
  client: () => JhooseCommerceClient | undefined
  notify: (message: string) => void
}

export function useJhooseCommerce(): useJhooseCommerceProps {
  const authContext = useContext<AuthenticationContextType>(JhooseCommerceContext) 
  const marketContext = useContext<MarketContextType>(MarketContext) 

  if ('token' in authContext) {
    return {
      hasValidAuthcontext: authContext?.token != null && authContext?.customerContext != null,
      authContext: authContext,
      marketContext: marketContext,
      client: () => {
        if (authContext?.token != null && authContext?.customerContext != null && authContext?.endpoint != null)
          return new JhooseCommerceClient(authContext, marketContext);
         
        return undefined
      },
      notify: (message: string) => {
        alert(message)
      }
    }
  }
  throw new Error('Cannot use `useJhooseCommerce` outside of <JhooseCommerceProvider/>')
}

export default useJhooseCommerce
