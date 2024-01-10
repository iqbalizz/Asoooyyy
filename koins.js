import chalk from "chalk";
import readlineSync from "readline-sync";
import faker from "faker/locale/id_ID.js";
import {
    checkUserProfile,
    getAdvanceSignup,
    getCheckEmail, getCheckNumber, getCheckReferral, getFillAdvanceSignup, getLogin, getNewAccessToken, getRefreshToken, getRegister, getUserProfile, getVerifOtp, getVerificationNumber,
} from "./src/httpRequest.js";
import {
    chooseDomain,
} from "./src/cryptoEmail.js";
import delay from "delay";

//!Function Random Angka
const randstr = length =>
    new Promise((resolve, reject) => {
        var text = "";
        var possible =
            "1234567890";

        for (var i = 0; i < length; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        resolve(text);
    });

(async () => {
    const inputJumlahReferral = readlineSync.question(`[?] Masukkan Jumlah Create Account : `)
    for (let i = 0; i < inputJumlahReferral; i++) {
        console.log(`[!] ${chalk.yellow(`Create Account Ke-${i + 1}`)}`)
        //! FirstName, lastName, 
        const firstName = faker.name.lastName()
        const lastName = faker.name.lastName()

        const resultDomainEmail = await chooseDomain();
        console.log(`[!] ${chalk.yellow(`List Domain Yang Tersedia!`)}`)
        resultDomainEmail.domains.forEach((domain, index) => {
            const listDomain = `   - ${domain}`
            console.log(listDomain)

        });
        const domain = resultDomainEmail.domains;
        const randomIndex = Math.floor(Math.random() * domain.length);
        const selectedDomain = domain[randomIndex];
        // console.log(resultDomainEmail);
        // console.log(domain)
        console.log(`[!] Domain yang dipilih : ${chalk.green(selectedDomain)}`)

        const inputEmail = `${firstName}${lastName}${await randstr(2)}${selectedDomain}`
        console.log(`[!] Email Use : ${chalk.green(inputEmail)}`)

        // const inputEmail = readlineSync.question(`[?] Masukkan Email : `)

        const resultCheckEmail = await getCheckEmail(inputEmail)
        // console.log(resultCheckEmail)
        if (resultCheckEmail.statusCode === 200) {
            const message = resultCheckEmail.message;
            console.log(`[!] ${chalk.green(message)}`)

            const resultCheckReferral = await getCheckReferral();
            if (resultCheckReferral.statusCode === 201) {
                const messageCheckReferral = resultCheckReferral.message;
                console.log(`[!] ${chalk.green(messageCheckReferral)}`)

                const inputNumber = readlineSync.question(`[?] Masukkan Nomer HP (cth 62821): `)

                const resultCheckNumber = await getCheckNumber(inputNumber)
                if (resultCheckNumber.statusCode === 200) {
                    const messageCheckNumber = resultCheckNumber.message
                    console.log(`[!] ${chalk.green(messageCheckNumber)}`)

                    const resultRegister = await getRegister(firstName, lastName, inputNumber, inputEmail)

                    if (resultRegister.statusCode === 201) {
                        const messageRegister = resultRegister.message;
                        console.log(`[!] ${chalk.green(messageRegister)}`)

                        const resultLogin = await getLogin(inputNumber);
                        if (resultLogin.statusCode === 50513) {
                            const messageLogin = resultLogin.message;
                            console.log(`[!] ${chalk.green(messageLogin)}`)

                            //! Get accessToken
                            const accessToken = resultLogin.data.accessToken
                            const refreshToken = resultLogin.data.refreshToken;
                            // console.log(accessToken)
                            // console.log(refreshToken)

                            const resultVerifNumber = await getVerificationNumber(accessToken)
                            if (resultVerifNumber.statusCode === 200) {
                                const messageVerifNumber = resultVerifNumber.message;
                                console.log(`[!] ${chalk.green(messageVerifNumber)}`)

                                const inputOtp = readlineSync.question(`[?] Masukkan Kode OTP : `)

                                const resultVeriifOtp = await getVerifOtp(accessToken, inputOtp)

                                if (resultVeriifOtp.statusCode === 200) {
                                    const messageVerifOtp = resultVeriifOtp.message;
                                    console.log(`[!] ${chalk.green(messageVerifOtp)}`)

                                    const resultNewaccessToken = await getNewAccessToken(refreshToken)

                                    if (resultNewaccessToken.statusCode === 50519) {
                                        const messageNewToken = resultNewaccessToken.message;
                                        console.log(`[!] ${chalk.green(messageNewToken)}`)

                                        const newAccessToken = resultNewaccessToken.data.accessToken
                                        const newRefreshToken = resultNewaccessToken.data.refreshToken

                                        const resultUserProfile = await getUserProfile(newAccessToken)
                                        if (resultUserProfile.statusCode === 50519) {
                                            const messageUserProfile = resultUserProfile.message
                                            console.log(`[!] ${chalk.green(messageUserProfile)}`)

                                            const resultAdvannceSignup = await getAdvanceSignup()

                                            if (resultAdvannceSignup.statusCode === 200) {
                                                const messageAdvannceSignup = resultAdvannceSignup.message;
                                                console.log(`[!] ${chalk.green(messageAdvannceSignup)}`)

                                                const resultFillSignup = await getFillAdvanceSignup(newAccessToken)
                                                // console.log(resultFillSignup)

                                                if (resultFillSignup.statusCode === 200) {
                                                    const messageFillSignup = resultFillSignup.message;
                                                    console.log(`[!] ${chalk.green(messageFillSignup)}`)

                                                    const resultRefreshToken = await getRefreshToken(newRefreshToken)

                                                    const lastToken = resultRefreshToken.data.accessToken

                                                    const resultProfile = await checkUserProfile(lastToken)
                                                    // console.log(resultProfile)
                                                    if (resultProfile.statusCode === 200) {
                                                        const messageResultProfile = resultProfile.message;
                                                        console.log(`[!] ${chalk.green(messageResultProfile)}`)
                                                        console.log(`[!] ${chalk.yellow(`SUCCESS CREATE ACCOUNT! CHECK YOUR REFERRAL!`)}`)
                                                    } else {
                                                        const errorMessageProfile = resultProfile.message;
                                                        console.log(`[!] ${chalk.red(errorMessageProfile)}`)
                                                    }
                                                } else {
                                                    const errorMessageFillSignup = resultFillSignup.message;
                                                    console.log(`[!] ${chalk.red(errorMessageFillSignup)}`)
                                                }
                                            } else {
                                                const errorMessageAdvanceSignup = resultAdvannceSignup.message;
                                                console.log(`[!] ${chalk.red(errorMessageAdvanceSignup)}`)
                                            }
                                        } else {
                                            const errorMessageUserProfile = resultUserProfile.message;
                                            console.log(`[!] ${chalk.red(errorMessageUserProfile)}`)
                                        }
                                    } else {
                                        const errorMessageNewToken = resultNewaccessToken.message;
                                        console.log(`[!] ${chalk.red(errorMessageNewToken)}`)
                                    }
                                } else {
                                    const errorMessageVerifOtp = resultVeriifOtp.messae;
                                    console.log(`[!] ${chalk.red(errorMessageVerifOtp)}`)
                                }

                            } else {
                                const errorMessageVerifNumber = resultVerifNumber.message;
                                console.log(`[!] ${chalk.red(errorMessageVerifNumber)}`)
                            }
                        } else {
                            const errorMessageLogin = resultLogin.message;
                            connsole.log(`[!] ${chalk.red(errorMessageLogin)}`)
                        }
                    } else {
                        const errorMessageRegister = resultRegister.message;
                        console.log(`[!] ${chalk.red(errorMessageRegister)}`)
                    }
                } else {
                    const messageErrorCheckNumber = resultCheckNumber.message;
                    console.log(`[!] ${chalk.red(messageErrorCheckNumber
                    )}`)
                }

            } else {
                const messagErrorCheckReferral = resultCheckReferral.message
                console.log(`[!] ${chalk.red(messagErrorCheckReferral)}`)
            }
        } else {
            const messageErrorCheckEmail = resultCheckEmail.message;
            console.log(`[!] ${chalk.red(messageErrorCheckEmail)}`)
        }
        console.log()
        await delay(3 * 1000)
    }
})();