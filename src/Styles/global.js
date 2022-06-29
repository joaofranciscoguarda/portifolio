import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		outline: 0;
	}

	:root{
		--primary: #08fdd8;
		--secundary: #FD2155;
		--terciary: #909096;
		--quartary: #E4EE89;
		--background: #1d1d1d;
		--white: #FFFFFF;
		--pacifico: 'Pacifico', cursive;
		--openSans: 'Open Sans', sans-serif;
		--transition: 'all 650ms ease-in-out'
	}

	html {
		scroll-behavior: smooth;
	}

	body {
		background-color: var(--background);
		color: var(--white);
		font-family: 'Open Sans', sans-serif;
	}

	span .html {
		font-family: 'Pacifico', cursive;
		font-size: 20px;
		color: var(--terciary);
	}

	span {
		color: var(--primary);
	}

	button {
		cursor: pointer;

		&:hover {
			border-color: var(--secundary);
			color: var(--secundary);

			& a {
				color: var(--secundary);
			}
		}
	}

	a {
		text-decoration: none;
		color: inherit;
		transition: all 250ms ease-in-out;

		&:hover{
			color: var(--secundary);
		}
	}

	ul {
		list-style: none;
	}

`;
