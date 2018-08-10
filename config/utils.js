const project = process.argv[4] || 'demo'

module.exports = {
  project: project,
  port: 9000,
  publicPath: process.env.NODE_ENV === 'develop' ? '/' : `//partyjo.nextdog.cc/${project}/`
}