# Overviw

jquery plugin for countdown *d/h/m/s* with words (on russian).  
Main function 'deathline()'. Have params: *datetime*, *format*, *callback*.  

## Options

- `datetime`. A current time measured in the number of seconds since the Unix Epoch (January 1 1970 00:00:00 GMT).
- `format`. Acceptable values: "on". Addind "0" if need on start. F.e.: "1h:1m:1s" becomes to "01h:01m:01s"
- `callback`. You can set function, that will be called at the end of the timer.

## Usage

Html:
```
<span id="timer" data-deadline="1611397479">
    <span class="days">00</span>
    <span class="hours">00</span>:<span class="minutes">00</span>:<span class="seconds">00</span>
</span>
```

JS
```
$('#timer').deathline({
    datetime: $('#timer').attr('data-deadline'),
    format: 'on'
});
```
