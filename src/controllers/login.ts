export const loginAction: ActionFunction<Result<any>> = (req) => {
    const data = Object.fromEntries(req);
    return { data, success: false, message: "ERROR" };
}