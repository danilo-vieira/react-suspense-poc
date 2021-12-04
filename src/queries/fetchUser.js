export function fetchUser(timeout = 2000) {
  let result = '';
  let status = 'pending';

  const suspender = new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });

  suspender.then(() => {
    result = 'Danilo';
    status = 'success';
  }, 
  (error) => {
    status = 'error';
    result = error;
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