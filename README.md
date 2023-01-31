## [ **0** 基础 JavaScript? ] Day1 参数解析 ***HackParse***

> 花了一天边学边码了一个参数解析库（其实就一个函数）  
> **注意！** npmjs.com 对于 markdown 的解析有大问题，把 README下下来看吧

Usage:
```bash
npm i hackparse
```
```js
parse = require("hackparse",['r','o']) // Optional r,o 是布尔参数
console.log(parse(process.argv.slice(2)))
```
___
Size：如你所见，总共 4k ，`README.md` 和 `package.json` 是主程序的两倍多...

它能实现**绝大部分**的参数解析需求，还加入了**布尔参数**支持（应该是全网唯一了吧）  
具体就是你可以设定例如 `-r` 为 `Boolean`,  
那么 `command -r foo` 会被解析成`{ _: [ foo ], r: true }`  
而不是 `{ _: [], 'r':'foo' }`

不过 BSD 风格的不算哈（例如 `r foo` -> `{ _: ['r', 'foo'] }`）  
可以很好应用到如下的需求中：

```bash
command -r <file_old> <file_new>
```
command 我将要写的一个重命名命令，`-r` 代表一个参数 `是否启用 RegExp`  
虽然把 `-r` 提到后面更好，但是我喜欢这样写，而且另一个需求在我的下个项目就知道了！

___

### 不同之处：  
1. 不会将空参数 `-` `--` 忽略，它们会被解析成 `''`
2. 只有 BSD 风格参数才会添加到 `_:` key，它们对我而言是有用的

附

    Unix 风格：参数key 以「-」开头
    GNU 风格：参数key 以「--」开头
    BSD 风格：参数key 以空格分割
___

解析的是 Linux 参数，明天设计一下 Win 风格的

欢迎大家使用！[我的邮箱](mailto:admin@cure-x.net)

Git 仓库在右边，望多多提 issues 和 PR ！！！  
由于到最后思路乱了，只能靠打补丁，所以可能很多 bug，我自己也发现一些 ,,ԾㅂԾ,,  
所以望大佬们多多提出！
___
### 花絮
刚开始的我：？？？JS怎么这么反人类（我大概是习惯了Python的语法）  
过了一段时间：原来是我学识浅薄……
> 一开始写得极其繁琐，后来发现原来JS的数据类型也有合理与方便之处！