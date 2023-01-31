export { default } from "next-auth/middleware";

export const config = {
    matcher: [
        "/",
        "/second",
        "/third",
        "/api/:path*"
    ],
};
