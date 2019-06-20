# react-timy
A simple *time ago* React component.

### Features

- Tiny (under 3KB).
- Easy to customize (see below).
- Updates automatically over time.

### Installation

```sh
npm i react-timy
```

### Usage

```jsx
ReactDOM.render(<Timy date={new Date()} />, document.getElementById('root'));
```

### API

#### Timy

`<Timy />` is the component that renders the *time ago* text on your screen. It takes two arguments:

- `date`: a `Date` object that is used to calculate the *time ago* text. - Default: `new Date()` at the time of creation.
- `config`: an object with the string values required for rendering the *time ago* text. - Default: `formatConfig` (see below).

#### formatConfig

`formatConfig` is an object with all the strings required for rendering the *time ago* text. It contains the following key-value pairs:

```js
{
  justNow:          'Just now',
  aFewSecondsAgo:   'A few seconds ago',
  secondsAgo:       'seconds ago',
  aMinuteAgo:       'A minute ago',
  minutesAgo:       'minutes ago',
  anHourAgo:        'An hour ago',
  hoursAgo:         'hours ago',
  aDayAgo:          'A day ago',
  daysAgo:          'days ago',
  aWeekAgo:         'A week ago',
  weeksAgo:         'weeks ago',
  aMonthAgo:        'A month ago',
  monthsAgo:        'months ago',
  aYearAgo:         'A year ago',
  yearsAgo:         'years ago'
}
```

You can create your own configuration object and use it with the `<Timy />` component. Remember to provide a string for each one of the values mentioned above.

---

`react-timy` is licensed under the **MIT License**.
