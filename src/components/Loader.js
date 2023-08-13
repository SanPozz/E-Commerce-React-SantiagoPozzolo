import { css } from '@emotion/css'
import { ClipLoader } from 'react-spinners';

export const Loader = () => {
    const override = css`
        display: block;
        margin: 100px;
`;

    return (
        <>
            <div className="loaderContainer">
                <ClipLoader color='#000000' css={override} size={150} />
            </div>
        </>
    )
}
