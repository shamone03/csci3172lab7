export function profileLoader(): Result<UserInfo> {
    const info: UserInfo = {
        firstName: localStorage.getItem("firstName") as string,
        lastName: localStorage.getItem("lastName") as string,
        email: localStorage.getItem("email") as string,
        season: "fall"
    };

    if (Object.values(info).some(i => i === undefined || i === null)) {
        return { success: false, message: "Invalid State", data: info };
    }

    return { success: true, message: "", data: info };
}