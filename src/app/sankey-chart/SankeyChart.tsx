import './sankey-chart.css';

import { getColor, getLabel, minNodeValueOnTop } from './sankey-chart.utils';
import { sankeyMargin, theme } from './sankey-chart.theme';

import { ResponsiveSankey } from '@nivo/sankey';
import { ResponsiveSankeyProps } from './sankey-chart.types';

interface SankeyChartProps {
  data: ResponsiveSankeyProps['data'];
}

function SankeyChart({ data }: SankeyChartProps) {
  return (
    <div className="sankey-chart">
      <span className="sankey-chart__label sankey-chart__label--people">People</span>
      <span className="sankey-chart__label sankey-chart__label--tickets">Tickets</span>
      <span className="sankey-chart__label sankey-chart__label--projects">Projects</span>

      <ResponsiveSankey
        theme={theme}
        margin={sankeyMargin}
        data={data}
        align="end"
        colors={getColor}
        sort={minNodeValueOnTop}
        nodeOpacity={1}
        nodeHoverOthersOpacity={0.35}
        nodeThickness={12}
        nodeSpacing={4}
        nodeBorderWidth={0}
        nodeBorderRadius={0}
        linkBlendMode="hard-light"
        linkOpacity={0.5}
        linkHoverOthersOpacity={0.1}
        linkContract={0}
        enableLinkGradient={true}
        labelPosition="outside"
        enableLabels={true}
        labelPadding={2}
        label={getLabel}
        nodeTooltip={({ node }) => (
          <div className="sankey-chart__tooltip" style={{ color: node.color }}>
            {node.id}
          </div>
        )}
        linkTooltip={({ link }) => (
          <div className="sankey-chart__tooltip">
            <span style={{ color: link.source.color }}>{link.source.id}</span>
            <span style={{ color: link.color }}>&rarr;</span>
            <span style={{ color: link.target.color }}>{link.target.id}</span>: ${link.value}
          </div>
        )}
      />

      <span className="sankey-chart__label sankey-chart__label--bold sankey-chart__label--people-bold">PEOPLE</span>
      <span className="sankey-chart__label sankey-chart__label--bold sankey-chart__label--tickets-bold">TIME</span>
      <span className="sankey-chart__label sankey-chart__label--bold sankey-chart__label--projects-bold">EFFORT</span>
      <span className="sankey-chart__label sankey-chart__label--bold sankey-chart__label--milestones-bold">MILESTONES</span>
      <span className="sankey-chart__label sankey-chart__label--bold sankey-chart__label--magic-bold">MAGIC</span>
    </div>
  );
}

export { SankeyChart };
