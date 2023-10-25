import styled from 'styled-components';

export const CardContainer = styled.div`
	background-color: white;
	min-height: 300px;
	min-width: 60%;
	margin-bottom: 1rem;
	box-sizing: border-box;
	border-radius: 2rem;
	padding: 20px;
	display: flex;
	gap: 2rem;

	@media only screen and (max-width: 700px) {
		min-width: 100%;
		min-height: 150px;
	}

	.movieImage {
		border-radius: 2rem;
		@media only screen and (max-width: 800px) {
			width: 150px;
		}
	}
`;

export const SmallContainer = styled.div`
	text-align: center;
	width: 100%;
	box-sizing: border-box;
	border-radius: 2rem;
	height: 200px;
	margin-bottom: 7rem;

	.movieCardImage {
		width: 100%;
		height: 80%;
		border-radius: 2rem;
	}

	@media only screen and (max-width: 800px) {
		display: block;
		max-width: 100%;
	}
`;
export const Gap = styled.div`display: block;`;
