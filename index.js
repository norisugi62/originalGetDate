const getDate = (type = 0) => {
  switch (type) {
    case 0:
      return new Date().toLocaleString();
    case 1:
      return new Date().toLocaleString('sv');
    case 2:
      return new Date().toLocaleString('sv').replace(/\D/g, '');
    default:
      return new Date().toLocaleString();
  }
};

module.exports = getDate;
