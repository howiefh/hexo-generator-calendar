# Calendar

Hexo generator plugin. Generate calendar for hexo theme [Landscape-F]. So you need to use hexo theme [Landscape-F], if you want this plugin to work properly. Or you can copy [calendar.ejs],[languages.js],[calendar.js] and [calendar.styl] to your path, and apply the change of [_variables.styl] and [after-footer.ejs] reference [here].

[中文介绍](http://howiefh.github.io/2016/04/29/hexo-s-calendar-plugin/)

## Install

Execute the following command.

```
npm install --save git://github.com/howiefh/hexo-generator-calendar.git
```

## Options

You can configure this plugin in _config.yml.

```
calendar:
    single: true
    root: calendar/
```
* single - Generate single file. (Default: true)
* root - When single's value is set to false, this value will take effect. (Default: calendar/)

## License

MIT

[Landscape-F]:https://github.com/howiefh/hexo-theme-landscape-f
[calendar.ejs]:https://github.com/howiefh/hexo-theme-landscape-f/blob/master/layout/_widget/calendar.ejs
[languages.js]:https://github.com/howiefh/hexo-theme-landscape-f/blob/master/source/js/languages.js
[calendar.js]:https://github.com/howiefh/hexo-theme-landscape-f/blob/master/source/js/calendar.js
[calendar.styl]:https://github.com/howiefh/hexo-theme-landscape-f/blob/master/source/css/_partial/calendar.styl
[_variables.styl]:https://github.com/howiefh/hexo-theme-landscape-f/blob/master/source/css/_variables.styl
[after-footer.ejs]:https://github.com/howiefh/hexo-theme-landscape-f/blob/master/layout/_partial/after-footer.ejs
[here]:https://github.com/howiefh/hexo-theme-landscape-f/compare/0.0.2...451796e
