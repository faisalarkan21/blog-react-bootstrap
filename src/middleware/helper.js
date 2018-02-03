export const isEmpty = (prop) => {
  const result = Object.keys(prop).length === 0 && prop.constructor === Object;
  console.log(result);
  return result;
};

const Message = {
  success: {
    title: 'Pesan',
    message: 'Data Berhasil Disimpan',
    status: 'success',
  },
  error: {
    title: 'Pesan',
    message: 'Penyimpanan Data Gagal',
    status: 'error',
  },
  info: {
    title: 'Pesan',
    message: 'Penyimpanan Data Gagal',
    status: 'info',
  },
};

export const messageTypes = (key, customMessage) => {
  const result = Message[key];
  result.dismissAfter = 1500;

  if (customMessage) {
    result.message = customMessage;
  }
  return result;
};

