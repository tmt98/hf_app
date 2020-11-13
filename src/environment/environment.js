const ip = '192.168.1.17';
const url = `http://${ip}:9999`;
var _Environments = {
  production: {BASE_URL: url},
  development: {BASE_URL: url},
};

const getEnvironment = () => {
  return _Environments['development'];
};

var Environment = getEnvironment();
module.exports = Environment;
