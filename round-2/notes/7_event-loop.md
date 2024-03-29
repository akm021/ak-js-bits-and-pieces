## what is thread in programming

In simple terms, a thread in programming refers to a sequence of instructions that can be executed independently by a computer's processor. In the context of JavaScript being single-threaded, it means that JavaScript code is executed in a single sequence, one instruction at a time.

Imagine you're baking a cake. You follow a recipe step by step. You mix ingredients, bake the batter, and then decorate the cake. In this analogy, you are like a single-threaded JavaScript program. You do one task at a time, from start to finish, without doing anything else in between.

Now, consider a multi-threaded program, like a team of chefs working in a kitchen. Each chef can work on a different part of the meal simultaneously. One might be chopping vegetables, another might be boiling pasta, and another might be grilling meat. They can work independently and concurrently to speed up the cooking process.

In JavaScript, being single-threaded means that it can only perform one task at a time. If there's a long-running task, like fetching data from a server, the entire program may pause until that task is complete, which can affect the responsiveness of the application. However, there are ways to work around this limitation, such as using asynchronous programming techniques like callbacks, promises, and async/await, which allow JavaScript to handle multiple tasks without blocking the main thread.

## Javascript event loop

- javascript is a combination of synchronous and asynchronous events.

#### Synchronous events

- Javascript is primarily <span style="color: lime">**Single threaded**</span>
- There is always only one thread that does all of the work that needs to happen in javascript runtime.

  ![event-loop](./ss/event-loop-1.png)

---

- say for example <span style="color: lime">**single execution thread**</span> is currently executing a task in a webpage.

  ![evet-loop-2](./ss/event-loop-2.png)

- say it is doing some calculations which will take time, now at the same time if user clicks say hello button 2 times its registers 2 events, that need to be handled by this same <span style="color: lime">**single execution thread**</span>.
- but the single execution thread will not stop what he is currenly doing, instead he will make a mental note of the events which he need to execute next.
- this is stored in a QUEUE and it is processed as FIFO
- This QUEUE is called <span style="color: lime">**EVENT QUEUE**</span>.
- upon completing the first task , thread will check the next task to be executed in the event queue.

  ![event-queue](./ss/event-queue.png).

- whenever single execution thread done executing whatever it is executing, it will then check the event loop and start executing the next item. This will continues till the event queue is empty.
- This is like a loop where thread continuosly checking the event queue to what to execute next.

  ![event-loop](./ss/event-loop.png);

- #### this loop is called <span style="color: lime">**EVENT LOOP**</span>.

---

## Now what is it doing in execute step.

- it will execute a function
- it depends on if it is a **synchronous** or **asynchronous function.**

  **Asynchronous function**

  - if the function is an asynchronous function, then the thread need to wait till that function completes the execution.
  - say for example thread pics up an event that calls a function which calls another function, which inturn calls another function,

    ![event-loop](./ss/eventloop-5.png)

  - this is managed by a dataStructure called
    **`call stack`**

    ![call-stack-2](./ss/call-stack-2.png)

  ## How event loop and call stack are connected?

  - The event loop is a JavaScript concept that allows the browser to handle multiple events at the same time. It is responsible for managing the execution of JavaScript code and ensuring that it is executed in a timely manner.
  - The call stack is a data structure that stores the current state of execution of a JavaScript program. It contains a list of functions that are currently being executed, as well as the arguments that were passed to each function.
  - The event loop and the call stack work together to ensure that JavaScript code is executed in a smooth and efficient manner. When a JavaScript event occurs, it is added to the event queue. The event loop then checks the event queue to see if any events are waiting to be processed. If there are any events, the event loop will remove the first event from the queue and execute it.
  - When an event is executed, it may call other JavaScript functions. These functions are added to the call stack. The event loop will continue to execute events until the call stack is empty. Once the call stack is empty, the event loop will check the event queue again to see if any more events are waiting to be processed.
