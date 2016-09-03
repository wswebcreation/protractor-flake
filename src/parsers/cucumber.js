export default {
  name: 'cucumber',

  parse (cucumberRerunFile) {
    let failedSpecs = []
    let testsOutput = cucumberRerunFile.split(/\r?\n/)
    let SPECFILE_REG = /:\d+/g
    testsOutput.forEach(function (test) {
      let specfile = test.replace(SPECFILE_REG, '')
      failedSpecs.push(specfile)

    })
    return failedSpecs
  }
}
