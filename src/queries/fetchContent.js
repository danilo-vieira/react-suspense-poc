export function fetchContent(timeout = 2000) {
  let result = '';
  let status = 'pending'

  const suspender = new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });

  suspender.then(() => {
    result = 'Stand out of the crowd';
    status = 'success';
  },
  (error) => {
    result = error;
    status = 'error';
  });

  return {
    read() {
        if (status === 'pending') {
            throw suspender;
        } else if (status === 'error') {
            throw result;
        } else if (status === 'success') {
            return result;
        }
    }
};
}