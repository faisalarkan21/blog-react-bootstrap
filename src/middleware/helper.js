export const isEmpty = (prop) => {
  const result = Object.keys(prop).length === 0 && prop.constructor === Object;
  console.log(result);
  return result;
};

export const Message = {

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

};

