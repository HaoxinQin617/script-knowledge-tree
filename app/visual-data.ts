import { nodes } from "./task-data";

export type ScriptVisualVersions = {
  original: string;
  version2: string;
  version3: string;
};

export const visualVersionsById: Record<string, ScriptVisualVersions> = Object.fromEntries(
  nodes.map((node) => [node.id, {
    original: `/illustrations/mindmaps/${node.id}.png`,
    version2: `/illustrations/mindmaps-from-text-style2/${node.id}.svg`,
    version3: `/illustrations/mindmaps-from-text-style3/${node.id}.svg`,
  }]),
);

export function getVisualVersions(id: string): ScriptVisualVersions {
  return visualVersionsById[id];
}
