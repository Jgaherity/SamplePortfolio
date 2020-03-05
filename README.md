# Simple portfolio example using KnockOutJS

[Watch my video to better understand the instructions below](https://www.youtube.com/watch?v=woRzqm4pBEk&feature=youtu.be)

This boilerplate portfolio playground highlights how to use knockoutJS to create simple hide/show interactions. To download locally, select the green "clone or download" button on top-right corner and copy URL.

![clone](https://camo.githubusercontent.com/677f1478bec470fee7d8f72bf448eaa4dde2e8cb/68747470733a2f2f692e696d6775722e636f6d2f304b454a5a39732e706e67)

Once copied, navigate to directory you wish you clone this repository to. Navigate using [this cheat sheet](https://skimfeed.com/blog/windows-command-prompt-ls-equivalent-dir/) mostly utilizing:
##### Mac
```
pwd                   print working directory (see which direcrory you're in)
ls                    list files / folders in that directory
cd [folder name]      open/enter folder
cd ..                 go back one level
```
##### PC

```
cd                     print working directory (see which direcrory you're in)
dir                    list files / folders
cd [folder name]       open [folder name]
cd ..                  go back one level in the path
```

once in desireable directory for cloning / copying project, enter
```
git clone [paste link]
```



### KnockOut documentation
#### Click Binding 
function onclick_changeSelected() accepts parameter for left nav. Note 
[Documentation](https://knockoutjs.com/documentation/click-binding.html)

 ```
  data-bind="click: function(){onclick_changeSelected('about')}"
```
  
#### CSS binding
when selected() observable  is set to 'about', enable the #selected class on the element
[Documentation](https://knockoutjs.com/documentation/css-binding.html)
```
data-bind="css: {'selected': selected() == 'about'}"
```

#### click & css binding are together, seperated by commma
```
<div class="l1" data-bind="click: function(){onclick_changeSelected('about')}, css: {'selected': selected() == 'about'}">About</div>
```




