module.exports = {
    '@tags': ['sample'],
    '最小構成のテストだよ:for github actions': function (client) {
        client
            .url('http://localhost:8000')
            .waitForElementVisible('body', 1000)
            .assert.title('Laravel')
    },
}
