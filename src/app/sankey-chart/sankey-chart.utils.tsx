import { ExtendedSankeyNodeDatum } from './sankey-chart.types';
import colors from './sankey-chart-colors.module.css';

const minNodeValueOnTop = (
  nodeA: ExtendedSankeyNodeDatum,
  nodeB: ExtendedSankeyNodeDatum
) => {
  if (
    (nodeA.group === 'development' && nodeB.group === 'research') ||
    (nodeA.group === 'maintenance' && nodeB.group === 'development') ||
    (nodeA.group === 'expense' && nodeB.group === 'capitalization')
  ) {
    return 0;
  }
  if (nodeA.value! < nodeB.value!) return -1;
  if (nodeA.value! > nodeB.value!) return 1;
  return 0;
};

const getColor = (node: ExtendedSankeyNodeDatum) =>
  (node.group && colors[node.group]) || '#09657A';

const getLabel = (node: ExtendedSankeyNodeDatum) => {
  if (
    node.group === 'people' ||
    node.group === 'tickets' ||
    node.group === 'projects' ||
    node.group === 'placeholders'
  ) {
    return '';
  }
  return node.id;
};

export {
  getColor,
  getLabel,
  minNodeValueOnTop,
}