export const whiteList = ['http://127.0.0.1:5500', 'http://localhost:5050'];

export const options = {
  origin: (origin: any, callback: any) => {
    if (whiteList.includes(origin)) callback(null, true);
    else callback(new Error('Access forbidden'));
  }
};
