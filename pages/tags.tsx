import { GetStaticProps } from "next";
import { getTags } from "../lib/posts";
import { LinkList } from "../components/utils";
import Page from "../components/page";

export default function ({ allTags }: { allTags: string[] }) {
    return (
        <Page subtitle="tags">
            <LinkList row list={allTags.map((name) => ({ href: `/tags/${name}`, name }))} />
        </Page>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    return {
        props: {
            allTags: getTags(),
        },
    };
};
