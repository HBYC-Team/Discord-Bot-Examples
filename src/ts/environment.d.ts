declare global {
	namespace NodeJS {
		interface ProcessEnv {
			TOKEN: string;
			clientId: string;
			NODE_ENV: "development" | "production";
		}
	}
}

export {};