window.PIXI.DisplayObjectContainer.prototype.removeChildren = function fix(
  beginIndex,
  endIndex
) {
  if (beginIndex === undefined) {
    // eslint-disable-next-line
    beginIndex = 0;
  }
  if (endIndex === undefined) {
    // eslint-disable-next-line
    endIndex = this.children.length;
  }

  const range = endIndex - beginIndex;

  if (range > 0 && range <= endIndex) {
    const removed = this.children.splice(beginIndex, range);

    for (let i = 0; i < removed.length; i++) {
      const child = removed[i];
      child.parent = undefined;
    }

    return removed;
  } else if (range === 0 && this.children.length === 0) {
    return [];
  }
  throw new Error(
    'removeChildren: Range Error, numeric values are outside the acceptable range'
  );
};
