const locators = {
    CREATE_ACCOUNT: {
        LINK_REGISTER: 'a:contains("Register now")',
        EMAIL: '[formcontrolname="email"]',
        FULLNAME: '[formcontrolname="fullName"]',
        USERNAME: '[formcontrolname="userName"]',
        PASSWORD: '[formcontrolname="password"]',
    },
    BTN_SAVE: '.btn',
    WARN_MESSAGE: '.text-danger',
    TITLE: (texto) => `h4:contains("${texto})"`
}
export default locators;