PIXI.DisplayObjectContainer.prototype.removeChildren = function(
  beginIndex,
  endIndex
) {
  if (beginIndex === undefined) {
    beginIndex = 0;
  }
  if (endIndex === undefined) {
    endIndex = this.children.length;
  }

  var range = endIndex - beginIndex;

  if (range > 0 && range <= endIndex) {
    var removed = this.children.splice(beginIndex, range);

    for (var i = 0; i < removed.length; i++) {
      var child = removed[i];
      child.parent = undefined;
    }

    return removed;
  } else if (range === 0 && this.children.length === 0) {
    return [];
  } else {
    throw new Error(
      'removeChildren: Range Error, numeric values are outside the acceptable range'
    );
  }
};
