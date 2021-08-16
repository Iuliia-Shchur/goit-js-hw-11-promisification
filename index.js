// Task 1
// измененео logger, поскольку используется в другой задаче

const delay = ms => {
    return new Promise ((resolved) => {
        setTimeout(() => {
            resolved(ms)
        },ms)
    });
   };
   
   const log = time => console.log(`Resolved after ${time}ms`);
   
   // Вызовы функции для проверки
   delay(2000).then(log); // Resolved after 2000ms
   delay(1000).then(log); // Resolved after 1000ms
   delay(1500).then(log); // Resolved after 1500ms

//    Task 2
const users = [
    { name: 'Mango', active: true },
    { name: 'Poly', active: false },
    { name: 'Ajax', active: true },
    { name: 'Lux', active: false },
  ];
  
  const toggleUserState = (allUsers, userName) => {
    return new Promise((resolved) => {
        const updatedUsers = allUsers.map(user =>
            user.name === userName ? { ...user, active: !user.active } : user,
          );
          resolved(updatedUsers);
        })
    };
    
    
      
  const logger = updatedUsers => console.table(updatedUsers);
  
  
  /*
   * Должно работать так
   */
  toggleUserState(users, 'Mango').then(logger);
  toggleUserState(users, 'Lux').then(logger);


//   Task 3

// // Task 1



//    Task 2


//   Task 3

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  
  const makeTransaction = (transaction) => {
    const delay = randomIntegerFromInterval(200, 500);
    return new Promise((resolved, reject) => {
  
    setTimeout(() => {
      const canProcess = Math.random() > 0.3;
  
      if (canProcess) {
        resolved({id:transaction.id, time:delay});
      } else {
        reject(transaction.id);
      }
    }, delay);
  });
};
  
  const logSuccess = ({id, time}) => {
    console.log(`Transaction ${id} processed in ${time}ms`);
  };
  
  const logError = id => {
    console.warn(`Error processing transaction ${id}. Please try again later.`);
  };
  
   
  makeTransaction({ id: 70, amount: 150 })
    .then(logSuccess)
    .catch(logError);
  
  makeTransaction({ id: 71, amount: 230 })
    .then(logSuccess)
    .catch(logError);
  
  makeTransaction({ id: 72, amount: 75 })
    .then(logSuccess)
    .catch(logError);
  
  makeTransaction({ id: 73, amount: 100 })
    .then(logSuccess)
    .catch(logError);