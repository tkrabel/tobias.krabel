---
description: Useful shortcodes and snippets for VS Code
---

# VSCode Snippets

Coding involves a lot of repetitive typing. Luckily most code editors provides shortcuts, commonly called `snippets`.2

### What is a snippet?

A snippet is just a bit of template code that you will frequently type. Instead of typing it, you can have a "trigger" which will pull up a context menu. Once you press tab, it will insert the code.

### How do I insert a snippet into VS Code?

Go to `Preferences: Configure User Snippets` then choose your language. Below are the JSON files that I use for each language that I commonly code with.

If you want to create your own snippets then I recommend installing the `Snippet Maker` extension. This will be particularly helpful for multiline snippets.

## Javascript Snippets

```json
{
	"Print to console": {
	  "prefix": "l",
	  "body": [
		"console.log('${1:variable}', ${1:variable})"
	  ],
	  "description": "Log output to console"
	},
	"Create JS comment (long)": {
	  "prefix": "///",
	  "body": [
		"/**",
		" * ${1:description}",
		" */"
	  ],
	  "description": "Create JS comment (long)"
	}
}
```
