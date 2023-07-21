# guardians-assignment
- I started the assignment by going through the problem statement and understanding it as deeply as possible because I think a good understanding of the problem is necessary before we even try to solve it.
- I had some doubts after reading the problem statement, so I had those cleared as the next step.
- After that, I spend some time thinking about which option to choose, and I decided to go ahead with option-1 since I wanted to work on the step-wise form so that I can understand how they work and what approaches I can follow while implementing them.
- I created a mental model in my mind, a sort of rough walkthrough of the whole web app and its process, this is a step I always follow while working on something and it helps me a lot.
- Then I decided to create a simple UI in Figma so that I can have a layout of the whole web app and so that I don't spend time deciding how the pages will look while actually coding. [Figma Link](https://www.figma.com/file/T6QgZflcA1vlNs4WN5WPrw/Guardians-Assignment?type=design&node-id=0-1&mode=design)
- For designing I decided to go ahead with TailwindCss and DaisyUI since the focus was more on implementation rather than design.

### Requirements
- I stored the data in a simple js file, and then I just simply imported and displayed it in the app.
- For the filter based on name and area, I used a library called Fuse.js which according to Fuse.js docs is a "Powerful, lightweight fuzzy-search library, with zero dependencies." I decided to go ahead with this library because I wanted to filter the data as the user is typing and also to have a fuzzy search.
- Sorting is implemented using the inbuild sort function of javascript.

### Option 1
- I used the carousel component from DaisyUI to have the base design for the step-wise form.
- After that, I changed the carousel component as per the needs and the way I have implemented the general flow of the step-wise form is that I will only allow the user to go to the next step once they have they have filled the required input fields in the current step and those fields have valid data.
- After the user fills in all the required input fields, they can view the data that they have entered in the final step where the user can confirm and save the information which then shows an edit button to the user, if the user clicks on this button, it takes them back to the step-1 of the form and which allows them to edit whatever info they want.

### Challenges
- One of the biggest challenges for me was figuring out how to implement the sorting feature since we had to sort using either "Name" or "Area" and also had to store the last sorting option for the particular field.
- I decided to go ahead with this approach where I stored the order of sorting for both "Name" and "Area" inside an object while simultaneously also storing the property by which I have to sort.
```
const [sortState, setSortState] = useState({
    Name: "",
    Area: "",
  });
  const [currentPropertyToSort, setCurrentPropertySort] = useState("");

  const handleSorting = (propertyName) => {
    if (isNameOrAreaProperty(propertyName)) {
      setSortState((prevState) => ({
        ...prevState,
        [propertyName]:
          prevState[propertyName] === ""
            ? "asc"
            : prevState[propertyName] === "asc"
            ? "desc"
            : "",
      }));
      setCurrentPropertySort(propertyName);
    }
  };
```
- Another challenge or learning for me was implementing the validations and the process of the step-wise form.
