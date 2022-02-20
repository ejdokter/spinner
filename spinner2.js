const str = '|/-\\|/-\\|\n'
const spinner = function (str) {
  for (let i = 0; i < str.length; i++) {
    setTimeout(() => {
      process.stdout.write("\r" + str.charAt(i))
    }, 200 * i)
  }
}

spinner(str)