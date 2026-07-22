import manifest from "../public/illustrations/example-pages/manifest.json";

export type ExampleVisualPage = {
  id: string;
  title: string;
  paragraphIndexes: number[];
  image: string;
  prompt: string;
};

type ManifestNode = {
  nodeId: string;
  galleryPages?: ExampleVisualPage[];
};

const pagesByNode = new Map(
  (manifest.nodes as ManifestNode[]).map((entry) => [entry.nodeId, entry.galleryPages ?? []]),
);

export function getExampleVisuals(nodeId: string): ExampleVisualPage[] {
  return pagesByNode.get(nodeId) ?? [];
}
