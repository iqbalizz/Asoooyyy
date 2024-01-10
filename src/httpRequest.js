import fetch from "node-fetch";

export const getCheckEmail = (inputEmail) => new Promise((resolve, reject) => {
    fetch(`https://api.k-oins.com/p/user/v1/public/user/check/email`, {
        method: `POST`,
        headers: {
            'user-agent': 'Dart/3.1 (dart:io)',
            'x-api-key': 'zA3cxbRbKdeAVlvbtwZ6:Rg1XZ6VGXmFOHkIefBdTr6fgmyfYKyNQI9ZhMRXn',
            'Accept-Encoding': 'gzip, deflate, br',
            'Content-Length': '34',
            'host': 'api.k-oins.com',
            'content-type': 'application/json',
            'contenttype': 'application/json'
        },
        body: JSON.stringify({
            "email": `${inputEmail}`
        })
    })
        .then(res => resolve(res.json()))
        .catch(error => reject(error))
})

export const getCheckReferral = () => new Promise((resolve, reject) => {
    fetch(`https://api.k-oins.com/p/user/v1/public/referral/check`, {
        method: "POST",
        headers: {
            'user-agent': 'Dart/3.1 (dart:io)',
            'x-api-key': 'zA3cxbRbKdeAVlvbtwZ6:Rg1XZ6VGXmFOHkIefBdTr6fgmyfYKyNQI9ZhMRXn',
            'Accept-Encoding': 'gzip, deflate, br',
            'Content-Length': '31',
            'host': 'api.k-oins.com',
            'content-type': 'application/json',
            'contenttype': 'application/json'
        },
        body: JSON.stringify({
            "referralCode": "MUHIQB640506"
        })
    })
        .then(res => resolve(res.json()))
        .catch(error => reject(error))
})

export const getCheckNumber = (inputNumber) => new Promise((resolve, reject) => {
    fetch(`https://api.k-oins.com/p/user/v1/public/user/check/mobile-number`, {
        method: "POST",
        headers: {
            'user-agent': 'Dart/3.1 (dart:io)',
            'x-api-key': 'zA3cxbRbKdeAVlvbtwZ6:Rg1XZ6VGXmFOHkIefBdTr6fgmyfYKyNQI9ZhMRXn',
            'Accept-Encoding': 'gzip, deflate, br',
            'Content-Length': '32',
            'host': 'api.k-oins.com',
            'content-type': 'application/json',
            'contenttype': 'application/json'
        },
        body: JSON.stringify({
            "mobileNumber": `62${inputNumber}`
        })
    })
        .then(res => resolve(res.json()))
        .catch(error => reject(error))
})

export const getRegister = (firstName, lastName, inputNumber, inputEmail) => new Promise((resolve, reject) => {
    fetch(`https://api.k-oins.com/p/user/v1/public/user/sign-up`, {
        method: "POST",
        headers: {
            'user-agent': 'Dart/3.1 (dart:io)',
            'x-api-key': 'zA3cxbRbKdeAVlvbtwZ6:Rg1XZ6VGXmFOHkIefBdTr6fgmyfYKyNQI9ZhMRXn',
            'Accept-Encoding': 'gzip, deflate, br',
            'Content-Length': '176',
            'host': 'api.k-oins.com',
            'content-type': 'application/json',
            'contenttype': 'application/json'
        },
        body: JSON.stringify({
            "firstName": `${firstName}`,
            "lastName": `${lastName}`,
            "mobileNumber": `62${inputNumber}`,
            "password": "Iqbal12345",
            "email": `${inputEmail}`,
            "referrer": "MUHIQB640506", //!GANTI KODE REFF DISINI MUHIQB640506
            "signUpFrom": "MOBILE"
        })
    })
        .then(res => resolve(res.json()))
        .catch(error => reject(error))
})


export const getLogin = (inputNumber) => new Promise((resolve, reject) => {
    fetch(`https://api.k-oins.com/p/user/v1/public/user/login`, {
        method: "POST",
        headers: {
            'user-agent': 'Dart/3.1 (dart:io)',
            'x-api-key': 'zA3cxbRbKdeAVlvbtwZ6:Rg1XZ6VGXmFOHkIefBdTr6fgmyfYKyNQI9ZhMRXn',
            'Accept-Encoding': 'gzip, deflate, br',
            'Content-Length': '49',
            'host': 'api.k-oins.com',
            'content-type': 'application/json',
            'contenttype': 'application/json'
        },
        body: JSON.stringify({
            "login": `62${inputNumber}`,
            "password": "Iqbal12345"
        })
    })
        .then(res => resolve(res.json()))
        .catch(error => reject(error))
})

export const getVerificationNumber = (accessToken) => new Promise((resolve, reject) => {
    fetch(`https://api.k-oins.com/p/user/v1/user/verification/get/mobile-number`, {
        method: "get",
        headers: {
            'user-agent': 'Dart/3.1 (dart:io)',
            'x-api-key': 'zA3cxbRbKdeAVlvbtwZ6:Rg1XZ6VGXmFOHkIefBdTr6fgmyfYKyNQI9ZhMRXn',
            'Accept-Encoding': 'gzip, deflate, br',
            'authorization': `Bearer ${accessToken}`,
            'host': 'api.k-oins.com',
            'content-type': 'application/json',
            'contenttype': 'application/json'
        },
    })
        .then(res => resolve(res.json()))
        .catch(error => reject(error))
})

