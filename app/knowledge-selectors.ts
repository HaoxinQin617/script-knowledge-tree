import { type ScriptNode } from "./script-data";
import { nodes, tasks, type TaskRecord } from "./task-data";

export type LevelGuideItem = {
  level: 1 | 2 | 3;
  label: string;
  nodeId?: string;
  active: boolean;
};

export type DefinitionIndexItem = {
  node: ScriptNode;
  root: ScriptNode;
  task: TaskRecord;
  level: 1 | 2 | 3;
};

const levelLabels: Record<ScriptNode["level"], string> = {
  1: "总览",
  2: "类别",
  3: "术语",
};

function findNode(nodeId: string) {
  return nodes.find((node) => node.id === nodeId);
}

export function getAncestors(nodeId: string): ScriptNode[] {
  const ancestors: ScriptNode[] = [];
  const visited = new Set<string>([nodeId]);
  let parentId = findNode(nodeId)?.parent;

  while (parentId && !visited.has(parentId)) {
    visited.add(parentId);
    const parent = findNode(parentId);
    if (!parent) break;
    ancestors.unshift(parent);
    parentId = parent.parent;
  }

  return ancestors;
}

export function getLevelGuide(nodeId: string): LevelGuideItem[] {
  const current = findNode(nodeId);
  const path = current ? [...getAncestors(nodeId), current] : [];
  const nodeAtLevel = new Map(path.map((node) => [node.level, node]));

  return ([1, 2, 3] as const).map((level) => ({
    level,
    label: levelLabels[level],
    nodeId: nodeAtLevel.get(level)?.id,
    active: current?.level === level,
  }));
}

function childNodes(node: ScriptNode): ScriptNode[] {
  const childIds = new Set(node.children ?? []);
  for (const candidate of nodes) {
    if (candidate.parent === node.id) childIds.add(candidate.id);
  }
  return [...childIds]
    .map((childId) => findNode(childId))
    .filter((child): child is ScriptNode => Boolean(child));
}

export function getDefinitionIndex(): DefinitionIndexItem[] {
  const result: DefinitionIndexItem[] = [];
  const visited = new Set<string>();

  for (const task of tasks) {
    if (task.category !== "definition") continue;
    const root = findNode(task.rootId);
    if (!root) continue;

    const visit = (node: ScriptNode) => {
      if (visited.has(node.id)) return;
      visited.add(node.id);
      result.push({
        node,
        root,
        task,
        level: node.level,
      });
      childNodes(node).forEach(visit);
    };

    visit(root);
  }

  return result;
}
