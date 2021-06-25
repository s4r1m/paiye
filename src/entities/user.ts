
export interface User {
    getEmail: () => String
}

export function newUser(email: String): User {
    if (!isValidEmail(email)) {
        throw new Error("Invalid email address.")
    }

    return Object.freeze({
        getEmail: () => email,
    })
}

function isValidEmail(email: String): Boolean {
    // some validation
    return true
}