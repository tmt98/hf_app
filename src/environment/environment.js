var _Environments = {
  production: {BASE_URL: 'http://10.42.0.52:9999'},
  development: {BASE_URL: 'http://10.42.0.52:9999'},
};

const getEnvironment = () => {
  return _Environments['development'];
};

var Environment = getEnvironment();
module.exports = Environment;
