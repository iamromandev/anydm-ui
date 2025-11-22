import { component$, useSignal } from "@qwik.dev/core";

type InfoProps = {
    data: {
        title: string;
        thumbnail: string;
    };
};

export const Info = component$<InfoProps>(({ data }) => {
    return (
        <div>
            <div>
                <img src={data.thumbnail} alt="" width="200" />
            </div>
        </div>
    );
});
