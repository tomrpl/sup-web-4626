import { SWRConfiguration } from "swr";

export const apiUrl = "https://api.superform.xyz/";

export default function (pageTitle: string = "", pageDescription: string = "") {
  const useTitle = pageTitle || "ERC-4626 - A Tokenized Vault Standard";
  const useDescription =
    pageDescription || "The 4626 Alliance is a group of leading protocols and applications that share the mission of supporting the development and deployment of ERC-4626 vaults";
  return {
    dapp: {
      apiUrl,
      swrConfig: {
        dedupingInterval: 60 * 1000,
        refreshWhenHidden: true,
        refreshWhenOffline: true,
        revalidateIfStale: true,
        revalidateOnFocus: true,
        revalidateOnReconnect: true,
      } as SWRConfiguration,

      swrConfigCached: {
        dedupingInterval: 60 * 60 * 1000,
        refreshInterval: 60 * 60 * 1000,
        refreshWhenHidden: false,
        refreshWhenOffline: false,
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
      } as SWRConfiguration,
    },
    openGraph: {
      title: `${useTitle} | 4626 Alliance`,
      description: useDescription,
      type: "website",
      locale: "en_US",
      name: "ERC-4626 Resources",
      images: [
        {
          url: process.env.NEXT_SEO_PREVIEW || "https://erc4626.info/preview.jpg",
          width: 1200,
          height: 628,
          alt: useTitle,
          type: "image/jpeg",
        },
      ],
      site_name: "ERC-4626",
    },
    twitter: {
      handle: process.env.NEXT_SEO_TWITTER || "@superformxyz",
      site: "@superformxyz",
      cardType: "summary_large_image",
    },
  };
}