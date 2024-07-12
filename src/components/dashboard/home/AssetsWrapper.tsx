import { getAssets } from "./mock-assets";
import AssetCardsList from "./AssetCardsList";

export default async function AssetsWrapper() {
  const assets = await getAssets();

  return (
    <AssetCardsList assets={assets} />
  );
}