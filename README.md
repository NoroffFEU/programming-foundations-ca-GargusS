# The Toyota Object Report

:car:

##### A JavaScript Object by Geir Sønnesyn

---

## My Initial Thoughts

Recently, I purchased a new used car and found it interesting to use this car as the object for this assignment.

### The Process

To start, I considered the syntax and parts that go into creating an object, as well as the requirements of the assignment. According to the CA delivery instructions, the object had to include:

- String
- Number
- Boolean
- Array
- Function (method)

---

### Demonstrating Compliance with CA Criteria

To show that the CA criteria is met, I have included console.log statements in the .js file. You can open the index.html file in the browser devtools console to view the output of the log.

![Image of console logging](/img/code01.png?raw=true "Console log examples")

## Structure and Usage

My main goal was to create a descriptive object. As I started incorporating the functions (or methods), I found myself creating a comprehensive presentation of the object, which may appear complex at first glance. However, the structure itself is relatively simple, despite its appearance. The use of comments helps navigate through the code and understand the goals of each snippet.

### Dynamic Content Building

I wanted to prioritize the JavaScript part and minimize the reliance on HTML. To achieve a dynamic presentation, I focused on creating HTML elements using JavaScript. The code intelligently extracts information from the object and presents it in a meaningful manner within the HTML structure. This is accomplished by generating rows and populating them with the corresponding key-value pairs from the object. By doing so, the presentation remains flexible and adaptable, allowing for easy modification and expansion of the content.

Although the formatting of the object arrays is locked into specific HTML formatting, I believe it turned out well. Other data types such as strings and numbers can be added dynamically, generating a new row with respective spans for the property (key) and value.

The primary interactive feature of this presentation is the ability to select an fuel type from the dropdown list. Upon choosing an item, a corresponding sound is played back.

## Try it out :notes:

---

## References

<p>Image by <a
        href="https://pixabay.com/users/johnny_px-21062476/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=7113247">Johnny_px</a>
      from <a
        href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=7113247">Pixabay</a>
    </p>
    <p>
      <a href="https://iconscout.com/icons/electric" target="_blank">Free Electric Fav Icon</a> by <a
        href="https://iconscout.com/contributors/iyikon">Iyikon</a> on <a href="https://iconscout.com">IconScout</a>
    </p>
    <p>Sound Effects from <a
        href="https://pixabay.com/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=6130">Pixabay</a>
    </p>

## Comprehensive reference list MDN Web docs

1. `getElementById`: MDN web docs provides information about the `getElementById` method, which is used to access an HTML element with a specific ID from the document. You can find more details here: [getElementById - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById)

2. `createElement`: MDN web docs explains the `createElement` method, which creates an HTML element specified by the tag name. You can find more details here: [createElement - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)

3. `className`: MDN web docs provides information about the `className` property, which represents the class attribute of an HTML element. You can find more details here: [className - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/className)

4. `textContent`: MDN web docs explains the `textContent` property, which represents the text content of an HTML element. You can find more details here: [textContent - MDN](https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent)

5. `Array.isArray`: MDN web docs provides information about the `isArray` method, which checks whether a given value is an array. You can find more details here: [Array.isArray - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray)

6. `addEventListener`: MDN web docs explains the `addEventListener` method, which attaches an event listener to an HTML element. You can find more details here: [addEventListener - MDN](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)

7. `change` event: MDN web docs provides information about the `change` event, which is triggered when the value of an input element changes. You can find more details here: [change event - MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event)

8. `dataset`: MDN web docs explains the `dataset` property, which provides access to the custom data attributes of an HTML element. You can find more details here: [dataset - MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset)
