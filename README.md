## The Golden Rule: 

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

1. create html markup (select, img, input)
ACP
2. in app.js, grab dom elements and define your state

3. you'll then create a function that will return the string that holds all your change of state. lets call it createStatsString() 
ex. 'You've changed architecture X amount of times '

4. test that function
Passing? ACP
4. set up event listeners for each select that will update the img src based on which value was selected, updates the changes state and calls a displayStats() function

5. in displayStats() you'll set a variable equal to createStatsString with the parameters of the change in state counters
ACP
6. now start on the slogans, set up an event listener that listens for the submit button clicks and stores the value of the input box in a variable. push that value into an empty array called slogans. Call the function displaySlogan() and clear out the text in the input field 


test to make sure this is working with console lo
7. create a function called displaySlogan() that will loop through the slogans array and create an HTML element for each string in that array. Set the text content to whatever the value is in the array (let slogan of slogans)
1) **Make a drawing of your app. Simple "wireframes"**
1) **Once you have a drawing, name the HTML elements you'll need to realize your vision**
1) **For each HTML element ask: Why do I need this? (i.e., "we need div to display the results in")** 
1) **Once we know _why_ we need each element, think about how to implement the "Why" as a "How" (i.e., `resultsEl.textContent = newResults`)**
1) **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change?**
1) **Think about how to validate each of your features according to a Definition of Done. (Hint: console.log usually helps here.)**
1) **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**

Additional considerations:
- Ask: which of your HTML elements need to be hard coded, and which need to be dynamically generated?
- Consider your data model. 
  - What kinds of objects (i.e., Dogs, Friends, Todos, etc) will you need? 
  - What are the key/value pairs? 
  - What arrays might you need? 
  - What needs to live in a persistence layer?
- Is there some state we need to initialize?
- Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be resused?)
