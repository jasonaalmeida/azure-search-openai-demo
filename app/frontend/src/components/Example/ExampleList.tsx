import { Example } from "./Example";

import styles from "./Example.module.css";

export type ExampleModel = {
    text: string;
    value: string;
};

const EXAMPLES: ExampleModel[] = [
    {
        text: "What partner designations does Hitachi Solutions hold?",
        value: "What partner designations does Hitachi Solutions hold?"
    },
    {
        text: "How does Hitachi Solutions approach testing on D365 projects?",
        value: "how does Hitachi Solutions approach testing on D365 projects?"
    },
    {
        text: "What artefacts and deliverables do we produce as part of consensus?",
        value: "What artefacts and deliverables do we produce as part of consensus?"
    }
];

interface Props {
    onExampleClicked: (value: string) => void;
}

export const ExampleList = ({ onExampleClicked }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {EXAMPLES.map((x, i) => (
                <li key={i}>
                    <Example text={x.text} value={x.value} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
