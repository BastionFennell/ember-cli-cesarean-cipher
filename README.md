# Ember-cli-cesarean-cipher

This is a simple Ember CLI addon that adds a cesarean cipher component, for all
of your text encryption needs. This was built for the addon blog post on the
Frontside's website, which you can read
[here](frontside.io/blog/2014/10/14/building-ember-cli-component-addons.html).

## Usage

```javascript
{{cesarean-cipher value="text to be encrypted" shift=IntToShiftBy}}
```

The cesarean cipher will shift each character forward in the alphabet the number
specified by shift and output that value in your handlebars. For example, if you
had

```javascript
{{cesarean-cipher value="abc" shift=2}}
```

it would come out in your template as

```
cde
```

## Installation

To use this amazing and versatile component in your own Ember CLI app, simply
install it with

```
npm install --save ember-cli-cesarean-cipher
```

Then, you can use it as if it were any other component within your app. It's
that simple!


## Further Reading / Useful Links

* ember: http://emberjs.com/
* ember-cli: http://www.ember-cli.com/
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

