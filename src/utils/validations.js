import validator from 'is_js';

const checkEmpty = (val, key) => {
    if (validator.empty(val.trim())) {
        return `${key}`;
    } else {
        return '';
    }
}

const checkMinLength = (val, minLength, key) => {
    if (val.trim().length < minLength) {
        return `Please enter valid ${key}`
    } else {
        return '';
    }
}

export default function (data) {
    const { userName, email, password, location, phoneNo, website,
        description, price, quantity, discount } = data

    if (userName !== undefined) {
        let emptyValidationText = checkEmpty(userName, 'Please enter your user name')
        if (emptyValidationText !== '') {
            return emptyValidationText;
        } else {
            let minLengthValidation = checkMinLength(userName, 3, 'userName')
            if (minLengthValidation !== '') {
                return minLengthValidation
            }
        }
    }

    if (email !== undefined) {
        let emptyValidationText = checkEmpty(email, 'Please enter your email')
        if (emptyValidationText !== '') {
            return emptyValidationText;
        } else {
            if (!validator.email(email)) {
                return 'Please enter valid email'
            }
        }
    }


    if (password !== undefined) {
        let emptyValidationText = checkEmpty(password, 'Please enter your password')
        if (emptyValidationText !== '') {
            return emptyValidationText;
        } else {
            let minLengthValidation = checkMinLength(password, 6, 'password')
            if (minLengthValidation !== '') {
                return minLengthValidation
            }
        }
    }


    if (location !== undefined) {
        let emptyValidationText = checkEmpty(location, 'Please enter your location')
        if (emptyValidationText !== '') {
            return emptyValidationText;
        } else {
            let minLengthValidation = checkMinLength(location, 3, 'location')
            if (minLengthValidation !== '') {
                return minLengthValidation
            }
        }
    }


    if (phoneNo !== undefined) {
        let emptyValidationText = checkEmpty(phoneNo, 'Please enter your Phone No')
        if (emptyValidationText !== '') {
            return emptyValidationText;
        } else {
            let minLengthValidation = checkMinLength(phoneNo, 11, 'Phone No')
            if (minLengthValidation !== '') {
                return minLengthValidation
            }
        }
    }

    if (website !== undefined) {
        let emptyValidationText = checkEmpty(website, 'Please enter your Website')
        if (emptyValidationText !== '') {
            return emptyValidationText;
        } else {
            let minLengthValidation = checkMinLength(website, 3, 'Website')
            if (minLengthValidation !== '') {
                return minLengthValidation
            }
        }
    }

    if (description !== undefined) {
        let emptyValidationText = checkEmpty(description, 'Please enter your description',)
        if (emptyValidationText !== '') {
            return emptyValidationText;
        } else {
            let minLengthValidation = checkMinLength(description, 3, 'description',)
            if (minLengthValidation !== '') {
                return minLengthValidation
            }
        }
    }

    if (price !== undefined) {
        let emptyValidationText = checkEmpty(price, 'Please enter your price')
        if (emptyValidationText !== '') {
            return emptyValidationText;
        } else {
            let minLengthValidation = checkMinLength(price, 3, 'price')
            if (minLengthValidation !== '') {
                return minLengthValidation
            }
        }
    }

    if (quantity !== undefined) {
        let emptyValidationText = checkEmpty(quantity, 'Please enter your quantity')
        if (emptyValidationText !== '') {
            return emptyValidationText;
        } else {
            let minLengthValidation = checkMinLength(quantity, 3, 'quantity')
            if (minLengthValidation !== '') {
                return minLengthValidation
            }
        }
    }

    if (discount !== undefined) {
        let emptyValidationText = checkEmpty(discount, 'Please enter your discount')
        if (emptyValidationText !== '') {
            return emptyValidationText;
        } else {
            let minLengthValidation = checkMinLength(discount, 3, 'discount')
            if (minLengthValidation !== '') {
                return minLengthValidation
            }
        }
    }

}

