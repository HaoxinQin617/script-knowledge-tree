import manifest from "../public/illustrations/example-pages/manifest.json";
import type { ScriptNode } from "./script-data";
import { nodes, tasks, type TaskRecord } from "./task-data";

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

export type ExplanationGalleryEntry = {
  task: TaskRecord;
  node: ScriptNode;
  root: ScriptNode;
  cover: ExampleVisualPage;
  pageCount: number;
};

function rootFor(node: ScriptNode): ScriptNode {
  let root = node;
  const visited = new Set([node.id]);
  while (root.parent) {
    const parent = nodes.find((item) => item.id === root.parent);
    if (!parent || visited.has(parent.id)) break;
    visited.add(parent.id);
    root = parent;
  }
  return root;
}

export function getExplanationGalleryIndex(): ExplanationGalleryEntry[] {
  return nodes.flatMap((node) => {
    const pages = getExampleVisuals(node.id);
    if (!pages.length) return [];
    const root = rootFor(node);
    const task = tasks.find((item) => item.rootId === root.id);
    return task ? [{ task, node, root, cover: pages[0], pageCount: pages.length }] : [];
  });
}
