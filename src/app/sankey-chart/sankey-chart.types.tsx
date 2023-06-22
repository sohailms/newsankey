import { ResponsiveSankey } from '@nivo/sankey';

type ExtendedSankeyNodeDatum = Parameters<
  Extract<Parameters<typeof ResponsiveSankey>[number]['colors'], Function>
>[number] & { group?: string };

type ResponsiveSankeyProps = React.ComponentProps<typeof ResponsiveSankey>;

export { ExtendedSankeyNodeDatum, ResponsiveSankeyProps };
