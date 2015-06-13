export default function formatUrl({ baseUrl, size, theme, uri }) {
  return `${baseUrl}/?uri=${uri}&size=${size}&theme=${theme}`;
}
