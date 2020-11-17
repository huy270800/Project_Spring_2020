export const sign_in = (name, pw) => {
    return {
        type: 'SIGN_IN',
        payload: {username: name, password: pw}
    }
}

export const sign_out = () => {
    return {
        type: 'SIGN_OUT'
    }
}