export const getVerifOtp = (accessToken, inputOtp) => new Promise((resolve, reject) => {
    fetch(`https://api.k-oins.com/p/user/v1/user/verification/verify/mobile-number`, {
        method: "POST",
        headers: {
            'user-agent': 'Dart/3.1 (dart:io)',
            'x-api-key': 'zA3cxbRbKdeAVlvbtwZ6:Rg1XZ6VGXmFOHkIefBdTr6fgmyfYKyNQI9ZhMRXn',
            'Accept-Encoding': 'gzip, deflate, br',
            'Content-Length': '16',
            'authorization': `Bearer ${accessToken}`,
            'host': 'api.k-oins.com',
            'content-type': 'application/json',
            'contenttype': 'application/json'
        },
        body: JSON.stringify({
            "otp": `${inputOtp}`
        })
    })
        .then(res => resolve(res.json()))
        .catch(error => reject(error))
})

export const getNewAccessToken = (refreshToken) => new Promise((resolve, reject) => {
    fetch(`https://api.k-oins.com/p/user/v1/auth/user/refresh`, {
        method: "POST",
        headers: {
            'user-agent': 'Dart/3.1 (dart:io)',
            'x-api-key': 'zA3cxbRbKdeAVlvbtwZ6:Rg1XZ6VGXmFOHkIefBdTr6fgmyfYKyNQI9ZhMRXn',
            'Accept-Encoding': 'gzip, deflate, br',
            'Content-Length': '0',
            'host': 'api.k-oins.com',
            'authorization': `Bearer ${refreshToken}`,
            'content-type': 'application/json'
        },
    })
        .then(res => resolve(res.json()))
        .catch(error => reject(error))
})

export const getUserProfile = (newAccessToken) => new Promise((resolve, reject) => {
    fetch(`https://api.k-oins.com/p/user/v1/auth/user/profile`, {
        method: "get",
        headers: {
            'user-agent': 'Dart/3.1 (dart:io)',
            'x-api-key': 'zA3cxbRbKdeAVlvbtwZ6:Rg1XZ6VGXmFOHkIefBdTr6fgmyfYKyNQI9ZhMRXn',
            'Accept-Encoding': 'gzip, deflate, br',
            'authorization': `Bearer ${newAccessToken}`,
            'host': 'api.k-oins.com',
            'content-type': 'application/json',
            'contenttype': 'application/json'
        },
    })
        .then(res => resolve(res.json()))
        .catch(error => reject(error))
})

export const getAdvanceSignup = () => new Promise((resolve, reject) => {
    fetch(`https://api.k-oins.com/p/user/v1/public/user/get/advance-sign-up/amount`, {
        method: "get",
        headers: {
            'user-agent': 'Dart/3.1 (dart:io)',
            'x-api-key': 'zA3cxbRbKdeAVlvbtwZ6:Rg1XZ6VGXmFOHkIefBdTr6fgmyfYKyNQI9ZhMRXn',
            'Accept-Encoding': 'gzip, deflate, br',
            'host': 'api.k-oins.com',
            'content-type': 'application/json',
            'contenttype': 'application/json'
        },
    })
        .then(res => resolve(res.json()))
        .catch(error => reject(error))
})

export const getFillAdvanceSignup = (newAccessToken) => new Promise((resolve, reject) => {
    fetch(`https://api.k-oins.com/p/user/v1/user/user/advance-sign-up`, {
        method: "PATCH",
        headers: {
            'user-agent': 'Dart/3.1 (dart:io)',
            'x-api-key': 'zA3cxbRbKdeAVlvbtwZ6:Rg1XZ6VGXmFOHkIefBdTr6fgmyfYKyNQI9ZhMRXn',
            'Accept-Encoding': 'gzip, deflate, br',
            'Content-Length': '160',
            'authorization': `Bearer ${newAccessToken}`,
            'host': 'api.k-oins.com',
            'content-type': 'application/json',
            'contenttype': 'application/json'
        },
        body: JSON.stringify({
            "maritalStatus": "UNMARRIED",
            "gender": "MALE",
            "dateOfBirth": "2001-08-03T00:00:00.000",
            "lastEducation": "BACHELOR_DEGREE",
            "subdistrict": "624330c030f7e71191ba7924"
        })
    })
        .then(res => resolve(res.json()))
        .catch(error => reject(error))
})


export const getRefreshToken = (newRefreshToken) => new Promise((resolve, reject) => {
    fetch(`https://api.k-oins.com/p/user/v1/auth/user/refresh`, {
        method: "POST",
        headers: {
            'user-agent': 'Dart/3.1 (dart:io)',
            'x-api-key': 'zA3cxbRbKdeAVlvbtwZ6:Rg1XZ6VGXmFOHkIefBdTr6fgmyfYKyNQI9ZhMRXn',
            'Accept-Encoding': 'gzip, deflate, br',
            'Content-Length': '0',
            'host': 'api.k-oins.com',
            'authorization': `Bearer ${newRefreshToken}`,
            'content-type': 'application/json'
        },
    })
        .then(res => resolve(res.json()))
        .catch(error => reject(error))
})

export const checkUserProfile = (lastToken) => new Promise((resolve, reject) => {
    fetch(`https://api.k-oins.com/p/user/v1/auth/user/profile`, {
        method: "get",
        headers: {
            'user-agent': 'Dart/3.1 (dart:io)',
            'x-api-key': 'zA3cxbRbKdeAVlvbtwZ6:Rg1XZ6VGXmFOHkIefBdTr6fgmyfYKyNQI9ZhMRXn',
            'Accept-Encoding': 'gzip, deflate, br',
            'authorization': `Bearer ${lastToken}`,
            'host': 'api.k-oins.com',
            'content-type': 'application/json',
            'contenttype': 'application/json'
        },
    })
        .then(res => resolve(res.json()))
        .catch(error => reject(error))
})