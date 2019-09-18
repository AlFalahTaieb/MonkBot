/**
 * This is the main entrypoint to your Probot app
 * @param {import('probot').Application} app
 */
module.exports = app => {
  // Your code here
  app.log('Yay, the app was loaded!')

  app.on('issue_comment', async context => {
    if (context.payload.sender.type != "User") {
      return
    }
    const issueComment = context.issue({ body: '🧠Are you Okey ? 🧠' })
    return context.github.issues.createComment(issueComment)
  })
  app.on('issues.opened', async context => {
    const params = context.issue({labels: ['🧠 needs-response 🧠']})
    await context.github.issues.addLabels(params)
  })

  // For more information on building apps:
  // https://probot.github.io/docs/

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/
}
