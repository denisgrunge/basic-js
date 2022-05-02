const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
 function getDNSStats(domains) {
  return domains.reduce((prev, curr) => {
    const subdomains = curr.split('.').reverse();
    let key = '';

    subdomains.forEach((item) => {
      key += '.' + item;

      if (prev[key]) {
        prev[key] += 1;
      } else {
        prev[key] = 1;
      }
    });

    return prev;
  }, {});
}

module.exports = {
  getDNSStats
};
