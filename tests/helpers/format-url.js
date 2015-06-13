export default function formatUrl({ baseUrl, size, theme, uri, view }) {
  let src = `${baseUrl}/?uri=${uri}&size=${size}&theme=${theme}`;

  if (view) {
    src += `&view=${view}`;
  }

  return src;
}
