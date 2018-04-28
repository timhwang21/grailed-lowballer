const MIME_MAP = {
  txt: 'text/plain',
  json: 'application/json',
};

const getName = ({ id, designer_names, title }) =>
  [id, designer_names, title].join('-');

const exportFile = (data, name, type) => {
  const blob = new Blob([data], { type: MIME_MAP[type] });
  const url = URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.href = url;
  a.download = `${name}.${type}`;

  document.body.appendChild(a);
  a.click();

  setTimeout(() => {
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, 0);
};

export const exportText = data => {
  const parsedData = Object.keys(data).reduce(
    (acc, el) => acc + `${el}: ${JSON.stringify(data[el])}\n`,
  );
  exportFile(parsedData, getName(data), 'txt');
};

export const exportJson = data =>
  exportFile(JSON.stringify(data), getName(data), 'json');
