const { log } = console;

const run = async () => {
  const result = await new Promise(res => res('Yeahh, it\'s work'));

  log(result);
};

export default run;
