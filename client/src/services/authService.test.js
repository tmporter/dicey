import { logIn } from "./authService";

it("logs in", () => {
   const result = await logIn("test@test.com", "pa$$w0rd");
   expect(result).toBeTruthy();
});
