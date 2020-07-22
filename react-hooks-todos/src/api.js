const todos = [
    {
      id: 1,
      text: "todo1",
      finished: true
    },
    {
      id: 2,
      text: "todo2",
      finished: false
    },
    {
      id: 3,
      text: "todo3",
      finished: true
    },
    {
      id: 4,
      text: "todo4",
      finished: false
    },
    {
      id: 5,
      text: "todo5",
      finished: false
    }
  ];
//   本地数据
// delay(2000)
// async await
// fn
  const delay = (time) => {
      return new Promise((resolve, reject) => {
        setTimeout({
            resolve
        },time)
      })
  }
  const withDelay = fn => async(...args) => {
      await delay(1000);
      return fn(...args);
  }
  export default fetchTodos = withDelay( params => {
      return Promise.resolve({
          
      })
  })
  