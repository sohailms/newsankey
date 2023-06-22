import { Theme } from "@nivo/core";

const colors: Record<string, string> = {
  people: '#09657A',
  tickets: '#09657A',
  projects: '#C29913',
  research: '#16BDBD',
  development: '#2096B0',
  maintenance: '#4E87C8',
  capitalize: '#50C190',
  expense: '#86D46E',
};

const theme: Theme = {
  labels: {
    text: {
      fontSize: '6px',
    },
  },
};

const sankeyMargin = { left: 6, top: 16, right: 28, bottom: 32 };

export {
  colors,
  sankeyMargin,
  theme,
}