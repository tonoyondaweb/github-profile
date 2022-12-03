import "../styles/globals.css";
import type { AppProps } from "next/app";
import { createContext, Dispatch, SetStateAction, useState } from "react";

export interface UserContextInterface {
	user: string;
	setUser: Dispatch<SetStateAction<string>>;
}

export const userContext = createContext<UserContextInterface | null>(null);

export default function App({ Component, pageProps }: AppProps) {
	const [user, setUser] = useState("");
	return (
		<userContext.Provider value={{ user, setUser }}>
			<Component {...pageProps} />
		</userContext.Provider>
	);
}
