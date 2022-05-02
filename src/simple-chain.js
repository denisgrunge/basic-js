const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  links: [],
  getLength() {
    return this.links.length;
  },
  addLink(value) {
    if (value === undefined) {
      this.links.push(' ');
    } else {
      this.links.push(value + '');
    }

    return this;
  },
  removeLink(position) {
    if (this.links[position]) {
      this.links.splice(position - 1, 1);
    } else {
      this.links = [];
      throw new NotImplementedError("You can't remove incorrect link!");
    }

    return this;
  },
  reverseChain() {
    this.links.reverse();

    return this;
  },
  finishChain() {
    const res = '( ' + this.links.join(' )~~( ') + ' )';
    this.links = [];

    return res;
  }
};

module.exports = {
  chainMaker
};
