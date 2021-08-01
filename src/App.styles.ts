import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	html {
		height: 100%;
	}

	body {
		text-align: center;
		font-family: 'IBM Plex Mono';
		background: rgb(255, 255, 255);
		background: linear-gradient(0deg, rgba(255, 255, 255, 1) 0%, rgba(9, 121, 90, 1) 44%, rgba(0,210,162,1) 100%);
		background-attachment: fixed;
	}

	h1, h2 {
		font-family: 'Tourney', mono space;
	}

	* {
		box-sizing: border-box;
		font-family: 'IBM Plex Mono', mono space;
	}

`;

export const ResultWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	> p {
		color: #fff;
		font-size: 2rem;
		margin: 10px;
	}

	.ResultBootcamp {
		background: rgb(0,210,162);
		background: linear-gradient(180deg, rgba(0,210,162,1) 0%, rgba(255,126,255,1) 23%, rgba(255,126,255,1) 53%, rgba(167,255,199,1) 100%);
	}
	.ResultOnline {
		background: rgb(167,255,199);
		background: linear-gradient(180deg, rgba(167,255,199,1) 0%, rgba(192,231,157,1) 62%, rgba(194,65,194,1) 100%);
	}
	.ResultTrad {
		background: rgb(194,65,194);
		background: linear-gradient(180deg, rgba(194,65,194,1) 0%, rgba(194,65,194,1) 48%, rgba(187,114,195,1) 64%, rgba(251,176,59,1) 100%);
	}
	.ResultTraineeship {

		background: rgb(251,176,59);
		background: linear-gradient(180deg, rgba(251,176,59,1) 0%, rgba(225,197,84,1) 54%, rgba(153,255,153,1) 100%);	
	}
	.ResultAlternative {
		background: rgb(153,255,153);
		background: linear-gradient(180deg, rgba(153,255,153,1) 0%, rgba(153,255,153,1) 40%, rgba(0,210,162,1) 100%);
	}
`;
