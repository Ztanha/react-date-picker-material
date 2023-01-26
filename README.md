# TimePicker

TimePicker is a user interface component that allows the user to easily select a specific date. It provides an analog clock interface that is easy to use and intuitive. TimePicker can be easily integrated into other user interface components, making it a perfect choice for applications that require the user to select a time.

## Features

- DatePicker is responsive and works well on different devices and screen sizes.
- DatePicker appearance is based on Material design v3 with more features to improve the user experience for date input.

## Installation

To install DatePicker, run the following command:

`npm install react-material-time-picker`

## Interactive Demo

To see DatePicker in action, you can use the following link: https://mz39tu.csb.app/.

## Usage

To use DatePicker in your React application, import the DatePicker component and use it in your JSX code:

import DatePicker from 'react-material-time-picker';

Once you have imported the component, you can use it in your app as follows:

```jsx
    function App() {
        const [ date,setDate ] = useState(Date.now());
        const [ show,setShow ] = useState(true);
      return (
        <div className="App">
          <button onClick={()=>setShow(true)}>
              Click me!
          </button>
            <div>Date: {date}</div>
          <DatePicker date={ date }
                      show={ show }
                      hide={ ()=>setShow(false)}
                      setDate={ setDate }
                      // title={ 'Pick up a date' }
                      style={{ fontFamily:'Roboto',
                                width:'300px',
                                top:'10px',
                                zIndex:'1'
                      }}
          />
        </div>
      );
    }
    
    export default App;
```


## Props

DatePicker has the following props:

- `title`: The title that will be displayed at the top of the DatePicker modal.
- `hide`: A function for hiding the modal from the page
- `show`: A boolean value for showing the modal
- `date`: Is a default value for date in form of a timestamp.
- `theme` : Which can have two values of 'light' or 'dark'. This variable has set 'light' by default.
- `style`: Is an optional variable for styling the component. Can be used for changing font-family and etc.
- `colors`: An optional variable in form of an object including two possible theme light and dark, which by default is on 'light' mode

### `Colors` Variables

Each of the objects in the light and dark modes must include the following variables:
- `primary`: a CSS color value that represents the primary color of the theme
- `surfaceVariant`: a CSS color value that represents the surface variant color of the theme
- `onSurfaceVariant`: a CSS color value that represents the color of text or other elements on top of the surface variant color
- `surface`: a CSS color value that represents the surface color of the button
- `outlineVariant`: a CSS color value that represents the color of the lines
- `scrim`: a CSS color value that represents the scrim color of the theme
- `tertiaryContainer`: a CSS color value that represents the tertiary container color of the theme
- `onPrimary`: a CSS color value that represents the color of text or other elements on top of the primary color
- `surface3`: a CSS color value that represents the background color of the modal.


