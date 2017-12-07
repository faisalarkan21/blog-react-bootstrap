export const showResults = values =>
  new Promise((resolve) => {
    setTimeout(() => {
      // simulate server latency
      alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
      resolve();
    }, 500);
  });

